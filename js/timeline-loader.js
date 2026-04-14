/**
 * 时间线数据加载器
 * 从外部 JSON 文件加载事件数据和 Dashboard 数据
 * 版本: 1.1
 */

// 数据文件路径（添加版本号防止缓存）
const CACHE_BUSTER = '?v=' + Date.now();
const DATA_DIR = 'data/';
const EVENTS_FILE = DATA_DIR + 'events.json' + CACHE_BUSTER;
const DASHBOARD_FILE = DATA_DIR + 'dashboard.json' + CACHE_BUSTER;
const STATISTICS_FILE = DATA_DIR + 'statistics.json' + CACHE_BUSTER;

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
 * 获取来源可信度等级
 * @param {string} sourceName - 来源名称
 * @returns {string} 等级类名
 */
function getSourceTier(sourceName) {
    // 官方权威媒体（最高优先级）- 中英文
    const officialSources = [
        '央视新闻', '新华社', '人民日报', '光明日报', '中国新闻网', '央广网', '环球时报',
        'CCTV', 'Xinhua', 'People\'s Daily', 'China Daily', 'Global Times'
    ];
    // 国际主流媒体 - 中英文
    const intlSources = [
        '路透社', '美联社', '法新社', 'BBC', 'CNN', '纽约时报', '华盛顿邮报', '卫报', '半岛电视台', '联合早报',
        'Reuters', 'AP News', 'AFP', 'BBC', 'CNN', 'New York Times', 'Washington Post', 'The Guardian', 'Al Jazeera',
        'CBS', 'NBC', 'ABC', 'France 24', 'NPR', 'Bloomberg', 'CNBC', 'Newsweek', 'Time', 'Economist',
        'Boston Globe', 'Wall Street Journal'
    ];
    // 国内主流媒体 - 中英文
    const domesticSources = [
        '网易', '腾讯', '澎湃新闻', '搜狐', '新浪', '凤凰网', '观察者网', '中华网', '企鹅号',
        'NetEase', 'Tencent', 'Sohu', 'Sina', 'Phoenix', 'guancha'
    ];

    if (officialSources.some(s => sourceName.includes(s))) return 'tier-official';
    if (intlSources.some(s => sourceName.includes(s))) return 'tier-intl';
    if (domesticSources.some(s => sourceName.includes(s))) return 'tier-domestic';
    return 'tier-other';
}

/**
 * 渲染事件卡片
 */
function renderEventCard(event) {
    // 合并同一媒体的多个来源
    const groupedSources = {};
    event.sources.forEach(s => {
        if (!groupedSources[s.name]) {
            groupedSources[s.name] = [];
        }
        groupedSources[s.name].push(s.url);
    });

    // 生成来源链接（同一媒体的多个链接合并显示，带可信度等级）
    const sourceLinks = Object.entries(groupedSources).map(([name, urls]) => {
        const tier = getSourceTier(name);
        if (urls.length === 1) {
            return `<a class="source-link ${tier}" href="${urls[0]}" target="_blank">${name}</a>`;
        } else {
            // 多个链接时，第一个作为主链接，其他作为角标
            const mainLink = `<a class="source-link ${tier}" href="${urls[0]}" target="_blank">${name}</a>`;
            const extraLinks = urls.slice(1).map((url, i) =>
                `<a class="source-link source-extra" href="${url}" target="_blank" title="${name} 文章${i+2}">+${i+1}</a>`
            ).join('');
            return mainLink + extraLinks;
        }
    }).join('');

    // 待验证标记
    const verificationBadge = event.needs_verification
        ? `<span class="verification-badge" title="此事件来源待验证">⚠️ 待验证</span>`
        : '';

    // 争议标记
    const disputedBadge = event.disputed
        ? `<span class="disputed-badge" title="此事件存在争议">🔍 有争议</span>`
        : '';

    // 来源优先级样式
    const hasHighPrioritySource = event.sources.some(s => s.priority === 1);
    const sourceQualityClass = event.sources.length === 0 ? 'no-sources'
        : hasHighPrioritySource ? 'high-quality'
        : 'standard-quality';

    // 关键事件标注类
    let eventMarkClass = '';
    if (event.mark === 'turning_point') eventMarkClass = ' turning-point';
    else if (event.mark === 'first_occurrence') eventMarkClass = ' first-occurrence';
    else if (event.mark === 'escalation') eventMarkClass = ' escalation';

    return `
        <div class="event-card${event.major ? ' major' : ''}${eventMarkClass} ${sourceQualityClass}">
            <div class="event-time">${event.time}</div>
            <div class="event-header">
                <div class="event-title">
                    <span class="category-tag ${event.tag}">${event.category}</span>
                    ${event.title}
                    ${verificationBadge}
                    ${disputedBadge}
                </div>
            </div>
            <div class="event-content">${event.content}</div>
            ${event.sources.length > 0 ? `<div class="event-sources">${sourceLinks}</div>` : '<div class="event-sources no-source-warning">⚠️ 暂无来源</div>'}
        </div>
    `;
}

/**
 * 渲染日期组
 */
function renderDateGroup(dayData) {
    const eventsHtml = dayData.events.map(renderEventCard).join('\n');

    // 每日总结（如果有）
    const summaryHtml = dayData.summary
        ? `<div class="day-summary"><span class="day-summary-icon">📌</span><span class="day-summary-text">${dayData.summary}</span></div>`
        : '';

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
            ${summaryHtml}
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
        'missileWaves': 'eventCount',
        'iranDeaths': 'casualtyCount',
        'israelDeaths': 'israelCasualty',
        'usDeaths': 'usCasualty',
        'displaced': 'iranCasualty',
        'childCasualties': 'childCasualty'
    };

    // Modal 元素映射：dashboard.json字段 -> Modal元素ID
    const modalFieldMap = {
        'warDays': 'dataWarDays',
        'missileWaves': 'dataMissileWaves',
        'iranDeaths': 'dataIranDeaths',
        'israelDeaths': 'dataIsraelDeaths',
        'usDeaths': 'dataUsDeaths',
        'displaced': 'dataDisplaced',
        'childCasualties': 'dataChildren'
    };
    
    // 更新 Dashboard 卡片
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
    
    // 更新 Modal（数据统计弹窗）
    Object.keys(modalFieldMap).forEach(dashboardField => {
        const modalId = modalFieldMap[dashboardField];
        const value = dashboardData[dashboardField];
        
        const el = document.getElementById(modalId);
        if (el && value !== undefined) {
            el.textContent = value;
        }
    });
    
    // 更新 lastUpdated（多种选择器兼容）
    const updatedEl = document.querySelector('.last-updated');
    if (updatedEl && dashboardData.lastUpdated) {
        updatedEl.textContent = `最后更新: ${dashboardData.lastUpdated}`;
    }

    // 更新 update-time（新版Header中的更新时间戳）
    const updateTimeEl = document.getElementById('update-time');
    if (updateTimeEl && dashboardData.lastUpdated) {
        updateTimeEl.textContent = `📅 最后更新：${dashboardData.lastUpdated}`;
    }

    // 更新 update-stats（新版Header中的统计信息）
    const updateStatsEl = document.getElementById('update-stats');
    if (updateStatsEl && eventsData) {
        const totalEvents = eventsData.total_events || 0;
        updateStatsEl.textContent = `📊 已收录 ${totalEvents} 条权威事件`;
    }

    // 更新 update-badge（Header中的更新时间戳）- 兼容旧版
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
            subtitleEl.textContent = `2026年2月28日 - ${lastEvent.date_label} · 第${dashboardData.warDays}天 · 伊朗第${dashboardData.iranMissileWaves || dashboardData.missileWaves}导弹袭击`;
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

        // 初始化时滚动到最左边（显示最新日期）
        // 因为导航是最新在前，所以scrollLeft=0显示最新日期
        tocLinksEl.scrollLeft = 0;

        console.log('[时间线] TOC导航已更新');
    }

    // 更新 warDaysSub（冲突天数副标题，显示停火信息）
    const warDaysSubEl = document.getElementById('warDaysSub');
    if (warDaysSubEl && dashboardData.ceasefireInfo) {
        const ceasefireInfo = dashboardData.ceasefireInfo;
        const ceasefireDays = ceasefireInfo.ceasefireDays || dashboardData.ceasefireDays || 0;
        const status = ceasefireInfo.status || '停火中';
        const statusDetail = ceasefireInfo.statusDetail || '';

        // 根据状态显示不同的副标题
        if (status === '谈判破裂') {
            warDaysSubEl.textContent = `含停火 ${ceasefireDays} 天 | 谈判破裂`;
            warDaysSubEl.style.color = 'var(--primary)'; // 红色警告
        } else if (status === '达成协议') {
            warDaysSubEl.textContent = `停火生效 | 第${ceasefireDays}天`;
            warDaysSubEl.style.color = 'var(--secondary)'; // 蓝色
        } else if (status === '谈判中') {
            warDaysSubEl.textContent = `含停火 ${ceasefireDays} 天 | 谈判中`;
            warDaysSubEl.style.color = 'var(--text-secondary)';
        } else {
            warDaysSubEl.textContent = `含停火 ${ceasefireDays} 天`;
            warDaysSubEl.style.color = 'var(--text-secondary)';
        }
    }

    console.log('[Dashboard] 数据已更新');
}

/**
 * 显示加载状态
 */
function showLoading() {
    const container = document.querySelector('.timeline');
    if (container) {
        container.innerHTML = `
            <div class="loading-state" style="text-align: center; padding: 60px 20px;">
                <div class="loading-spinner" style="width: 40px; height: 40px; border: 3px solid var(--border); border-top-color: var(--primary); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 16px;"></div>
                <div style="color: var(--text-secondary); font-size: 14px;">正在加载时间线数据...</div>
            </div>
            <style>
                @keyframes spin { to { transform: rotate(360deg); } }
            </style>
        `;
    }
}

/**
 * 显示错误状态
 */
function showError(message) {
    const container = document.querySelector('.timeline');
    if (container) {
        container.innerHTML = `
            <div class="error-state" style="text-align: center; padding: 60px 20px; background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border);">
                <div style="font-size: 48px; margin-bottom: 16px;">⚠️</div>
                <div style="color: var(--primary); font-size: 16px; font-weight: 600; margin-bottom: 8px;">数据加载失败</div>
                <div style="color: var(--text-secondary); font-size: 14px; margin-bottom: 16px;">${message}</div>
                <button onclick="location.reload()" style="padding: 10px 24px; background: var(--primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px;">重新加载</button>
            </div>
        `;
    }
}

/**
 * 初始化时间线
 */
async function initTimeline() {
    console.log('[时间线] 开始加载数据...');

    // 显示加载状态
    showLoading();

    try {
        // 并行加载所有数据
        const [eventsData, dashboardData, statisticsData] = await Promise.all([
            loadEvents(),
            loadDashboard(),
            loadStatistics()
        ]);

        // 检查数据是否加载成功
        if (!eventsData && !dashboardData) {
            showError('无法连接到数据源，请检查网络连接');
            return;
        }

        // 渲染时间线
        if (eventsData) {
            renderTimeline(eventsData);
        } else {
            showError('事件数据加载失败');
            return;
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
    } catch (error) {
        console.error('[时间线] 初始化失败:', error);
        showError('发生未知错误: ' + error.message);
    }
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
