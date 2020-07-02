import React, { useEffect, useState } from "react";
import { Menu, Icon } from "antd";
import "antd/lib/menu/style/css";
import menus from "@root/utils/paths";

const { SubMenu } = Menu;

function AppMenu(props) {
  const [openKeys, setOpenKeys] = useState([]);
  const [selectKeys, setSelectKeys] = useState([]);

  const handleClick = (e) => {
    const { handleClickMenu } = props;
    const { key } = e;

    handleClickMenu(key);
    handleSelectKey(key);
  };

  const handleOpenKey = (location) => {
    const keyArray = location.match(/\/[a-z-]+/gi);
    setOpenKeys(keyArray.slice(0, -1));
  };

  const handleSelectKey = (key) => {
    setSelectKeys([key]);
  };

  const handleOpenChange = (key) => {
    setOpenKeys(key);
  };

  const renderMenuItem = (item) => {
    const { text, url, icon, children } = item;
    if (!children) {
      return (
        <Menu.Item key={url}>
          {icon && <Icon type={icon} />}
          <span>{text}</span>
        </Menu.Item>
      );
    }

    return (
      <SubMenu
        key={url}
        title={
          <span>
            {icon && <Icon type={icon} />}
            <span>{text}</span>
          </span>
        }
      >
        {children.map((item) => {
          return renderMenuItem(item);
        })}
      </SubMenu>
    );
  };

  useEffect(() => {
    handleOpenKey(props.location);
  }, [props]);

  return (
    <Menu
      onClick={handleClick}
      style={{ width: "100%" }}
      defaultSelectedKeys={["/partone"]}
      theme="dark"
      mode="inline"
      openKeys={openKeys}
      selectedKeys={selectKeys}
      onOpenChange={handleOpenChange}
    >
      {menus.map((item) => {
        return renderMenuItem(item);
      })}
    </Menu>
  );
}

export default AppMenu;

/* <Menu
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
        <Menu.Item key="/parttwo/two">弹窗动画</Menu.Item>
        <SubMenu key="sub2-3" title="3">
          <Menu.Item key="sub2-3-1">3-1</Menu.Item>
          <Menu.Item key="sub2-3-2">3-2</Menu.Item>
        </SubMenu>
      </SubMenu>

      <Menu.Item key="/partthree/one">第三部分</Menu.Item>
    </Menu> */
