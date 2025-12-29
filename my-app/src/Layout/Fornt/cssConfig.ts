export const dropdownTheme = {
  components: {
    Dropdown: {
      fontSize: 16,
      colorText: "var(--color-primary)",
      colorBgElevated: "#ebeef1",
      paddingBlock: 12,
      controlPaddingHorizontal: 26,
    },
  },
};

export const menuTheme = {
  token: {
    colorText: "var(--color-primary)", // 文字颜色
    colorTextHeading: "var(--color-primary)", // 标题颜色
  },
  components: {
    Menu: {
      itemColor: "var(--color-primary)", // 菜单项颜色
      itemSelectedColor: "var(--color-primary)", // 选中项颜色
      itemHoverColor: "var(--color-primary)", // 悬浮颜色
      itemIconColor: "var(--color-primary)", // 图标颜色
      itemSelectedBg: "rgba(130, 65, 28, 0.1)", // 选中项的背景色
      itemActiveBg: "rgba(130, 65, 28, 0.05)", // 激活时的背景色
      itemHoverBg: "rgba(130, 65, 28, 0.05)", // 悬浮时的背景色
    },
  },
};
