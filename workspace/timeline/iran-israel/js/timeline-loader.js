/**
 * 时间轴数据加载器
 * 用途：动态更新最新数据（可选）
 * 说明：如果 TIMELINE_DATA 已加载，则渲染最新事件；否则使用 HTML 内嵌数据
 */

function initTimeline() {
    // 检查是否有动态数据
    if (typeof TIMELINE_DATA !== 'undefined') {
        const data = TIMELINE_DATA;
        
        // 1. 更新页面元信息
        updateMetaInfo(data.meta);
        
        // 2. 更新统计数据
        updateStats(data.stats);
        
        // 3. 渲染时间轴事件（替换 HTML 内嵌内容）
        replaceTimeline(data.dates);
        
        // 4. 更新时间显示
        updateTimeDisplay(data.meta.lastUpdate);
        
        console.log('动态数据加载完成');
    } else {
        console.log('使用 HTML 内嵌数据');
    }
}

// 更新页面元信息
function updateMetaInfo(meta) {
    const titleEl = document.querySelector('title');
    if (titleEl && meta.title) titleEl.textContent = meta.title;
    
    const subtitleEl = document.getElementById('latest-wave-subtitle');
    if (subtitleEl && meta.totalDays) {
        subtitleEl.textContent = '最新：第' + meta.totalDays + '天';
    }
}

// 更新统计数据
function updateStats(stats) {
    const mapping = {
        'warDays': stats.totalDays,
        'eventCount': stats.attackWaves,
        'casualtyCount': stats.iranDeaths,
        'israelCasualty': stats.israelDeaths,
        'usCasualty': stats.usDeaths,
        'iranCasualty': stats.displaced
    };
    
    for (const [id, value] of Object.entries(mapping)) {
        const el = document.getElementById(id);
        if (el && value !== undefined) {
            el.textContent = typeof value === 'number' ? value.toLocaleString() : value;
        }
    }
}

// 替换时间轴内容
function replaceTimeline(dates) {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    dates.forEach(function(dateData) {
        const dateGroup = createDateGroup(dateData);
        timeline.appendChild(dateGroup);
    });
}

// 创建日期组
function createDateGroup(dateData) {
    const dateGroup = document.createElement('div');
    dateGroup.className = 'date-group';
    dateGroup.id = dateData.id;
    
    const dateLabel = document.createElement('div');
    dateLabel.className = 'date-label';
    dateLabel.innerHTML = dateData.date + ' <span class="date-day">· 第' + dateData.day + '天</span>';
    dateGroup.appendChild(dateLabel);
    
    const eventsContainer = document.createElement('div');
    eventsContainer.className = 'events-container';
    
    if (dateData.events) {
        dateData.events.forEach(function(event) {
            const eventCard = createEventCard(event);
            eventsContainer.appendChild(eventCard);
        });
    }
    
    dateGroup.appendChild(eventsContainer);
    return dateGroup;
}

// 创建事件卡片
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card' + (event.type === 'major' ? ' major' : '');
    
    if (event.time) {
        const timeDiv = document.createElement('div');
        timeDiv.className = 'event-time';
        timeDiv.textContent = event.time;
        card.appendChild(timeDiv);
    }
    
    if (event.title) {
        const header = document.createElement('div');
        header.className = 'event-header';
        
        const titleDiv = document.createElement('div');
        titleDiv.className = 'event-title';
        
        if (event.isNew) {
            const newBadge = document.createElement('span');
            newBadge.className = 'new-badge';
            newBadge.textContent = 'NEW';
            titleDiv.appendChild(newBadge);
        }
        
        if (event.tags && event.tags.length > 0) {
            const tagSpan = document.createElement('span');
            let tagClass = 'category-tag';
            if (['突发', '重要', '军事'].includes(event.tags[0])) tagClass += ' major-tag';
            else if (event.tags[0] === '人道') tagClass += ' humanitarian-tag';
            else if (event.tags[0] === '外交') tagClass += ' diplomatic-tag';
            tagSpan.className = tagClass;
            tagSpan.textContent = event.tags[0];
            titleDiv.appendChild(tagSpan);
        }
        
        titleDiv.appendChild(document.createTextNode(event.title));
        header.appendChild(titleDiv);
        card.appendChild(header);
    }
    
    if (event.content) {
        const contentDiv = document.createElement('div');
        contentDiv.className = 'event-content';
        contentDiv.textContent = event.content;
        card.appendChild(contentDiv);
    }
    
    if (event.sources && event.sources.length > 0) {
        const sourcesDiv = document.createElement('div');
        sourcesDiv.className = 'event-sources';
        
        event.sources.forEach(function(source) {
            const link = document.createElement('a');
            link.className = 'source-link' + (source.official ? ' official' : '');
            link.href = source.url;
            link.target = '_blank';
            link.textContent = source.name;
            sourcesDiv.appendChild(link);
        });
        
        card.appendChild(sourcesDiv);
    }
    
    return card;
}

// 更新时间显示
function updateTimeDisplay(lastUpdate) {
    const updateBadge = document.getElementById('update-badge');
    if (updateBadge) updateBadge.textContent = '最后更新：' + lastUpdate;
    
    const footerTime = document.querySelector('.footer-update-time');
    if (footerTime) footerTime.textContent = lastUpdate;
}

// 初始化
document.addEventListener('DOMContentLoaded', initTimeline);
