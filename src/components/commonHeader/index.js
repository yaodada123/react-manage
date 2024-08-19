import React, { useState } from "react";

import { Button, Layout, Menu, theme, Dropdown } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "./index.css";
import { useSelector, useDispatch } from 'react-redux'
import {changeCollapsed} from "../../store/reducers/tab";
const { Header, Sider, Content } = Layout;
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        个人信息
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        详情
      </a>
    ),
  },
];
const ConmmonHeader = ({collapsed}) => {
  // const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const dispatch = useDispatch()
  const setCollapsed = () => {
    console.log(collapsed);
    dispatch(changeCollapsed())
  }
  return (
    <Header
      style={{
        padding: "20px",
        // background: colorBgContainer,
      }}
      className="header"
      theme="dark"
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => {setCollapsed()}}
        style={{
          fontSize: "16px",
          width: 64,
          height: 36,
          backgroundColor: 'white'
        }}
      />
      <Dropdown
        menu={{
          items,
        }}
      >
        <Avatar
          size={{
            xs: 24,
          }}
          src={require("../../assets/images/user.png")}
        />
      </Dropdown>
    </Header>
  );
};

export default ConmmonHeader;
