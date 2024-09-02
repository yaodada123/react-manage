import { Col, Row, Card, Table } from "antd";
import "./home.css";
import { useEffect, useState } from "react";
import { getData } from "../../api";
const userImg = require("../../assets/images/user.png")
export default function Home() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getData().then(({data}) => {
      console.log(data);
      setTableData(data.data.tableData)
    })
  }, [])
  // 行头数据展示
  const columns = [
    {
      title: '课程',
      dataIndex: 'name'
    },
    {
      title: '今日购买',
      dataIndex: 'todayBuy'
    },
    {
      title: '本月购买',
      dataIndex: 'monthBuy'
    },
    {
      title: '总购买',
      dataIndex: 'totalBuy'
    }
  ]
  return (
    <Row className="home">
      <Col span={8}>
        <Card hoverable>
          <div className="user">
            <img src={userImg} />
            <div className="userinfo">
              <p className="name">Admin</p>
              <p className="access">超级管理员</p>
            </div>
          </div>
          <div className="login-info">
            <p>
              上次登录时间：<span>2021-7-19</span>
            </p>
            <p>
              上次登录地点：<span>武汉</span>
            </p>
          </div>
        </Card>
        <Card style={{ marginTop: "20px" }} hoverable>
          <Table
            rowKey={"name"}
            columns={columns}
            dataSource={tableData}
            pagination={false}
          />
        </Card>
      </Col>
    </Row>
  );
}
