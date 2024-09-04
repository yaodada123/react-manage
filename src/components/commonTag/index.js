import React from "react";
import { Space, Tag } from "antd";
import "./index.css";
import { useSelector, useDispatch } from 'react-redux'


const CommonTag = () => {
  const tabsList = useSelector(state => state.tabMenu.tabsList);
  console.log(tabsList, "这是兄弟组件传值过来的tablist");
  const handleClose = () => {
  }
  return (
    <Space className="common-tag" size={[0, 8]} wrap> 
      <Tag>首页</Tag>
      <Tag color="#55acee" closeIcon onClose={() => handleClose()}>用户管理</Tag>
    </Space>
  );
};

export default CommonTag
