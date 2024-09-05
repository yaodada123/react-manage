import * as Icon from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import MenuConfig from "../../config";
import {useNavigate} from 'react-router-dom';
import {selectMenuList, setCurrentMenu} from '../../store/reducers/tab'
import { useDispatch,  useSelector} from "react-redux"
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
  const dispatch = useDispatch()
  const currentMenu = useSelector(state => state.tabMenu.currentMenu); // 用于侧边栏高亮变化


  // 添加数据到store
  const setTabsList = (val) => {
    dispatch(selectMenuList(val))
  }
  const menuClick = (e) => {
    let data
    MenuConfig.forEach((item) => {
      // 找到当前的数据
      if (item.path === e.keyPath[e.keyPath.length - 1]) {
        data = item
        // 如果是有二级菜单
        if (e.keyPath.length > 1) {
          data = item.children.find((child) => {
            return child.path === e.key
          })
        }
      }
    })
    // console.log(data, "这是获取的值");
    setTabsList({
      path: data.path,
      name: data.name,
      label: data.label
    })
    dispatch(setCurrentMenu({
      path: data.path,
      name: data.name,
      label: data.label
    }))
    navigate(e.key)
  }
  // console.log(currentMenu, "currentMenu");
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <h3 className="app-name">{ collapsed ? '后台':'通用后台管理项目' }</h3>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/home"]}
        selectedKeys={currentMenu.path || "/home"}
        items={items}
        onClick={menuClick}
      />
    </Sider>
  );
}
