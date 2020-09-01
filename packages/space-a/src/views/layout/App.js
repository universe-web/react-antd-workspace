import React, { useState } from "react";
import { Layout, Icon } from "antd";
import Menu from "./menu";
import styles from "./App.module.css";
import "antd/lib/layout/style/css";
import { withRouter } from "react-router-dom";
import Router from "./router";

const { Header, Sider, Content } = Layout;

function App(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleClickMenu = (key) => {
    const { history } = props;

    history.push({ pathname: key });
  };

  const { location } = props;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <Menu handleClickMenu={handleClickMenu} location={location.pathname} />
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Icon
            className={styles.trigger}
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={toggle}
          />
        </Header>
        <Content
          style={{
            position: "relative",
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Router location={location} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default withRouter(App);
