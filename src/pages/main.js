import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import CommonAside from "../components/commonAside/index"
import ConmmonHeader from "../components/commonHeader";
import CommonTag from "../components/commonTag/index";
import { useSelector, useDispatch } from 'react-redux';

const { Header, Sider, Content } = Layout;

export default function Main() {
  // const [collapsed, setCollapsed] = useState(false);
  const collapsed = useSelector((state) => state.tabMenu.isCollapsed)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div >
      <Layout className="main-container">
        <CommonAside collapsed={collapsed} />
        <Layout>
          <ConmmonHeader collapsed={collapsed} />
          <CommonTag />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* Content */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      
    </div>
  );
}
