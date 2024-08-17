import * as Icon from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import MenuConfig from "../../config";
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

export default function CommonAside() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <h3 className="app-name">通用后台管理项目</h3>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Sider>
  );
}
