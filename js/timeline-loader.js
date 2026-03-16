/**
 * 时间轴数据加载器
 * 从JSON文件动态加载最新事件
 */

// 加载最新事件数据
async function loadLatestEvents() {
    try {
        const response = await fetch('data/latest-events.json');
        const data = await response.json();
        
        // 更新统计数据
        updateStats(data.stats);
        
        // 更新最后更新时间
        document.getElementById('update-badge').textContent = 
            '最后更新：' + data.lastUpdate;
        
        console.log('最新事件加载成功');
        return data;
    } catch (error) {
        console.error('加载最新事件失败:', error);
        return null;
    }
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

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    loadLatestEvents();
});
