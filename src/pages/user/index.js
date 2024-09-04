import React, { useState, useEffect } from 'react';
import {Button, Form, Input} from 'antd';
import './user.css';
import { getUser } from '../../api';

export default function User() {
  const handleClick = () => {
    console.log('新增');
  }

  const handleSearch = (e) => {
    console.log(e);
  }

  const getUserData = () => {
    getUser().then((res) => {
      console.log(res, '这是获取的res的数据');
    })
  }

  useEffect(() => {
    getUserData()
  }, []);


  return (
    <div className="user">
      <div className="flex-box space-between">
        <Button type="primary" onClick={() => handleClick('add')}>+新增</Button>
        <Form
          // form={searchForm}
          layout="inline"
          onFinish={handleSearch}
        >
          <Form.Item
            name="keyword"
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">搜索</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}