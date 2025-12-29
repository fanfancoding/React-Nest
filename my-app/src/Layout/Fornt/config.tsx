import { HomeOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { LinkOutlined } from "@ant-design/icons";
import { BulbOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";

export const navigateTabList = [
  {
    label: "首页",
    path: "/",
    key: "home",
    icon: <HomeOutlined />,
    children: [],
  },
  {
    label: "写作",
    path: "/writing",
    key: "writing",
    icon: <EditOutlined />,
    children: [
      {
        label: "技术",
        path: "/writing/technology",
        key: "technology",
      },
      {
        label: "随笔",
        path: "/writing/essay",
        key: "essay",
      },
      {
        label: "文归档",
        path: "/writing/archives",
        key: "archives",
      },
    ],
  },
  {
    label: "见闻",
    path: "/news",
    key: "news",
    icon: <BulbOutlined />,
    children: [
      {
        label: "游戏",
        path: "/news/game",
        key: "game",
      },
      {
        label: "书籍",
        path: "/news/book",
        key: "book",
      },
      {
        label: "电影",
        path: "/news/movie",
        key: "movie",
      },
    ],
  },
  {
    label: "友链",
    path: "/link",
    key: "link",
    icon: <LinkOutlined />,
    children: [],
  },
  {
    label: "关于",
    path: "/about",
    key: "about",
    icon: <UserOutlined />,
    children: [
      {
        label: "关于我",
        path: "/about/me",
        key: "me",
      },
      {
        label: "关于网站",
        path: "/about/website",
        key: "website",
      },
      {
        label: "留言板",
        path: "/about/message",
        key: "message",
      },
    ],
  },
];
