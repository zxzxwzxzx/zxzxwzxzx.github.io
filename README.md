# 个人主页

目标地址：https://zxzxwzxzx.github.io/

原生 HTML / CSS / JavaScript，无运行时依赖。支持手机布局、项目分类筛选、默认展开的 STAR 项目摘要、10 张可放大的 SVG 架构 / 流程图（含 SDD 流程重绘）及邮箱复制。

## 本地预览

在本目录运行：

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 http://127.0.0.1:4173 。

## GitHub Pages 部署

1. 创建 `zxzxwzxzx/zxzxwzxzx.github.io` 公开仓库。
2. 将本目录内容（包括 `.github`、`.nojekyll`）推送到仓库根目录的 `main` 分支。不要推送整个简历工作区。
3. 在仓库 Settings → Pages → Build and deployment 中，将 Source 设为 GitHub Actions。
4. 到 Actions 查看 `Deploy personal homepage`，成功后访问主页地址。

也可以不使用 Actions：将 Pages 来源设为 `Deploy from a branch`，选择 `main` 和 `/(root)`。本项目无需编译。

## 更新内容

- `index.html`：个人信息、论文、项目、实习与技能。
- `styles.css`：布局、颜色、手机样式。
- `app.js`：分类筛选与复制邮箱。
- `assets/diagrams/*.svg`：项目架构与流程图。
- `assets/favicon-star.svg`：标签页图标。

导航插图是原创概念示意，不是论文实验图。论文指标属于完整模型或所在系统；项目指标沿用本人提供的简历口径。
