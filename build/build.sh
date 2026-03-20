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

echo "步骤1: 提取模板头部..."
# 提取template.html从开头到d16之前（包含timeline开始标记）
# d16在template.html中的位置需要确定
d16_line=$(grep -n 'id="d16"' template.html | head -1 | cut -d: -f1)
if [ -n "$d16_line" ]; then
    head -n $((d16_line - 1)) template.html > index.new.html
    echo "  提取到第 $((d16_line - 1)) 行（d16之前）"
else
    echo "  错误：未在template.html中找到d16"
    exit 1
fi

echo "步骤2: 插入新事件片段（d17-d20）..."
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

echo "步骤3: 追加旧日期和footer..."
# 从d16开始追加到文件结束（包含d16-d0和footer）
tail -n +$d16_line template.html >> index.new.html
echo "  从第 $d16_line 行追加旧日期和footer"

echo "步骤4: 替换原文件..."
mv index.new.html index.html

echo ""
echo "✅ 合并完成"
echo "━━━━━━━━━━━━━━━━━━━━"
echo "文件: index.html"
echo "大小: $(ls -lh index.html | awk '{print $5}')"
echo "行数: $(wc -l < index.html)"
echo "━━━━━━━━━━━━━━━━━━━━"
