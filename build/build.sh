#!/bin/bash
set -e

echo "━━━━━━━━━━━━━━━━━━━━"
echo "合并时间线文件"
echo "━━━━━━━━━━━━━━━━━━━━"

WORKDIR="/workspace/projects/workspace/timeline/iran-israel"
cd "$WORKDIR"

# 1. 备份原文件
mkdir -p backup
cp index.html backup/index-$(date +%Y%m%d-%H%M).html 2>/dev/null || true

echo "步骤1: 提取HTML头部..."
# 提取从开头到第一个date-group之前的部分
head -n 1857 index.html > index.new.html

echo "步骤2: 插入事件片段..."
echo "" >> index.new.html
echo "        <!-- 时间轴日期列表 -->" >> index.new.html

# 倒序插入事件片段（最新的在前）
EVENTS=(
    "src/events/d20.html"
    "src/events/d19.html"
    "src/events/d18.html"
    "src/events/d17.html"
)

for f in "${EVENTS[@]}"; do
    if [ -f "$f" ]; then
        echo "  合并: $f ($(wc -l < $f) 行)"
        cat "$f" >> index.new.html
        echo "" >> index.new.html
    else
        echo "  跳过: $f (不存在)"
    fi
done

echo "步骤3: 提取HTML尾部（footer部分）..."
# 找到footer开始的位置并提取
timeline_end=$(grep -n '</div>.*timeline\|class="footer"' index.html | tail -1 | cut -d: -f1)
if [ -n "$timeline_end" ]; then
    echo "  从第 $timeline_end 行提取footer"
    tail -n +$timeline_end index.html >> index.new.html
else
    echo "  警告：未找到footer，使用默认位置3635"
    tail -n +3635 index.html >> index.new.html
fi

echo "步骤4: 替换原文件..."
mv index.new.html index.html

echo ""
echo "✅ 合并完成"
echo "━━━━━━━━━━━━━━━━━━━━"
echo "文件: index.html"
echo "大小: $(ls -lh index.html | awk '{print $5}')"
echo "行数: $(wc -l < index.html)"
echo "━━━━━━━━━━━━━━━━━━━━"
