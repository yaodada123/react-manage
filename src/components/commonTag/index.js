import React from "react";
import { Space, Tag } from "antd";
import "./index.css";

const CommonTag = () => {
  return (
    <Space className="common-tag" size={[0, 8]} wrap> 
      <Tag>首页</Tag>
      <Tag color="#55acee" closeIcon>用户管理</Tag>
    </Space>
  );
};

export default CommonTag
