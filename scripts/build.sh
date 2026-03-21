#!/bin/bash
set -e

echo "━━━━━━━━━━━━━━━━━━━━"
echo "合并时间线文件"
echo "━━━━━━━━━━━━━━━━━━━━"

WORKDIR="/workspace/projects/workspace/timeline/iran-israel"
cd "$WORKDIR"

# 1. 备份原文件
mkdir -p backup
cp dist/index.html backup/index-$(date +%Y%m%d-%H%M).html 2>/dev/null || true
ls -t backup/index-*.html 2>/dev/null | tail -n +6 | xargs rm -f 2>/dev/null || true

echo "步骤1: 复制模板头部..."
# template.html 包含HTML头部和timeline开始
cp templates/head.html dist/index.new.html
echo "  复制 template.html 作为基础"

echo "步骤2: 插入所有日期片段（倒序：最新在前）..."
# 倒序插入所有事件片段（d20到d0）
EVENTS=(
    "src/events/d20.html"
    "src/events/d19.html"
    "src/events/d18.html"
    "src/events/d17.html"
    "src/events/d16.html"
    "src/events/d15.html"
    "src/events/d14.html"
    "src/events/d13.html"
    "src/events/d12.html"
    "src/events/d11.html"
    "src/events/d10.html"
    "src/events/d9.html"
    "src/events/d8.html"
    "src/events/d7.html"
    "src/events/d6.html"
    "src/events/d5.html"
    "src/events/d4.html"
    "src/events/d3.html"
    "src/events/d2.html"
    "src/events/d1.html"
    "src/events/d0.html"
)

total_lines=0
for f in "${EVENTS[@]}"; do
    if [ -f "$f" ]; then
        lines=$(wc -l < "$f")
        total_lines=$((total_lines + lines))
        echo "  合并: $f (${lines} 行)"
        cat "$f" >> dist/index.new.html
        echo "" >> dist/index.new.html
    else
        echo "  ⚠️  跳过: $f (不存在)"
    fi
done
echo "  总计: ${total_lines} 行日期内容"

echo "步骤3: 追加footer..."
# footer.html 包含timeline闭合、footer、scripts和结束标签
cat templates/foot.html >> dist/index.new.html
echo "  追加 footer.html"

echo "步骤4: 替换原文件..."
mv dist/index.new.html dist/index.html

echo ""
echo "✅ 合并完成"
echo "━━━━━━━━━━━━━━━━━━━━"
echo "文件: index.html"
echo "大小: $(ls -lh index.html | awk '{print $5}')"
echo "行数: $(wc -l < index.html)"
echo "━━━━━━━━━━━━━━━━━━━━"
