/**
 * 时间线数据加载器
 * 从外部 JSON 文件加载事件数据和 Dashboard 数据
 * 版本: 1.0
 */

// 数据文件路径
const DATA_DIR = 'data/';
const EVENTS_FILE = DATA_DIR + 'events.json';
const DASHBOARD_FILE = DATA_DIR + 'dashboard.json';
const STATISTICS_FILE = DATA_DIR + 'statistics.json';

/**
 * 加载事件数据
 */
async function loadEvents() {
    try {
        const response = await fetch(EVENTS_FILE);
        if (!response.ok) {
            throw new Error(`加载事件数据失败: ${response.status}`);
        }
        const data = await response.json();
        console.log(`[时间线] 加载了 ${data.total_events} 个事件，共 ${data.total_days} 天`);
        return data;
    } catch (error) {
        console.error('[时间线] 加载事件数据失败:', error);
        return null;
    }
}

/**
 * 加载统计数据（数据来源追踪）
 */
async function loadStatistics() {
    try {
        const response = await fetch(STATISTICS_FILE);
        if (!response.ok) {
            console.log('[统计] 无统计数据文件');
            return null;
        }
        const data = await response.json();
        console.log(`[统计] 加载成功，${Object.keys(data.fields || {}).length}个字段`);
        return data;
    } catch (error) {
        console.log('[统计] 加载失败:', error.message);
        return null;
    }
}

/**
 * 加载 Dashboard 数据
 */
async function loadDashboard() {
    try {
        const response = await fetch(DASHBOARD_FILE);
        if (!response.ok) {
            throw new Error(`加载Dashboard数据失败: ${response.status}`);
        }
        const data = await response.json();
        console.log(`[Dashboard] 加载成功，战争天数: ${data.warDays}`);
        return data;
    } catch (error) {
        console.error('[Dashboard] 加载数据失败:', error);
        return null;
    }
}

/**
 * 渲染事件卡片
 */
function renderEventCard(event) {
    const sourceLinks = event.sources.map(s => 
        `<a class="source-link" href="${s.url}" target="_blank">${s.name}</a>`
    ).join('');
    
    return `
        <div class="event-card${event.major ? ' major' : ''}">
            <div class="event-time">${event.time}</div>
            <div class="event-header">
                <div class="event-title">
                    <span class="category-tag ${event.tag}">${event.category}</span>
                    ${event.title}
                </div>
            </div>
            <div class="event-content">${event.content}</div>
            ${event.sources.length > 0 ? `<div class="event-sources">${sourceLinks}</div>` : ''}
        </div>
    `;
}

/**
 * 渲染日期组
 */
function renderDateGroup(dayData) {
    const eventsHtml = dayData.events.map(renderEventCard).join('\n');
    
    // 战前背景特殊处理（可折叠）
    if (dayData.date_id === 'bg' || dayData.is_collapsible) {
        return `
            <div class="date-group" id="${dayData.date_id}">
                <div class="date-label bg-collapsed" onclick="toggleBg()" style="background: linear-gradient(135deg, #52c41a, #73d13d); cursor: pointer;">
                    ${dayData.date_label} <span class="date-day">· ${dayData.date_subtitle || ''}</span>
                    <span class="bg-toggle-hint">点击展开</span>
                </div>
                <div class="events-container bg-content" style="display: none;">
                    ${eventsHtml}
                </div>
            </div>
        `;
    }
    
    // 普通日期组
    return `
        <div class="date-group" id="${dayData.date_id}">
            <div class="date-label" onclick="scrollToDate('${dayData.date_id}')">
                ${dayData.date_label}
            </div>
            <div class="events-container">
                ${eventsHtml}
            </div>
        </div>
    `;
}

/**
 * 渲染完整时间线
 */
function renderTimeline(eventsData) {
    const container = document.querySelector('.timeline');
    if (!container) {
        console.error('[时间线] 找不到 .timeline 容器');
        return;
    }
    
    const html = eventsData.events.map(renderDateGroup).join('\n');
    container.innerHTML = html;
    console.log(`[时间线] 渲染完成: ${eventsData.total_events} 个事件`);
}

/**
 * 更新 Dashboard 统计数据
 * 支持两种HTML结构：
 * 1. data-field 属性（新版）
 * 2. id 属性（原版）
 * @param {Object} dashboardData - Dashboard数据
 * @param {Object} eventsData - 事件数据（可选，用于更新subtitle和toc）
 */
function updateDashboard(dashboardData, eventsData = null) {
    // 字段映射：dashboard.json字段 -> HTML元素ID
    const fieldMap = {
        'warDays': 'warDays',
        'iranMissileWaves': 'eventCount',
        'iranDeaths': 'casualtyCount',
        'israelDeaths': 'israelCasualty',
        'usDeaths': 'usCasualty',
        'middleEastDisplaced': 'iranCasualty',
        'childCasualties': 'childCasualty'
    };
    
    // 更新各字段
    Object.keys(fieldMap).forEach(dashboardField => {
        const htmlId = fieldMap[dashboardField];
        const value = dashboardData[dashboardField];
        
        // 尝试通过ID查找
        let el = document.getElementById(htmlId);
        // 如果没有ID，尝试data-field属性
        if (!el) {
            el = document.querySelector(`.stat-value[data-field="${htmlId}"]`);
        }
        
        if (el && value !== undefined) {
            el.textContent = value;
        }
    });
    
    // 更新 lastUpdated（多种选择器兼容）
    const updatedEl = document.querySelector('.last-updated');
    if (updatedEl && dashboardData.lastUpdated) {
        updatedEl.textContent = `最后更新: ${dashboardData.lastUpdated}`;
    }
    
    // 更新 update-badge（Header中的更新时间戳）- 包含完整时间
    const updateBadge = document.getElementById('update-badge');
    if (updateBadge && dashboardData.lastUpdated) {
        updateBadge.textContent = `📅 更新于 ${dashboardData.lastUpdated}`;
    }
    
    // 更新 subtitle（Header中的日期范围和统计）
    const subtitleEl = document.querySelector('.header .subtitle');
    if (subtitleEl && dashboardData.warDays) {
        const firstEvent = eventsData?.events?.[eventsData.events.length - 1];
        const lastEvent = eventsData?.events?.[0];
        if (firstEvent && lastEvent) {
            subtitleEl.textContent = `2026年2月28日 - ${lastEvent.date_label} · 第${dashboardData.warDays}天 · 伊朗第${dashboardData.iranMissileWaves}导弹袭击`;
        }
    }
    
    // 更新 toc-links（底部横向时间轴导航）
    const tocLinksEl = document.getElementById('tocLinks');
    if (tocLinksEl && eventsData?.events) {
        // 按日期倒序生成链接（最新在前）
        const tocLinks = eventsData.events
            .filter(day => day.date_id !== 'bg') // 排除战前背景
            .map(day => `<a href="#${day.date_id}" class="toc-link">${day.date_label}</a>`)
            .join('\n');
        // 添加战前背景链接到末尾
        const bgEvent = eventsData.events.find(day => day.date_id === 'bg');
        const fullTocLinks = bgEvent 
            ? tocLinks + `\n<a href="#bg" class="toc-link">战前背景</a>`
            : tocLinks;
        tocLinksEl.innerHTML = fullTocLinks;
        console.log('[时间线] TOC导航已更新');
    }
    
    console.log('[Dashboard] 数据已更新');
}

/**
 * 初始化时间线
 */
async function initTimeline() {
    console.log('[时间线] 开始加载数据...');
    
    // 并行加载所有数据
    const [eventsData, dashboardData, statisticsData] = await Promise.all([
        loadEvents(),
        loadDashboard(),
        loadStatistics()
    ]);
    
    // 渲染时间线
    if (eventsData) {
        renderTimeline(eventsData);
    }
    
    // 更新Dashboard（传递eventsData用于更新subtitle）
    if (dashboardData) {
        updateDashboard(dashboardData, eventsData);
    }
    
    // 更新统计数据来源显示（如果有争议数据）
    if (statisticsData) {
        updateStatisticsDisplay(statisticsData);
    }
    
    console.log('[时间线] 初始化完成');
    
    return { eventsData, dashboardData, statisticsData };
}

/**
 * 更新统计数据来源显示
 */
function updateStatisticsDisplay(statisticsData) {
    // 检查是否有争议数据
    const disputedFields = [];
    for (const [field, data] of Object.entries(statisticsData.fields || {})) {
        if (data.hasDispute) {
            disputedFields.push({
                field: field,
                value: data.value,
                dispute: data.disputeDetails,
                confidence: data.confidence
            });
        }
    }
    
    if (disputedFields.length > 0) {
        console.log('[统计] 发现争议数据:', disputedFields);
        // 可以在这里添加UI提示，比如在Dashboard下方显示争议说明
    }
}

/**
 * 切换战前背景展开/折叠
 */
function toggleBg() {
    var label = document.querySelector('.date-label.bg-collapsed, .date-label.bg-expanded');
    var content = document.querySelector('.bg-content');
    if (label && content) {
        if (label.classList.contains('bg-collapsed')) {
            label.classList.remove('bg-collapsed');
            label.classList.add('bg-expanded');
            content.style.display = 'block';
            label.querySelector('.bg-toggle-hint').textContent = '点击收起';
        } else {
            label.classList.remove('bg-expanded');
            label.classList.add('bg-collapsed');
            content.style.display = 'none';
            label.querySelector('.bg-toggle-hint').textContent = '点击展开';
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initTimeline);
