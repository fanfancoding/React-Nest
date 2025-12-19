// 导入 React Router 的 createBrowserRouter 函数，用于创建浏览器路由器
import { createBrowserRouter } from "react-router";

// 导入前端路由配置数组，包含所有前端页面的路由规则
import { frontRoutes } from "./front";

// 创建并导出路由器实例
// 使用展开运算符将 frontRoutes 数组展开，确保所有路由都被正确配置
export const router = createBrowserRouter([...frontRoutes]);
