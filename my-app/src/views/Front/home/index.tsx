// 导入 React Router 的 Link 组件，用于创建页面导航链接
import { Link } from "react-router";

// 导入 Ant Design 的核心 UI 组件
// Card: 卡片组件，用于展示文章内容
// Button: 按钮组件，用于交互操作
// Typography: 排版组件，包含标题、段落、文本等
// Row/Col: 栅格布局组件，用于响应式布局
// Statistic: 统计数值组件，用于展示博客统计数据
// Space: 间距组件，用于控制元素间距
import { Card, Button, Typography, Row, Col, Statistic, Space } from "antd";

// 导入 Ant Design Icons 的图标组件
// ReadOutlined: 阅读图标，用于表示阅读时间
// CalendarOutlined: 日历图标，用于表示发布日期
// RightOutlined: 右箭头图标，用于表示"更多"链接
import {
  ReadOutlined,
  CalendarOutlined,
  RightOutlined,
} from "@ant-design/icons";

// 解构 Typography 组件的子组件，方便后续使用
// Title: 标题组件
// Paragraph: 段落组件
// Text: 文本组件
const { Title, Paragraph, Text } = Typography;

// 定义首页组件，这是博客的首页页面
export default function HomePage() {
  // 定义精选文章数据数组
  // 包含文章的基本信息：ID、标题、摘要、发布日期、阅读时间、分类
  const featuredPosts = [
    {
      id: 1, // 文章唯一标识符
      title: "React 18 新特性详解", // 文章标题
      excerpt: "探索 React 18 带来的新功能，包括并发特性、Suspense 改进等...", // 文章摘要
      date: "2024-01-15", // 发布日期
      readTime: "5 min read", // 预计阅读时间
      category: "前端开发", // 文章分类
    },
    {
      id: 2, // 第二篇文章
      title: "TypeScript 最佳实践", // 文章标题
      excerpt: "分享在大型项目中使用 TypeScript 的经验和技巧...", // 文章摘要
      date: "2024-01-10", // 发布日期
      readTime: "8 min read", // 预计阅读时间
      category: "编程语言", // 文章分类
    },
    {
      id: 3, // 第三篇文章
      title: "现代 CSS 布局技巧", // 文章标题
      excerpt: "介绍 Flexbox、Grid 和其他现代 CSS 布局技术的使用方法...", // 文章摘要
      date: "2024-01-05", // 发布日期
      readTime: "6 min read", // 预计阅读时间
      category: "CSS", // 文章分类
    },
  ];

  // 返回 JSX 结构，定义首页的完整内容
  return (
    // 根容器 div
    <div>
      {/* Hero 区域（英雄区域），这是页面顶部的主要展示区域 */}
      <section
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // 渐变背景色
          color: "white", // 文字颜色为白色
          padding: "80px 0", // 上下内边距 80px
        }}
      >
        {/* Hero 内容容器，限制最大宽度并居中 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 内容居中对齐 */}
          <div className="text-center">
            {/* 主标题：一级标题，白色文字，大字体 */}
            <Title
              level={1}
              style={{ color: "white", marginBottom: "24px", fontSize: "3rem" }}
            >
              欢迎来到我的博客
            </Title>
            {/* 副标题段落：描述文字，浅蓝色调 */}
            <Paragraph
              style={{
                fontSize: "1.25rem", // 字体大小
                color: "#e0e7ff", // 浅蓝色文字
                marginBottom: "32px", // 底部外边距
                maxWidth: "768px", // 最大宽度
                margin: "0 auto 32px", // 居中，底部外边距
              }}
            >
              分享技术见解，记录生活点滴。这里是我的数字花园，记录每一刻的思考与成长。
            </Paragraph>
            {/* 操作按钮组：使用 Space 组件控制间距 */}
            <Space size="large">
              {/* 查看最新文章按钮：白色背景，蓝色文字 */}
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: "white", // 白色背景
                  color: "#667eea", // 蓝色文字
                  border: "none", // 无边框
                }}
                onClick={() =>
                  // 点击时平滑滚动到最新文章区域
                  document
                    .getElementById("latest-posts")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                查看最新文章
              </Button>
              {/* 了解更多按钮：幽灵按钮样式 */}
              <Button
                type="primary"
                size="large"
                ghost // 幽灵按钮（透明背景）
                style={{ borderColor: "white", color: "white" }} // 白色边框和文字
              >
                {/* 链接到关于页面 */}
                <Link to="/about" style={{ color: "inherit" }}>
                  了解更多
                </Link>
              </Button>
            </Space>
          </div>
        </div>
      </section>

      {/* 精选文章区域，使用注释标识这是精选文章部分 */}
      <section id="latest-posts" style={{ padding: "64px 0" }}>
        {/* 精选文章容器，限制最大宽度并居中 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 区域标题和描述，居中对齐 */}
          <div className="text-center mb-12">
            {/* 二级标题：最新文章 */}
            <Title level={2} style={{ marginBottom: "16px" }}>
              最新文章
            </Title>
            {/* 描述段落：灰色文字，居中显示 */}
            <Paragraph
              style={{
                fontSize: "18px", // 字体大小 18px
                color: "#6b7280", // 灰色文字
                maxWidth: "512px", // 最大宽度
                margin: "0 auto", // 水平居中
              }}
            >
              分享我在前端开发、编程技术和生活感悟等方面的思考
            </Paragraph>
          </div>

          {/* 文章卡片网格布局：使用 Row 和 Col 实现响应式栅格 */}
          <Row gutter={[24, 24]}>
            {/* 遍历精选文章数组，渲染每个文章卡片 */}
            {featuredPosts.map((post) => (
              // 单个文章列：响应式布局（移动端1列，平板2列，桌面3列）
              <Col xs={24} md={12} lg={8} key={post.id}>
                {/* 文章卡片：可悬停，高度100%填充列 */}
                <Card
                  hoverable // 启用悬停效果
                  style={{ height: "100%" }} // 卡片高度100%
                  bodyStyle={{
                    padding: "24px", // 内边距 24px
                    height: "100%", // 内容区域高度100%
                    display: "flex", // 弹性布局
                    flexDirection: "column", // 垂直排列
                  }}
                >
                  {/* 卡片内容主体区域，使用 flex: 1 填充剩余空间 */}
                  <div style={{ flex: 1 }}>
                    {/* 文章头部信息：分类标签和阅读时间 */}
                    <div
                      style={{
                        display: "flex", // 弹性布局
                        justifyContent: "space-between", // 元素两端对齐
                        alignItems: "center", // 垂直居中
                        marginBottom: "12px", // 底部外边距
                      }}
                    >
                      {/* 分类标签按钮：蓝色调，小尺寸 */}
                      <Button
                        type="primary"
                        size="small"
                        style={{
                          backgroundColor: "#dbeafe", // 浅蓝色背景
                          color: "#1e40af", // 深蓝色文字
                          border: "none", // 无边框
                        }}
                      >
                        {post.category} {/* 显示文章分类 */}
                      </Button>
                      {/* 阅读时间信息：灰色文字，小字体 */}
                      <Text type="secondary" style={{ fontSize: "14px" }}>
                        <ReadOutlined style={{ marginRight: "4px" }} />{" "}
                        {/* 阅读图标 */}
                        {post.readTime} {/* 显示阅读时间 */}
                      </Text>
                    </div>

                    {/* 文章标题：四级标题 */}
                    <Title
                      level={4}
                      style={{ marginBottom: "12px", lineHeight: "1.4" }}
                    >
                      {post.title} {/* 显示文章标题 */}
                    </Title>

                    {/* 文章摘要：二级文字，最多显示3行 */}
                    <Paragraph
                      type="secondary" // 次要文字样式
                      style={{ marginBottom: "16px", lineHeight: "1.6" }}
                      ellipsis={{ rows: 3 }} // 超出3行显示省略号
                    >
                      {post.excerpt} {/* 显示文章摘要 */}
                    </Paragraph>
                  </div>

                  {/* 卡片底部区域：发布日期和阅读更多链接 */}
                  <div
                    style={{
                      display: "flex", // 弹性布局
                      justifyContent: "space-between", // 两端对齐
                      alignItems: "center", // 垂直居中
                    }}
                  >
                    {/* 发布日期：灰色文字，小字体 */}
                    <Text type="secondary" style={{ fontSize: "14px" }}>
                      <CalendarOutlined style={{ marginRight: "4px" }} />{" "}
                      {/* 日历图标 */}
                      {post.date} {/* 显示发布日期 */}
                    </Text>
                    {/* 阅读更多链接：蓝色文字，加粗 */}
                    <Link
                      to={`/articles/${post.id}`} // 链接到文章详情页
                      style={{ color: "#3b82f6", fontWeight: "500" }}
                    >
                      阅读更多 <RightOutlined /> {/* 右箭头图标 */}
                    </Link>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* 查看所有文章按钮区域，居中显示 */}
          <div className="text-center mt-12">
            {/* 主要操作按钮：链接到文章列表页面 */}
            <Button type="primary" size="large">
              <Link to="/articles" style={{ color: "inherit" }}>
                查看所有文章 <RightOutlined /> {/* 右箭头图标 */}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 统计数据区域，使用注释标识这是统计数据部分 */}
      <section
        style={{
          backgroundColor: "white", // 白色背景
          padding: "64px 0", // 上下内边距 64px
          borderTop: "1px solid #e5e7eb", // 顶部边框
        }}
      >
        {/* 统计数据容器，限制最大宽度并居中 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 统计数据网格：响应式布局，3列统计项 */}
          <Row gutter={[32, 32]}>
            {/* 第一列：技术文章统计 */}
            <Col xs={24} md={8}>
              <div className="text-center">
                <Statistic
                  title="技术文章" // 统计项标题
                  value={50} // 数值
                  suffix="+" // 后缀符号
                  valueStyle={{
                    color: "#3b82f6", // 蓝色数值
                    fontSize: "2.5rem", // 大字体
                    fontWeight: "bold", // 加粗
                  }}
                />
              </div>
            </Col>
            {/* 第二列：访问量统计 */}
            <Col xs={24} md={8}>
              <div className="text-center">
                <Statistic
                  title="访问量" // 统计项标题
                  value={10000} // 数值（10K）
                  suffix="+" // 后缀符号
                  valueStyle={{
                    color: "#3b82f6", // 蓝色数值
                    fontSize: "2.5rem", // 大字体
                    fontWeight: "bold", // 加粗
                  }}
                />
              </div>
            </Col>
            {/* 第三列：写作年份统计 */}
            <Col xs={24} md={8}>
              <div className="text-center">
                <Statistic
                  title="写作年份" // 统计项标题
                  value={2024} // 年份数值
                  valueStyle={{
                    color: "#3b82f6", // 蓝色数值
                    fontSize: "2.5rem", // 大字体
                    fontWeight: "bold", // 加粗
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
