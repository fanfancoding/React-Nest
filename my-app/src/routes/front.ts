// 导入 React 库，用于创建 React 元素
import React from "react";

// 导入前端布局组件，这是所有前端页面的外层布局容器
import FrontLayout from "@/Layout/Fornt";

// 导入首页组件，显示博客的首页内容
import HomePage from "@/views/Front/home";

// 导入登录页面组件，用于用户登录
import LoginPage from "@/views/Front/Login";

// 导入 React Router 的 RouteObject 类型，用于类型检查
import type { RouteObject } from "react-router";

// 定义前端路由配置数组，这是博客前端的所有路由规则
export const frontRoutes: RouteObject[] = [
  // 根路由配置：包含布局和子路由
  {
    path: "/", // 根路径：匹配所有以 "/" 开头的路径
    element: React.createElement(FrontLayout), // 使用 FrontLayout 作为布局组件
    children: [ // 定义子路由，这些路由会在 FrontLayout 的 Outlet 中渲染
      {
        index: true, // index 路由：当父路由匹配但没有子路径时显示
        element: React.createElement(HomePage), // 显示首页组件
      },
      {
        path: "login", // 子路径：匹配 "/login"
        element: React.createElement(LoginPage), // 显示登录页面组件
      },
    ],
  },
];
