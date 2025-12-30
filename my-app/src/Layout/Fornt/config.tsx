import { HomeOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { LinkOutlined } from "@ant-design/icons";
import { BulbOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";

export const navigateTabList = [
  {
    label: "首页",
    path: "/",
    key: "/",
    icon: <HomeOutlined />,
    children: [],
  },
  {
    label: "写作",
    path: "/writing",
    key: "/writing",
    icon: <EditOutlined />,
    children: [
      {
        label: "技术",
        path: "/writing/technology",
        key: "/writing/technology",
      },
      {
        label: "随笔",
        path: "/writing/essay",
        key: "/writing/essay",
      },
      {
        label: "文归档",
        path: "/writing/archives",
        key: "/writing/archives",
      },
    ],
  },
  {
    label: "见闻",
    path: "/news",
    key: "/news",
    icon: <BulbOutlined />,
    children: [
      {
        label: "游戏",
        path: "/news/game",
        key: "/news/game",
      },
      {
        label: "书籍",
        path: "/news/book",
        key: "/news/book",
      },
      {
        label: "电影",
        path: "/news/movie",
        key: "/news/movie",
      },
    ],
  },
  {
    label: "友链",
    path: "/link",
    key: "/link",
    icon: <LinkOutlined />,
    children: [],
  },
  {
    label: "关于",
    path: "/about",
    key: "/about",
    icon: <UserOutlined />,
    children: [
      {
        label: "关于我",
        path: "/about/me",
        key: "/about/me",
      },
      {
        label: "关于网站",
        path: "/about/website",
        key: "/about/website",
      },
      {
        label: "留言板",
        path: "/about/message",
        key: "/about/message",
      },
    ],
  },
];
