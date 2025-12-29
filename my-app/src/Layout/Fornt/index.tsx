import { useState, useMemo } from "react";
import { ConfigProvider, Dropdown, Drawer, Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Outlet } from "react-router";
import { navigateTabList } from "./config";
import { dropdownTheme, menuTheme } from "./cssConfig";
import cat from "@/assets/cat.gif";

export default function FrontLayout() {
  const [open, setOpen] = useState(false);

  // 计算需要默认展开的 key (所有有子项的项)
  const defaultOpenKeys = useMemo(() => {
    return navigateTabList
      .filter((item) => item.children && item.children.length > 0)
      .map((item) => item.key);
  }, []);

  // 格式化菜单项，将空子项数组转为 undefined，以便 Menu 正常渲染无图标样式
  const mobileMenuItems = useMemo(() => {
    return navigateTabList.map((item) => ({
      ...item,
      children:
        item.children && item.children.length > 0 ? item.children : undefined,
    }));
  }, []);

  const renderMobileMenu = () => {
    return (
      <ConfigProvider theme={menuTheme}>
        <Drawer
          title="Tarzan导航"
          placement="left"
          open={open}
          width={250}
          closable={false}
          onClose={() => setOpen(false)}
        >
          <Menu
            mode="inline"
            defaultOpenKeys={defaultOpenKeys}
            items={mobileMenuItems}
            onClick={() => setOpen(false)}
          />
        </Drawer>
      </ConfigProvider>
    );
  };
  const navigateListRender = () => {
    return navigateTabList.map((item) => {
      return (
        <ConfigProvider theme={dropdownTheme} key={item.key}>
          <Dropdown
            menu={{
              items: item.children as any,
            }}
          >
            <li className="flex items-center gap-2 cursor-pointer">
              {item.icon}
              {item.label}
            </li>
          </Dropdown>
        </ConfigProvider>
      );
    });
  };

  return (
    <div className="min-h-screen w-full text-[16px]">
      {/* 桌面端导航 */}
      <ul className="text-primary bg-white p-4 justify-center gap-16 hidden md:flex  top-0 z-10 shadow-sm relative">
        {navigateListRender()}
        <img
          src={cat}
          alt="cat"
          className="absolute right-20 top-1/2 -translate-y-1/2 w-12 h-12 object-contain"
        />
      </ul>

      {/* 移动端导航栏 */}
      <div className="md:hidden bg-white p-2  top-0 z-10 flex items-center relative shadow-sm">
        <Button
          type="text"
          icon={<MenuOutlined className="text-xl" />}
          onClick={() => setOpen(true)}
          style={{ color: "var(--color-primary)" }}
        >
          导航
        </Button>
        <img
          src={cat}
          alt="cat"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 object-contain"
        />
      </div>
      {renderMobileMenu()}
      {/* 子路由出口 */}
      <main className="max-w-7xl mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
