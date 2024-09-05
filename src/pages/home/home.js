import { Col, Row, Card, Table } from "antd";
import * as Icon from "@ant-design/icons";
import "./home.css";
import React, { useEffect, useState } from "react";
import { getData } from "../../api";
import * as echarts from "echarts";
import MyECharts from "../../components/Echarts";
const userImg = require("../../assets/images/user.png");



const countData = [
  {
    name: "今日支付订单",
    value: 1234,
    icon: "CheckCircleOutlined",
    color: "#2ec7c9",
  },
  {
    name: "今日收藏订单",
    value: 3421,
    icon: "ClockCircleOutlined",
    color: "#ffb980",
  },
  {
    name: "今日未支付订单",
    value: 1234,
    icon: "CloseCircleOutlined",
    color: "#5ab1ef",
  },
  {
    name: "本月支付订单",
    value: 1234,
    icon: "CheckCircleOutlined",
    color: "#2ec7c9",
  },
  {
    name: "本月收藏订单",
    value: 3421,
    icon: "ClockCircleOutlined",
    color: "#ffb980",
  },
  {
    name: "本月未支付订单",
    value: 1234,
    icon: "CloseCircleOutlined",
    color: "#5ab1ef",
  },
];
const iconToElement = (name) => React.createElement(Icon[name]);
export default function Home() {
  const [tableData, setTableData] = useState([]);
  const [echartData, setEchartData] = useState({});
  useEffect(() => {
    getData().then(({ data }) => {
      console.log(data);
      const {tableData, orderData, userData, videoData} = data.data;
      setTableData(tableData);

      // 封装echarts数据
      const order = orderData;
      const xData = order.date; // 形成横坐标数据
      const series = [];
      const keyArray = Object.keys(order.data[0]);
      keyArray.forEach((key) => { // 得到各个品牌不同时间节点的数据列表
        series.push({
          data: order.data.map((item) => item[key]),
          type: 'line'
        })
      })


      setEchartData({
        order: {
          xData,
          series
        },
        user: {
          xData: userData.map(item => item.date),
          series: [
            {
              data: userData.map(item => item.new),
              type: 'bar'
            }, 
            {
              data: userData.map(item => item.active),
              type: 'bar'
            }
          ]
        },
        video: {
          series: [
            {
              type: 'pie',
              data: videoData
            }
          ]
        }

      })

    });

  }, []);
  // 行头数据展示
  const columns = [
    {
      title: "课程",
      dataIndex: "name",
    },
    {
      title: "今日购买",
      dataIndex: "todayBuy",
    },
    {
      title: "本月购买",
      dataIndex: "monthBuy",
    },
    {
      title: "总购买",
      dataIndex: "totalBuy",
    },
  ];
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
              上次登录时间：<span>2077-8-20</span>
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
      <Col style={{ marginTop: "20px" }} span={16}>
        <div className="num">
          {countData.map((item, index) => {
            return (
              <Card key={index}>
                <div className="icon-box" style={{ background: item.color }}>
                  {iconToElement(item.icon)}
                </div>
                <div className="detail">
                  <p className="num">￥{item.value}</p>
                  <p className="txt">{item.name}</p>
                </div>
              </Card>
            );
          })}
        </div>
        {/* <div id="main" style={{height: '300px'}}></div> */}
        {echartData.order && <MyECharts style={{height: '280px'}} chartData={echartData.order} />}
        <div className="graph">
          { echartData.user && <MyECharts chartData={echartData.user} style={{ width: '50%', height: '240px' }} /> }
          { echartData.video && <MyECharts chartData={echartData.video} isAxisChart={false} style={{ width: '50%', height: '260px' }} /> }
        </div>
      </Col>
    </Row>
  );
}
