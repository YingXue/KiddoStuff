# KiddoStuff - 小书库

一个用 React + Vite + TailwindCSS 打造的儿童图书借阅小应用。  
支持通过标签筛选图书，选择想借的书后一键生成邮件请求，非常适合家庭或小朋友的阅读管理。

---

## 预览

访问：[https://yingxue.github.io/KiddoStuff](https://yingxue.github.io/KiddoStuff)

---

## 功能特色

- 多标签筛选，快速找到感兴趣的书
- 显示图书状态（可借、已借出、在读）并禁止选择不可借的书籍
- 选中书籍后，点击按钮即可生成借书邮件
- 简洁友好的儿童风界面

---

## 项目结构

- `src/` - 主要源码目录
- `src/components/` - React 组件
- `src/data/books.js` - 书籍数据
- `public/` - 公共资源文件（图片等）
- `vite.config.js` - Vite 配置
- `package.json` - 依赖及脚本配置

---

## 本地运行

确保安装了 [Node.js](https://nodejs.org/) 和 npm

```bash
npm install
cd Git\KiddoStuff\server

node server.js
cd Git\KiddoStuff\server
npm install
npm run dev
