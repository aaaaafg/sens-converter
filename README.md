# SENS//FORGE — FPS 灵敏度转换工坊

> 跨游戏灵敏度换算 · cm/360 计算 · 跟手度测试场 · 灵敏度预设管理
> 完全离线，无需联网，打开即用。

---

## 📥 如何下载 / 使用（看这里就够）

### 方式一：网页版（最简单，无需下载）

直接在浏览器打开：

**👉 https://aaaaafg.github.io/sens-converter/**

> 网页版就是根目录的 `index.html`，一个文件包含全部样式和字体，离线可用。
> 如果你不想在线打开，也可以点右上角绿色 **Code → Download ZIP**，解压后双击 `index.html` 即可。

### 方式二：桌面版（Windows 安装包）

1. 点击仓库页面右侧 **Releases**（或直接访问 <https://github.com/aaaaafg/sens-converter/releases>）
2. 在最新版本的 **Assets** 里，找到并下载：
   `SENS-FORGE-灵敏度工坊-Setup-1.0.0.exe`
3. 双击安装（可自定义安装目录，自动创建桌面 / 开始菜单快捷方式）

---

## ✨ 功能特性

- **跨游戏灵敏度换算**：在不同 FPS 游戏之间换算灵敏度
- **cm/360 计算**：输入灵敏度，换算鼠标移动一圈所需距离
- **跟手度测试场**：现场测试你的灵敏度是否顺手
- **灵敏度预设管理**：保存、管理多套灵敏度预设

---

## 🖥 网页版

- 单文件 `index.html`，Tailwind CSS 与字体全部内联（base64），**零外部依赖**
- 双击即可本地打开，也可部署到任意静态托管（如 GitHub Pages）

## 🖥 桌面版

桌面版基于 Electron，与网页版共用同一个 `index.html`，打包后完全离线运行。

```bash
cd desktop
npm install
npm start      # 本地运行
npm run dist   # 打包 Windows 安装包（产物在 desktop/dist/）
```

> 打包依赖本地 `build-tools/rcedit-x64.exe`（来自开源项目 [electron/rcedit](https://github.com/electron/rcedit)，MIT 协议）为安装包写入图标与版本信息。

---

## 📁 项目结构

```
.
├── index.html        # 网页版（单文件，完全离线）
├── sensforge.ico     # 项目图标
└── desktop/          # Electron 桌面版
    ├── main.js       # 主进程
    ├── index.html    # 与网页版相同的界面
    ├── afterPack.js  # 打包后处理（写入图标/版本）
    ├── package.json
    └── build-tools/  # rcedit 打包工具
```

---

## 📄 许可证

[MIT](LICENSE) © SENS//FORGE
