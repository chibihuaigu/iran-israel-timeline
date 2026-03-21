# 伊朗-以色列冲突时间线

## 项目结构

```
iran-israel/
├── src/                    # 源码目录（唯一可编辑）
│   ├── events/            # 事件片段（每天一个文件）
│   │   ├── d20.html      # 3月20日
│   │   ├── d19.html      # 3月19日
│   │   └── ...           # 其他日期
│   ├── css/              # 样式文件
│   │   └── style.css
│   ├── js/               # JavaScript
│   │   └── main.js
│   └── data/             # 数据文件
│       └── latest-events.js
│
├── dist/                  # 生成的部署文件（只读）
│   └── index.html        # 完整打包后的文件
│
├── templates/             # 模板文件（打包用）
│   ├── head.html         # HTML头部模板
│   └── foot.html         # HTML底部模板
│
├── scripts/               # 工具脚本
│   ├── build.sh          # 主要打包脚本 ⭐
│   ├── convert_format.py # 格式转换
│   └── utils/            # 辅助脚本
│
├── build/                 # 旧打包目录（兼容）
│   └── build.sh          # 软链接或副本
│
├── docs/                  # 文档
│   └── README.md
│
├── archive/               # 归档
│   └── original/         # 原始文件备份
│
└── backup/                # 自动备份（自动清理，只保留5个）
```

## 工作流程

### 更新内容（标准流程）

```bash
# 1. 修改 src/events/dXX.html（拆分文件）
vim src/events/d20.html

# 2. 修改 src/css/style.css（如需样式调整）
vim src/css/style.css

# 3. 运行打包脚本生成 dist/index.html
bash scripts/build.sh

# 4. 验证 dist/index.html 正确性
# - 检查文件大小（约6MB）
# - 检查是否包含新内容

# 5. 推送到 GitHub
git add dist/index.html
git commit -m "update: 添加X月X日事件"
git push origin main

# 6. 验证网页效果
# 访问 https://chibihuaigu.github.io/iran-israel-timeline/
```

### 目录说明

| 目录 | 用途 | 是否可编辑 |
|------|------|-----------|
| `src/` | 源代码 | ✅ 是 |
| `dist/` | 生成的部署文件 | ❌ 否（自动生成） |
| `templates/` | HTML模板 | ⚠️ 谨慎修改 |
| `scripts/` | 工具脚本 | ⚠️ 谨慎修改 |
| `backup/` | 自动备份 | ❌ 否（自动管理） |
| `archive/` | 原始归档 | ❌ 否（仅备份） |

## 注意事项

1. **永远不要直接编辑 `dist/index.html`**
   - 这个文件是由 `scripts/build.sh` 自动生成的
   - 你的修改会在下次打包时被覆盖

2. **编辑请只在 `src/` 目录下进行**
   - 事件内容：`src/events/d*.html`
   - 样式：`src/css/style.css`
   - 脚本：`src/js/main.js`

3. **备份已自动管理**
   - `scripts/build.sh` 会自动保留最近5个版本的备份
   - 旧备份会自动清理，无需手动管理

## 技术栈

- **构建**：Bash 脚本 (`scripts/build.sh`)
- **样式**：Apple Design System (iOS/macOS 风格)
- **部署**：GitHub Pages
- **版本控制**：Git

## Skill 文件

项目关联的 Skill 文件位于：
- `/workspace/projects/workspace/timeline/iran-timeline-skill/SKILL.md`

## 更新记录

- 2026-03-21: 重构项目结构，清理废弃文件
