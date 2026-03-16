/**
 * 时间轴数据加载器
 * 使用 script 标签加载 JS 数据文件（兼容本地 file:// 协议）
 */

// 加载最新事件数据（直接读取全局变量）
function loadLatestEvents() {
    // 检查数据是否已加载
    if (typeof LATEST_EVENTS_DATA === 'undefined') {
        console.error('数据文件未加载，请确保 latest-events.js 已正确引入');
        return null;
    }
    
    const data = LATEST_EVENTS_DATA;
    
    // 更新统计数据
    updateStats(data.stats);
    
    // 更新最后更新时间
    const updateBadge = document.getElementById('update-badge');
    if (updateBadge) {
        updateBadge.textContent = '最后更新：' + data.lastUpdate;
    }
    
    // 渲染最新日期的事件到时间轴
    if (data.latestDate) {
        renderLatestDate(data.latestDate);
    }
    
    console.log('最新事件加载成功');
    return data;
}

// 更新统计数据
function updateStats(stats) {
    const elements = {
        'casualtyCount': stats.iranDeaths,
        'israelCasualty': stats.israelDeaths,
        'usCasualty': stats.usDeaths,
        'iranCasualty': stats.displaced,
        'eventCount': stats.attackWaves
    };
    
    for (const [id, value] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }
}

// 渲染最新日期的事件
function renderLatestDate(dateData) {
    const timeline = document.querySelector('.timeline');
    if (!timeline) {
        console.error('找不到时间轴容器');
        return;
    }
    
    // 检查是否已存在该日期
    const existingGroup = document.getElementById(dateData.id);
    if (existingGroup) {
        // 如果已存在，移除后重新渲染
        existingGroup.remove();
    }
    
    // 创建日期组元素
    const dateGroup = document.createElement('div');
    dateGroup.className = 'date-group';
    dateGroup.id = dateData.id;
    
    // 构建日期标签
    const dateLabel = document.createElement('div');
    dateLabel.className = 'date-label';
    dateLabel.onclick = function() { 
        if (typeof scrollToDate === 'function') {
            scrollToDate(dateData.id); 
        }
    };
    dateLabel.innerHTML = dateData.date + ' <span class="date-day">· 第' + dateData.day + '天</span>';
    
    // 创建事件容器
    const eventsContainer = document.createElement('div');
    eventsContainer.className = 'events-container';
    
    // 渲染每个事件
    dateData.events.forEach(function(event) {
        const eventCard = createEventCard(event);
        eventsContainer.appendChild(eventCard);
    });
    
    // 组装
    dateGroup.appendChild(dateLabel);
    dateGroup.appendChild(eventsContainer);
    
    // 插入到时间轴最前面
    timeline.insertBefore(dateGroup, timeline.firstChild);
    
    console.log('已渲染日期:', dateData.date);
}

// 创建事件卡片
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card' + (event.type === 'major' ? ' major' : '');
    
    // 事件时间
    const timeDiv = document.createElement('div');
    timeDiv.className = 'event-time';
    timeDiv.textContent = event.time;
    card.appendChild(timeDiv);
    
    // 事件头部
    const header = document.createElement('div');
    header.className = 'event-header';
    
    const titleDiv = document.createElement('div');
    titleDiv.className = 'event-title';
    
    // NEW 标签
    if (event.isNew) {
        const newBadge = document.createElement('span');
        newBadge.className = 'new-badge';
        newBadge.textContent = 'NEW';
        titleDiv.appendChild(newBadge);
    }
    
    // 分类标签
    if (event.tags && event.tags.length > 0) {
        const tagSpan = document.createElement('span');
        var tagClass = 'category-tag';
        if (event.tags[0] === '突发' || event.tags[0] === '重要') {
            tagClass += ' major-tag';
        } else if (event.tags[0] === '人道') {
            tagClass += ' humanitarian-tag';
        }
        tagSpan.className = tagClass;
        tagSpan.textContent = event.tags[0];
        titleDiv.appendChild(tagSpan);
    }
    
    // 标题文本
    titleDiv.appendChild(document.createTextNode(event.title));
    header.appendChild(titleDiv);
    card.appendChild(header);
    
    // 事件内容
    const contentDiv = document.createElement('div');
    contentDiv.className = 'event-content';
    contentDiv.textContent = event.content;
    card.appendChild(contentDiv);
    
    // 来源链接
    if (event.sources && event.sources.length > 0) {
        const sourcesDiv = document.createElement('div');
        sourcesDiv.className = 'event-sources';
        
        event.sources.forEach(function(source) {
            const link = document.createElement('a');
            link.className = source.official ? 'source-link official' : 'source-link';
            link.href = source.url;
            link.target = '_blank';
            link.textContent = source.name;
            sourcesDiv.appendChild(link);
        });
        
        card.appendChild(sourcesDiv);
    }
    
    return card;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    loadLatestEvents();
});
