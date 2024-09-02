import * as Icon from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import MenuConfig from "../../config";
import {useNavigate} from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const iconToElement = (name) => React.createElement(Icon[name]);

const items = MenuConfig.map((item) => {
  const child = {
    key: item.path,
    icon: iconToElement(item.icon),
    label: item.label
  }
  if(item.children) {
    child.children = item.children.map(i => {
      return {
        key: i.path,
        label: i.label
      }
    })
  }
  return child;
})

export default function CommonAside({collapsed}) {
  // const [collapsed, setCollapsed] = useState(false);
  // console.log(collapsed, 'CommonAside');
  const navigate = useNavigate();
  const menuClick = (e) => {
    navigate(e.key)
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <h3 className="app-name">{ collapsed ? '后台':'通用后台管理项目' }</h3>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        onClick={menuClick}
      />
    </Sider>
  );
}
