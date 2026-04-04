/**
 * 时间线数据加载器
 * 从外部 JSON 文件加载事件数据和 Dashboard 数据
 * 版本: 1.0
 */

// 数据文件路径
const DATA_DIR = 'data/';
const EVENTS_FILE = DATA_DIR + 'events.json';
const DASHBOARD_FILE = DATA_DIR + 'dashboard.json';

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
 */
function updateDashboard(dashboardData) {
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
    
    // 更新 lastUpdated
    const updatedEl = document.querySelector('.last-updated');
    if (updatedEl && dashboardData.lastUpdated) {
        updatedEl.textContent = `最后更新: ${dashboardData.lastUpdated}`;
    }
    
    console.log('[Dashboard] 数据已更新');
}

/**
 * 初始化时间线
 */
async function initTimeline() {
    console.log('[时间线] 开始加载数据...');
    
    // 并行加载事件和Dashboard数据
    const [eventsData, dashboardData] = await Promise.all([
        loadEvents(),
        loadDashboard()
    ]);
    
    // 渲染时间线
    if (eventsData) {
        renderTimeline(eventsData);
    }
    
    // 更新Dashboard
    if (dashboardData) {
        updateDashboard(dashboardData);
    }
    
    console.log('[时间线] 初始化完成');
    
    return { eventsData, dashboardData };
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initTimeline);
