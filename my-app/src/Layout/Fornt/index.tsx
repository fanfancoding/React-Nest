// 导入 React Router 的核心组件和钩子
// Outlet: 用于渲染嵌套路由的占位符组件
// Link: 用于创建导航链接的组件
// useLocation: 获取当前路由位置信息的钩子
// useNavigate: 编程式导航的钩子
import { Outlet, Link, useLocation, useNavigate } from "react-router";

// 导入 React 的 useState 和 useEffect 钩子，用于管理组件状态和副作用
import { useState, useEffect } from "react";

// 导入 Ant Design 的核心 UI 组件
// Layout: 布局容器组件，提供整体页面结构
// Menu: 菜单组件，用于导航
// Button: 按钮组件
// Drawer: 抽屉组件，通常用于移动端菜单
// Typography: 排版组件，包含标题、段落、文本等
// Space: 间距组件，用于控制子元素之间的间距
// Divider: 分割线组件
import { Layout, Menu, Button, Drawer, Typography, Space, Divider } from "antd";

// 导入自定义样式文件
// import "./index.css";

// 导入 Ant Design Icons 图标组件
// MenuOutlined: 菜单图标，用于移动端菜单按钮
// HomeOutlined: 首页图标
// FileTextOutlined: 文件/文章图标
// AppstoreOutlined: 应用商店/分类图标
// UserOutlined: 用户/关于图标
// MailOutlined: 邮件/联系图标
import {
  MenuOutlined,
  HomeOutlined,
  FileTextOutlined,
  AppstoreOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";

// 解构 Layout 组件的子组件，方便使用
// Header: 头部组件
// Content: 内容区域组件
// Footer: 底部组件
const { Header, Content, Footer } = Layout;

// 解构 Typography 组件的子组件
// Title: 标题组件，支持不同级别的标题
// Paragraph: 段落组件
// Text: 文本组件
const { Title, Paragraph, Text } = Typography;

// 定义前端布局组件，这是整个博客前端的主要布局容器
// 使用 export default 导出，作为默认导出
export default function FrontLayout() {
  // 使用 useState 钩子管理移动端抽屉菜单的显示状态
  // drawerVisible: 布尔值，表示抽屉是否可见
  // setDrawerVisible: 更新抽屉可见性状态的函数
  const [drawerVisible, setDrawerVisible] = useState(false);

  // 使用 useState 钩子管理屏幕尺寸状态
  // isMobile: 布尔值，表示当前是否为移动端屏幕
  const [isMobile, setIsMobile] = useState(false);

  // 使用 useLocation 钩子获取当前路由位置信息
  // location: 包含当前 URL 信息、路径名等
  const location = useLocation();

  // 使用 useNavigate 钩子获取导航函数，用于编程式路由跳转
  const navigate = useNavigate();

  // 使用 useEffect 钩子监听窗口大小变化，动态更新移动端状态
  useEffect(() => {
    // 定义检查屏幕尺寸的函数
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px 为中等屏幕断点
    };

    // 初始检查
    checkIsMobile();

    // 监听窗口大小变化
    window.addEventListener("resize", checkIsMobile);

    // 清理事件监听器
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // 定义导航菜单项的配置数组
  // 每个菜单项包含 key（路由路径）、icon（图标组件）、label（显示文本）
  const menuItems = [
    {
      key: "/", // 路由路径：首页
      icon: <HomeOutlined />, // 图标：首页图标
      label: "首页", // 显示文本
    },
    {
      key: "/articles", // 路由路径：文章列表页面
      icon: <FileTextOutlined />, // 图标：文件图标
      label: "文章", // 显示文本
    },
    {
      key: "/categories", // 路由路径：分类页面
      icon: <AppstoreOutlined />, // 图标：应用商店图标
      label: "分类", // 显示文本
    },
    {
      key: "/about", // 路由路径：关于页面
      icon: <UserOutlined />, // 图标：用户图标
      label: "关于", // 显示文本
    },
    {
      key: "/contact", // 路由路径：联系页面
      icon: <MailOutlined />, // 图标：邮件图标
      label: "联系", // 显示文本
    },
  ];

  // 定义菜单点击处理函数
  // 参数：包含点击菜单项 key 的对象
  // 功能：导航到对应路由，并关闭移动端抽屉菜单
  const handleMenuClick = ({ key }: { key: string }) => {
    // 使用 navigate 函数跳转到指定的路由路径
    navigate(key);
    // 关闭移动端抽屉菜单
    setDrawerVisible(false);
  };

  // 计算当前选中的菜单项 key
  // 通过查找 menuItems 数组中与当前路径匹配的项
  // 如果找不到匹配项，默认使用首页 "/"
  const currentKey =
    menuItems.find((item) => item.key === location.pathname)?.key || "/";

  // 返回 JSX 结构，定义整个前端布局
  return (
    // 使用 Ant Design 的 Layout 组件作为根容器
    // min-h-screen: 确保布局至少占满整个屏幕高度
    <Layout className="min-h-screen relative">
      {/* 页面头部区域，使用注释标识这是头部 */}
      {/* 自定义样式的 Header 组件 */}
      <Header
        className="custom-header"
        style={{
          background: "#fff", // 自定义渐变背景
          color: "white", // 白色文字
          height: "80px", // 自定义高度
          padding: "0 20px", // 自定义内边距
          lineHeight: "80px", // 行高与高度一致
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", // 自定义阴影
        }}
      >
        {/* 容器 div，限制最大宽度并居中，包含响应式内边距 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 头部内容区域：使用网格布局实现居中导航 */}
          <div className="grid grid-cols-3 items-center h-16">
            {/* Logo 区域 - 左侧固定 */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Text className="text-white font-bold text-lg">B</Text>
                </div>
                <Title level={4} className="text-gray-900 mb-0">
                  我的博客
                </Title>
              </Link>
            </div>

            {/* 导航菜单区域 - 居中 */}
            <div className="flex justify-center">
              {isMobile ? (
                // 移动端：显示菜单按钮
                <Button
                  type="text" // 文本类型按钮，无背景色
                  icon={<MenuOutlined />} // 菜单图标
                  onClick={() => setDrawerVisible(true)} // 点击时打开抽屉菜单
                  className="p-2" // 添加内边距
                  style={{
                    color: "#666", // 深灰色图标
                    fontSize: "16px", // 图标大小
                  }}
                />
              ) : (
                // 桌面端：显示水平导航菜单（水平居中）
                <Menu
                  mode="horizontal" // 设置为水平模式
                  selectedKeys={[currentKey]} // 当前选中的菜单项 keys 数组
                  items={menuItems} // 菜单项配置数组
                  onClick={handleMenuClick} // 点击菜单项的处理函数
                  className="border-0 bg-transparent justify-center" // 移除边框，背景透明，菜单项居中
                  style={{
                    lineHeight: "64px", // 确保菜单项垂直居中
                  }}
                />
              )}
            </div>

            {/* 右侧空白区域 - 用于平衡布局 */}
            <div className="flex justify-end">
              这是思考对方空间撒放寒假啊但是恢复回家
              {/* 这里可以放置用户头像、登录按钮等右侧元素 */}
            </div>
          </div>
        </div>

        {/* 移动端导航抽屉菜单，使用注释标识这是移动端导航抽屉 */}
        <Drawer
          title="导航菜单" // 抽屉标题
          placement="right" // 从右侧滑出
          onClose={() => setDrawerVisible(false)} // 关闭抽屉的回调函数
          open={drawerVisible} // 控制抽屉是否显示
          width={280} // 抽屉宽度 280px
        >
          {/* 抽屉内的垂直菜单 */}
          <Menu
            mode="vertical" // 垂直模式菜单
            selectedKeys={[currentKey]} // 当前选中的菜单项
            items={menuItems} // 菜单项配置
            onClick={handleMenuClick} // 点击处理函数
            className="border-0" // 移除边框
          />
        </Drawer>
      </Header>

      {/* 主要内容区域，使用注释标识这是主要内容 */}
      <Content className="bg-gray-50">
        {/* Outlet 组件：React Router 的占位符，用于渲染嵌套路由的内容 */}
        <Outlet />
      </Content>

      {/* 页脚区域，使用注释标识这是页脚 */}
      <Footer className="bg-white border-t border-gray-200">
        {/* 页脚内容容器，限制最大宽度，居中，响应式内边距 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 页脚内容网格布局：1列（移动端）到4列（桌面端）响应式布局 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 关于区域，使用注释标识这是关于部分 */}
            <div className="col-span-1 md:col-span-2">
              {/* 使用 Space 组件水平排列 Logo 和标题 */}
              <Space direction="horizontal" className="mb-4">
                {/* Logo 图标容器 */}
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Text className="text-white font-bold text-lg">B</Text>
                </div>
                {/* 博客标题：五级标题 */}
                <Title level={5} className="text-gray-900 mb-0">
                  我的博客
                </Title>
              </Space>
              {/* 博客描述段落 */}
              <Paragraph className="text-gray-600 text-sm mb-0">
                分享技术见解，记录生活点滴。这里是我的数字花园，欢迎你的到来。
              </Paragraph>
            </div>

            {/* 快速链接区域，使用注释标识这是快速链接部分 */}
            <div>
              {/* 快速链接标题 */}
              <Title level={5} className="mb-4">
                快速链接
              </Title>
              {/* 使用 Space 组件垂直排列链接列表 */}
              <Space direction="vertical" size="small">
                {/* 首页链接 */}
                <Link
                  to="/" // 链接到首页路由
                  className="text-gray-600 hover:text-blue-600 transition-colors" // 灰色文字，悬停时变为蓝色
                >
                  首页
                </Link>
                {/* 文章列表链接 */}
                <Link
                  to="/articles" // 链接到文章列表路由
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  文章列表
                </Link>
                {/* 分类链接 */}
                <Link
                  to="/categories" // 链接到分类路由
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  分类
                </Link>
                {/* 关于我链接 */}
                <Link
                  to="/about" // 链接到关于页面路由
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  关于我
                </Link>
              </Space>
            </div>

            {/* 联系方式区域，使用注释标识这是联系方式部分 */}
            <div>
              {/* 联系方式标题 */}
              <Title level={5} className="mb-4">
                联系方式
              </Title>
              {/* 使用 Space 组件垂直排列联系信息 */}
              <Space direction="vertical" size="small">
                {/* 邮箱信息 */}
                <Text className="text-gray-600">邮箱: hello@example.com</Text>
                {/* 微信信息 */}
                <Text className="text-gray-600">微信: my_wechat</Text>
              </Space>
            </div>
          </div>

          {/* 分割线组件，用于分隔主要内容和版权信息 */}
          <Divider />

          {/* 版权信息区域，居中显示 */}
          <div className="text-center">
            {/* 版权文字，使用灰色文字 */}
            <Text className="text-gray-500">
              {/* 动态显示当前年份 */}© {new Date().getFullYear()} 我的博客. All
              rights reserved.
            </Text>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}
