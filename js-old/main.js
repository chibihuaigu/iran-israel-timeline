        // 阅读进度条
        window.addEventListener('scroll', function() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById('readingProgress').style.width = scrolled + '%';
        });
// 打开弹窗
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// 关闭弹窗
function closeModal(event, modalId) {
    // 阻止事件冒泡
    if (event && event.stopPropagation) {
        event.stopPropagation();
    }
    
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// 点击弹窗外部关闭（延迟执行，避免与openModal冲突）
setTimeout(function() {
    document.addEventListener('click', function(e) {
        var modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(function(modal) {
            if (modal.style.display === 'flex') {
                var content = modal.querySelector('.modal-content');
                if (content && !content.contains(e.target) && !e.target.closest('.header-btn')) {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            }
        });
    });
}, 100);



// 切换字体大小
function toggleFontSize() {
    var body = document.body;
    var currentSize = parseInt(getComputedStyle(body).fontSize) || 16;
    var sizes = [14, 16, 18, 20];
    var currentIndex = sizes.indexOf(currentSize);
    var newIndex = (currentIndex + 1) % sizes.length;
    body.style.fontSize = sizes[newIndex] + 'px';
    
    // 保存到localStorage
    localStorage.setItem('fontSize', sizes[newIndex]);
}

// 滚动到指定日期
function scrollToDate(dateId) {
    var el = document.getElementById(dateId);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}


function toggleTheme(btn) {
    document.body.toggleAttribute('data-theme');
    btn.textContent = document.body.hasAttribute('data-theme') ? '☀️' : '🌙';
}

function toggleFont(btn) {
    fontSize = fontSize === 1 ? 1.15 : 1;
    document.body.style.fontSize = fontSize === 1.15 ? '115%' : '100%';
}

function toggleToc() {
    const links = document.getElementById('tocLinks');
    const btn = document.querySelector('.toc-toggle');
    links.classList.toggle('collapsed');
    btn.textContent = links.classList.contains('collapsed') ? '展开' : '收起';
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 筛选状态变量
var currentFilter = 'all';

function filterByTag(tag, btn) {
    currentFilter = tag;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterEvents();
}

function filterEvents() {
    var events = document.querySelectorAll('.event-card');
    var dateGroups = document.querySelectorAll('.date-group');
    var hasVisibleEvent = false;
    
    events.forEach(function(event) {
        var shouldShow = currentFilter === 'all';
        
        if (!shouldShow) {
            // 检查事件是否有对应的标签
            var tags = event.querySelectorAll('.category-tag');
            tags.forEach(function(tag) {
                var tagText = tag.textContent.trim();
                if (currentFilter === 'major' && tag.classList.contains('major-tag')) {
                    shouldShow = true;
                } else if (currentFilter === 'military' && tagText.includes('军事')) {
                    shouldShow = true;
                } else if (currentFilter === 'humanitarian' && tag.classList.contains('humanitarian-tag')) {
                    shouldShow = true;
                } else if (currentFilter === 'political' && tag.classList.contains('political-tag')) {
                    shouldShow = true;
                } else if (currentFilter === 'diplomatic' && tag.classList.contains('diplomatic-tag')) {
                    shouldShow = true;
                }
            });
            
            // 检查是否是重要事件
            if (currentFilter === 'major' && event.classList.contains('major')) {
                shouldShow = true;
            }
        }
        
        if (shouldShow) {
            event.classList.remove('hidden');
            hasVisibleEvent = true;
        } else {
            event.classList.add('hidden');
        }
    });
    
    // 更新日期组的显示状态
    dateGroups.forEach(function(group) {
        var visibleEvents = group.querySelectorAll('.event-card:not(.hidden)');
        if (visibleEvents.length === 0) {
            group.classList.add('hidden');
        } else {
            group.classList.remove('hidden');
        }
    });
    
    // 显示筛选结果提示
    updateFilterResult();
}

function updateFilterResult() {
    var visibleEvents = document.querySelectorAll('.event-card:not(.hidden)').length;
    var resultDiv = document.getElementById('filterResult');
    
    if (!resultDiv) {
        resultDiv = document.createElement('div');
        resultDiv.id = 'filterResult';
        resultDiv.className = 'filter-result-count';
        var timeline = document.getElementById('timeline');
        timeline.parentNode.insertBefore(resultDiv, timeline);
    }
    
    if (currentFilter !== 'all') {
        var filterNames = {
            'all': '全部',
            'major': '重要事件',
            'military': '军事',
            'humanitarian': '人道主义',
            'political': '政治',
            'diplomatic': '外交'
        };
        resultDiv.innerHTML = '当前显示：<strong>' + filterNames[currentFilter] + '</strong> 共 ' + visibleEvents + ' 条事件';
        resultDiv.classList.add('show');
    } else {
        resultDiv.classList.remove('show');
    }
}

function setSort(order, btn) {
    currentSort = order;
    document.querySelectorAll('.control-btn').forEach(b => {
        if (b.textContent.includes('序')) b.classList.remove('active');
    });
    btn.classList.add('active');
    
    const container = document.getElementById('timeline');
    const groups = Array.from(document.querySelectorAll('.date-group'));
    
    if (order === 'desc') {
        groups.reverse();
    }
    
    groups.forEach(g => container.appendChild(g));
}


        // 音乐播放控制逻辑
        var hasPlayedOnce = false;      // 是否已经播放过
        var isPausedByUser = false;     // 用户是否手动暂停过
        var isPlaying = false;          // 当前是否正在播放

        // 首次打开页面时自动播放音乐
        function tryAutoPlay() {
            var bgMusic = document.getElementById('bgMusic');
            if (bgMusic && !hasPlayedOnce) {
                bgMusic.play().then(function() {
                    hasPlayedOnce = true;
                    isPlaying = true;
                    var player = document.getElementById('musicPlayer');
                    if (player) player.classList.add('playing');
                    console.log('音乐自动播放成功');
                }).catch(function(e) {
                    console.log('自动播放被浏览器阻止，等待用户交互:', e);
                    // 浏览器阻止自动播放，设置标志等待用户交互
                    hasPlayedOnce = false;
                });
            }
        }

        // 页面加载完成后初始化
        document.addEventListener('DOMContentLoaded', function() {
            // 绑定筛选按钮事件
            document.querySelectorAll('.filter-btn').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    var filter = this.getAttribute('data-filter');
                    filterByTag(filter, this);
                });
            });

            // 不再自动播放，改为用户滚动时触发

            // 获取音乐播放器元素
            var musicPlayer = document.getElementById('musicPlayer');
            var bgMusic = document.getElementById('bgMusic');

            // 点击黑胶唱片切换播放/暂停
            if (musicPlayer) {
                musicPlayer.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    if (!bgMusic) {
                        bgMusic = document.getElementById('bgMusic');
                    }
                    if (!bgMusic) return;

                    if (isPlaying) {
                        // 暂停
                        bgMusic.pause();
                        isPlaying = false;
                        isPausedByUser = true;  // 标记用户手动暂停
                        musicPlayer.classList.remove('playing');
                        console.log('音乐已暂停');
                    } else {
                        // 播放
                        bgMusic.play().then(function() {
                            isPlaying = true;
                            isPausedByUser = false;
                            hasPlayedOnce = true;
                            musicPlayer.classList.add('playing');
                            console.log('音乐开始播放');
                        }).catch(function(e) {
                            console.log('播放失败:', e);
                        });
                    }
                });
            }

            // 音乐结束时重置播放状态
            if (bgMusic) {
                bgMusic.addEventListener('ended', function() {
                    isPlaying = false;
                    musicPlayer.classList.remove('playing');
                });
            }
        });

        // 用户滚动页面时触发播放（只触发一次）
        var scrollPlayHandler = function() {
            if (!hasPlayedOnce) {
                tryAutoPlay();
                // 播放成功后移除监听，避免重复触发
                window.removeEventListener('scroll', scrollPlayHandler);
                window.removeEventListener('touchmove', scrollPlayHandler);
            }
        };
        
        // 监听滚动事件（桌面端）
        window.addEventListener('scroll', scrollPlayHandler);
        // 监听触摸滑动事件（移动端）
        window.addEventListener('touchmove', scrollPlayHandler);
    
        // 反馈弹窗控制
        function openFeedback() {
            document.getElementById('feedbackModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeFeedback(event) {
            if (!event || event.target.id === 'feedbackModal') {
                document.getElementById('feedbackModal').classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        // ESC键关闭弹窗
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeFeedback();
            }
        });

        // 增强键盘导航
        var currentHighlightIndex = -1;
        var eventCards = [];

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeFeedback();
                var modals = document.querySelectorAll('.modal-overlay');
                modals.forEach(function(m) { m.style.display = 'none'; });
                return;
            }
            if (document.activeElement === document.getElementById('searchInput')) return;
            if (e.key === 'j' || e.key === 'J') {
                e.preventDefault();
                if (eventCards.length === 0) eventCards = Array.from(document.querySelectorAll('.event-card:not(.hidden)'));
                if (eventCards.length > 0) {
                    currentHighlightIndex = Math.min(currentHighlightIndex + 1, eventCards.length - 1);
                    eventCards.forEach(function(card, idx) { card.style.outline = idx === currentHighlightIndex ? '2px solid var(--primary)' : 'none'; });
                    if (currentHighlightIndex >= 0) eventCards[currentHighlightIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
            if (e.key === 'k' || e.key === 'K') {
                e.preventDefault();
                if (eventCards.length === 0) eventCards = Array.from(document.querySelectorAll('.event-card:not(.hidden)'));
                if (eventCards.length > 0) {
                    currentHighlightIndex = Math.max(currentHighlightIndex - 1, 0);
                    eventCards.forEach(function(card, idx) { card.style.outline = idx === currentHighlightIndex ? '2px solid var(--primary)' : 'none'; });
                    if (currentHighlightIndex >= 0) eventCards[currentHighlightIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
            if (e.key === '/') {
                e.preventDefault();
                document.getElementById('searchInput').focus();
            }
        });

        document.getElementById('searchInput').addEventListener('input', function() {
            currentHighlightIndex = -1;
            eventCards = [];
        });
