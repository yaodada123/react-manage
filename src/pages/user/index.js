import {Button, Form, Input} from 'antd';
import './user.css'

export default function User() {
  const handleClick = () => {
    console.log('新增');
  }

  const handleSearch = (e) => {
    console.log(e);
  }

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