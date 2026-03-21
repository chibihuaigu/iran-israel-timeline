#!/bin/bash
# 从干净备份提取所有日期块

BACKUP="backup/index-full-20260320-2238.html"
OUTPUT_DIR="src/events"

# 获取所有日期位置
positions=($(grep -n 'id="d[0-9]*"' "$BACKUP" | grep -o '^[0-9]*'))
ids=($(grep -o 'id="d[0-9]*"' "$BACKUP" | grep -o 'd[0-9]*' | sort -u -t'd' -k2 -n | tac))

echo "找到 ${#ids[@]} 个日期块"

# 倒序处理（从d20到d0）
for i in "${!ids[@]}"; do
    id="${ids[$i]}"
    # 找到这个id在行号列表中的位置
    line=$(grep -n "id=\"$id\"" "$BACKUP" | head -1 | cut -d: -f1)
    
    # 找到下一个日期的行号（作为结束位置）
    next_line=3635  # 默认到footer之前
    for j in "${!ids[@]}"; do
        if [ "${ids[$j]}" = "$id" ] && [ $((j+1)) -lt ${#ids[@]} ]; then
            next_id="${ids[$((j+1))]}"
            next_line=$(grep -n "id=\"$next_id\"" "$BACKUP" | head -1 | cut -d: -f1)
            break
        fi
    done
    
    # 提取日期块
    end_line=$((next_line - 1))
    sed -n "${line},${end_line}p" "$BACKUP" > "$OUTPUT_DIR/${id}.html"
    echo "提取 $id.html: 第${line}行到第${end_line}行 ($(wc -l < "$OUTPUT_DIR/${id}.html") 行)"
done

echo "完成！"
