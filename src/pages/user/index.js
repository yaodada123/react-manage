import React, { useState, useEffect } from 'react';
import {Button, Form, Input, Table, Popconfirm} from 'antd';
import './user.css';
import { getUser } from '../../api';

export default function User() {
  const [listData, setListData] = useState({ // 用于获取搜索框数据以便后续进行数据过滤搜索
    name: ''
  });

  const [tableData, setTableData] = useState([]) // 需要展示在页面的用户数据

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age'
    },
    {
      title: '性别',
      dataIndex: 'sex',
      render: (val) => {
        return val ? '女' : '男'
      }
    },
    {
      title: '出生日期',
      dataIndex: 'birth'
    },
    {
      title: '地址',
      dataIndex: 'addr'
    },
    {
      title: '操作',
      render: (rowData) => {
        return (
          <div className="flex-box">
            <Button style={{marginRight: '5px'}} onClick={() => handleClick('edit', rowData)}>编辑</Button>
            <Popconfirm
              title="提示"
              description="此操作将删除该用户, 是否继续?"
              okText="确认"
              cancelText="取消"
              onConfirm={() => handleDelete(rowData)}
            >
              <Button type="primary" danger>删除</Button>
            </Popconfirm>
          </div>
        )
      }
    }
  ]

  const handleClick = () => {
    console.log('新增');
  }

  const handleSearch = (e) => {
    console.log(e, '这是获取的搜索框数据');
    setListData({
      name: e.keyword
    })
  }

  const handleDelete = () => {
    
  }

  const getUserData = (listData) => {
    getUser(listData).then(({data}) => {
      console.log(data.list, 'data');
      setTableData(data.list);
    })
  }

  useEffect(() => {
    getUserData(listData);
  }, [listData]);


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
      <Table
        columns={columns}
        dataSource={tableData}
        rowKey={"id"}
      />
    </div>
  )
}