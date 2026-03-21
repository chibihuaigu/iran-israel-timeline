# -*- coding: utf-8 -*-
"""
提取HTML中的所有事件数据 - 使用div计数器处理嵌套
"""

import re
import json
import os
from datetime import datetime, timezone, timedelta

def extract_div_content(html, start_pos):
    """从指定位置提取完整的div内容（处理嵌套）"""
    div_count = 0
    i = start_pos
    
    while i < len(html):
        if html[i:i+4] == '<div' and (html[i+4] == ' ' or html[i+4] == '>'):
            div_count += 1
            i += 4
        elif html[i:i+6] == '</div>':
            div_count -= 1
            if div_count == 0:
                return html[start_pos:i+6]
            i += 5
        i += 1
    
    return html[start_pos:]

def extract_events_from_html():
    html_path = r'E:\WorkBuddy\Claw\iran-israel\iran-israel-timeline.html'
    
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # 找到 timeline 部分
    timeline_start = html.find('<div class="timeline">')
    if timeline_start == -1:
        print("未找到timeline部分")
        return None
    
    # 找到 timeline 的结束（下一个 script 标签之前）
    script_pos = html.find('<script src="data/', timeline_start)
    if script_pos == -1:
        script_pos = html.find('\n        <script', timeline_start)
    
    timeline_end = script_pos if script_pos != -1 else len(html)
    timeline_html = html[timeline_start:timeline_end]
    
    print(f"timeline范围: {timeline_start} - {timeline_end}, 长度: {len(timeline_html)}")
    
    # 提取每个 date-group
    date_groups = []
    pos = 0
    
    while True:
        # 找到下一个 date-group
        group_start = timeline_html.find('<div class="date-group" id="', pos)
        if group_start == -1:
            break
        
        # 提取完整的 date-group div
        group_html = extract_div_content(timeline_html, group_start)
        pos = group_start + len(group_html)
        
        # 提取ID
        id_match = re.search(r'id="([^"]+)"', group_html)
        if not id_match:
            continue
        group_id = id_match.group(1)
        
        # 提取日期标签
        label_match = re.search(r'<div class="date-label"[^>]*>([^<]+?)<span class="date-day">([^<]+)</span>', group_html)
        if not label_match:
            print(f"  警告: {group_id} 没有找到日期标签")
            continue
        
        date_str = label_match.group(1).strip()
        day_str = label_match.group(2).strip()
        
        # 解析天数
        day_num = 0
        day_match = re.search(r'第(\d+)天', day_str)
        if day_match:
            day_num = int(day_match.group(1))
        
        # 提取事件
        events = []
        
        # 找到 events-container
        container_start = group_html.find('<div class="events-container">')
        if container_start == -1:
            print(f"  警告: {group_id} 没有找到 events-container")
            date_groups.append({
                'id': group_id,
                'date': date_str,
                'day': day_num,
                'events': events
            })
            continue
        
        container_html = group_html[container_start:]
        
        # 提取每个 event-card
        card_pos = 0
        card_count = 0
        while True:
            card_start = container_html.find('<div class="event-card', card_pos)
            if card_start == -1:
                break
            
            # 提取完整的事件卡片
            card_html = extract_div_content(container_html, card_start)
            card_pos = card_start + len(card_html)
            card_count += 1
            
            # 解析事件
            event_data = parse_event_card(card_html)
            if event_data and event_data.get('title'):
                events.append(event_data)
        
        print(f"  {group_id}: 找到 {card_count} 个卡片, 解析出 {len(events)} 个事件")
        
        date_groups.append({
            'id': group_id,
            'date': date_str,
            'day': day_num,
            'events': events
        })
    
    return date_groups

def parse_event_card(card_html):
    """解析单个事件卡片"""
    event_data = {
        'type': 'normal',
        'isNew': False,
        'tags': [],
        'sources': []
    }
    
    # 判断类型
    if 'event-card major' in card_html or 'event-card  major' in card_html:
        event_data['type'] = 'major'
    
    # 判断是否新事件
    if 'new-badge' in card_html or 'event-new' in card_html:
        event_data['isNew'] = True
    
    # 提取时间
    time_match = re.search(r'<div class="event-time">([^<]+)</div>', card_html)
    if time_match:
        event_data['time'] = time_match.group(1).strip()
    
    # 提取分类标签
    tag_pattern = r'<span class="category-tag[^"]*">([^<]+)</span>'
    tags = re.findall(tag_pattern, card_html)
    event_data['tags'] = [t.strip() for t in tags if t.strip()]
    
    # 提取标题
    title_match = re.search(r'<div class="event-title">(.*?)</div>\s*</div>', card_html, re.DOTALL)
    if title_match:
        title_html = title_match.group(1)
        # 移除标签
        title_clean = re.sub(r'<span[^>]*>.*?</span>', '', title_html, flags=re.DOTALL)
        title_clean = re.sub(r'<[^>]+>', '', title_clean)
        event_data['title'] = title_clean.strip()
    
    # 提取内容
    content_match = re.search(r'<div class="event-content">(.*?)</div>', card_html, re.DOTALL)
    if content_match:
        content = content_match.group(1)
        content = re.sub(r'<[^>]+>', '', content)
        event_data['content'] = content.strip()
    
    # 提取来源
    sources_pattern = r'<a[^>]*class="source-link[^"]*"[^>]*href="([^"]+)"[^>]*>([^<]+)</a>'
    for src_match in re.finditer(sources_pattern, card_html):
        src_name = src_match.group(2).strip()
        event_data['sources'].append({
            'name': src_name,
            'url': src_match.group(1).strip(),
            'official': 'official' in src_match.group(0)
        })
    
    return event_data

def get_current_time():
    """获取当前北京时间"""
    beijing_tz = timezone(timedelta(hours=8))
    now = datetime.now(beijing_tz)
    return now.strftime('%Y年%m月%d日 %H:%M')

def create_js_data_file(date_groups):
    """创建JS数据文件"""
    
    total_events = sum(len(g['events']) for g in date_groups)
    date_groups_sorted = sorted(date_groups, key=lambda x: x['day'], reverse=True)
    
    js_content = f'''/**
 * 伊朗-以色列冲突时间轴 - 完整事件数据
 * 架构：纯数据驱动模式 v2.0
 */

var TIMELINE_DATA = {{
    meta: {{
        title: "伊朗-以色列冲突事件时间轴",
        startDate: "2026-02-28",
        lastUpdate: "{get_current_time()}",
        version: "2.0.0"
    }},
    
    stats: {{
        totalDays: 18,
        totalEvents: {total_events},
        attackWaves: 54,
        iranDeaths: 1332,
        israelDeaths: 15,
        usDeaths: 13,
        displaced: 4100000,
        lebanonDeaths: 826,
        childDeaths: 202
    }},
    
    dates: {json.dumps(date_groups_sorted, ensure_ascii=False, indent=4)}
}};

function renderTimeline() {{
    var container = document.querySelector('.timeline');
    if (!container || !TIMELINE_DATA) return;
    
    var html = '';
    
    TIMELINE_DATA.dates.forEach(function(dateGroup) {{
        html += '<div class="date-group" id="' + dateGroup.id + '">';
        html += '<div class="date-label" onclick="scrollToDate(\\'' + dateGroup.id + '\\')">';
        html += dateGroup.date + ' <span class="date-day">· 第' + dateGroup.day + '天</span>';
        html += '</div>';
        html += '<div class="events-container">';
        
        dateGroup.events.forEach(function(event) {{
            var classes = 'event-card';
            if (event.type === 'major') classes += ' major';
            if (event.isNew) classes += ' event-new';
            
            html += '<div class="' + classes + '">';
            
            if (event.time) {{
                html += '<div class="event-time">' + event.time + '</div>';
            }}
            
            html += '<div class="event-header">';
            html += '<div class="event-title">';
            
            if (event.isNew) {{
                html += '<span class="new-badge">NEW</span> ';
            }}
            
            if (event.tags && event.tags.length > 0) {{
                event.tags.forEach(function(tag) {{
                    var tagClass = '';
                    if (event.type === 'major') tagClass = 'major-tag';
                    else if (tag.includes('人道')) tagClass = 'humanitarian-tag';
                    html += '<span class="category-tag ' + tagClass + '">' + tag + '</span> ';
                }});
            }}
            
            html += event.title;
            html += '</div></div>';
            
            if (event.content) {{
                html += '<div class="event-content">' + event.content + '</div>';
            }}
            
            if (event.sources && event.sources.length > 0) {{
                html += '<div class="event-sources">';
                event.sources.forEach(function(src) {{
                    var srcClass = src.official ? 'source-link official' : 'source-link';
                    html += '<a class="' + srcClass + '" href="' + src.url + '" target="_blank">' + src.name + '</a>';
                }});
                html += '</div>';
            }}
            
            html += '</div>';
        }});
        
        html += '</div></div>';
    }});
    
    container.innerHTML = html;
    
    var subtitle = document.querySelector('.subtitle');
    if (subtitle) {{
        subtitle.textContent = '2026年2月28日 - 3月17日 · 第18天 · 美军累计打击1.5万个目标';
    }}
    
    var badge = document.getElementById('update-badge');
    if (badge) {{
        badge.textContent = '最后更新：' + TIMELINE_DATA.meta.lastUpdate;
    }}
    
    if (typeof filterEvents === 'function') {{
        filterEvents();
    }}
}}

if (document.readyState === 'loading') {{
    document.addEventListener('DOMContentLoaded', renderTimeline);
}} else {{
    renderTimeline();
}}
'''
    
    return js_content

if __name__ == '__main__':
    print("正在提取HTML中的事件数据...\n")
    date_groups = extract_events_from_html()
    
    if date_groups:
        total_events = sum(len(g['events']) for g in date_groups)
        print(f"\n总计: {len(date_groups)} 个日期组, {total_events} 个事件")
        
        # 保存JSON
        json_path = r'E:\WorkBuddy\Claw\iran-israel\data\events_extracted.json'
        os.makedirs(os.path.dirname(json_path), exist_ok=True)
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(date_groups, f, ensure_ascii=False, indent=2)
        print(f"JSON已保存: {json_path}")
        
        # 生成JS
        js_content = create_js_data_file(date_groups)
        js_path = r'E:\WorkBuddy\Claw\iran-israel\data\timeline-data.js'
        with open(js_path, 'w', encoding='utf-8') as f:
            f.write(js_content)
        print(f"JS已保存: {js_path}")
    else:
        print("未能提取到事件数据")
