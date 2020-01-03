import React, { useState } from "react";
import { Layout, Icon } from "antd";
import Menu from "./menu";
import styles from "./App.module.css";
import "antd/lib/layout/style/css";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import Router from "./router";

const { Header, Sider, Content } = Layout;

function App(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleClickMenu = key => {
    const { history } = props;

    history.push({ pathname: key });
  };

  const { location } = props;
  // console.log(window.location.origin);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <Menu handleClickMenu={handleClickMenu} />
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
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 980
          }}
        >
          <Router location={location} />
        </Content>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    app: state.app
  };
};

export default withRouter(connect(mapStateToProps)(App));
