# 肖闫可唯科研主页

这是基于 [CuteLeaf/Firefly](https://github.com/CuteLeaf/Firefly) 定制的 Astro 静态科研主页，主页重点展示 6 个科研与数学建模项目。

## 本地运行

环境要求：Node.js 22+、pnpm 9+。

```bash
pnpm install
pnpm dev
```

浏览器访问 `http://localhost:4321/`。

## 构建

```bash
pnpm check
pnpm type-check
pnpm build
```

静态产物生成在 `dist/`。

## 主要内容位置

- 个人资料：`src/config/profileConfig.ts`
- 站点标题与主题：`src/config/siteConfig.ts`
- 导航栏：`src/config/navBarConfig.ts`
- 首页横幅：`src/config/backgroundWallpaper.ts`
- 关于页：`src/content/spec/about.md`
- 科研项目：`src/content/posts/*.md`

## 部署到 GitHub Pages

1. 新建 GitHub 仓库并上传源码；
2. 本站已配置为 `https://kevvy-pixel.github.io/`；如更换账号，再同步修改 `src/config/siteConfig.ts` 中的 `site_url`；
3. 如果部署在子路径仓库，请同时按 Astro 文档设置 `astro.config.mjs` 中的 `site` 与 `base`；
4. 在 GitHub Pages 设置中选择 GitHub Actions，使用仓库已有的构建工作流，或将 `dist/` 交给任意静态托管平台。

## 隐私说明

网站只使用公开展示所需的教育、科研、奖项和邮箱信息；电话号码、成绩单原件及证件材料未放入站点。
