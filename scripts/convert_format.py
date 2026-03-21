import re
import sys

def convert_format(content):
    """将 events + event-item 格式转换为 events-container + event-card 格式"""
    
    # 替换容器类
    content = content.replace('class="events">', 'class="events-container">')
    content = content.replace('class="event-item', 'class="event-card')
    
    # 替换 event-header 中的 span 为 div
    # <span class="event-time"> -> <div class="event-time">
    content = content.replace('<span class="event-time">', '<div class="event-time">')
    content = content.replace('</span>\n                        <span class="event-tags">', '</div>\n                        <div class="event-header">\n                            <div class="event-title">')
    
    # 处理标签转换
    content = content.replace('<span class="tag">', '<span class="category-tag">')
    content = content.replace('<span class="tag major">', '<span class="category-tag major-tag">')
    content = content.replace('</span>\n                            </span>\n                        </div>', '</span>\n                            </div>\n                        </div>')
    
    # event-content -> event-detail
    content = content.replace('class="event-content">', 'class="event-detail">')
    
    # 修复可能的双闭合问题
    content = content.replace('</div>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </div>', '</div>\n                        </div>\n                    </div>\n                </div>\n            </div>')
    
    return content

if __name__ == '__main__':
    for filename in sys.argv[1:]:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        converted = convert_format(content)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(converted)
        
        print(f"Converted {filename}")
