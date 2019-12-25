import React from "react";
import { Menu, Icon } from "antd";
import "antd/lib/menu/style/css";

const { SubMenu } = Menu;

function AppMenu(props) {
  const handleClick = e => {
    const { handleClickMenu } = props;
    const { key } = e;

    handleClickMenu(key);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ width: "100%" }}
      defaultSelectedKeys={["partone"]}
      // defaultOpenKeys={["partone"]}
      theme="dark"
      mode="inline"
    >
      <SubMenu
        key="partone"
        title={
          <span>
            <Icon type="appstore" />
            <span>第一部分</span>
          </span>
        }
      >
        <Menu.Item key="/partone/one">1</Menu.Item>
        <Menu.Item key="/partone/two">2</Menu.Item>
        <SubMenu key="sub1-3" title="3">
          <Menu.Item key="sub1-3-1">3-1</Menu.Item>
          <Menu.Item key="sub1-3-2">3-2</Menu.Item>
        </SubMenu>
      </SubMenu>

      <SubMenu
        key="/parttwo"
        title={
          <span>
            <Icon type="appstore" />
            <span>第二部分</span>
          </span>
        }
      >
        <Menu.Item key="/parttwo/one">1</Menu.Item>
        <Menu.Item key="/parttwo/two">2</Menu.Item>
        <SubMenu key="sub2-3" title="3">
          <Menu.Item key="sub2-3-1">3-1</Menu.Item>
          <Menu.Item key="sub2-3-2">3-2</Menu.Item>
        </SubMenu>
      </SubMenu>

      <Menu.Item key="/partthree/one">第三部分</Menu.Item>
    </Menu>
  );
}

export default AppMenu;
