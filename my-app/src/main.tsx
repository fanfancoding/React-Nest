// 导入 React 的 StrictMode 组件，用于开发环境下的额外检查和警告
import { StrictMode } from "react";

// 导入 React 18+ 的新 API，用于创建应用的根节点
import { createRoot } from "react-dom/client";

// 导入 React Router 的 RouterProvider，用于提供路由上下文
import { RouterProvider } from "react-router";

// 导入 Ant Design 的配置提供者，用于全局配置主题、语言等
import { ConfigProvider } from "antd";

// 导入 Ant Design 的中文语言包，用于界面本地化
import zhCN from "antd/locale/zh_CN";

// 导入 Ant Design 的重置样式，确保在不同浏览器中样式一致性
import "antd/dist/reset.css";

// 导入项目的全局样式文件，包含自定义样式
import "./index.css";

// 导入应用的路由配置，包含所有页面路由定义
import { router } from "./routes/route";

// 获取 HTML 文档中 id 为 "root" 的 DOM 元素，作为 React 应用的挂载点
// 使用非空断言操作符 (!) 确保该元素存在
createRoot(document.getElementById("root")!).render(
  // StrictMode 启用额外的开发检查，帮助发现潜在问题
  <StrictMode>
    {/* ConfigProvider 配置 Ant Design 的全局设置 */}
    <ConfigProvider locale={zhCN}>
      {/* RouterProvider 提供路由上下文，使整个应用可以使用路由功能 */}
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
);
