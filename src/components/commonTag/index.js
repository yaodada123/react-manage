import React from "react";
import { Space, Tag } from "antd";
import "./index.css";
import { useSelector, useDispatch } from 'react-redux'
import { closeTab, setCurrentMenu } from "../../store/reducers/tab";
import { useLocation, useNavigate } from 'react-router-dom';


const CommonTag = () => {
  const tabsList = useSelector(state => state.tabMenu.tabsList); // 拿到传递的tag值
  const currentMenu = useSelector(state => state.tabMenu.currentMenu); // 传递选中的tag值
  // console.log(tabsList, "这是兄弟组件传值过来的tablist");
  // console.log(currentMenu, "这是currentMenu");
  const dispatch = useDispatch();
  const action = useLocation();
  const navigate = useNavigate();
  const handleClose = (item, index) => {
    let length = tabsList.length - 1;
    dispatch(closeTab(item))
    if(index === length) { // 若关闭的标签是最后一个标签
      const curData = tabsList[index - 1];
      dispatch(setCurrentMenu(curData));
      navigate(curData.path);
    } else {
      // 如果tags至少存在一个数据，则选中后一个tag
      if (tabsList.length > 1) {
          // 下一个tag
          const nextData = tabsList[index + 1]
          dispatch(setCurrentMenu(nextData))
          navigate(nextData.path)
      }
  }
  }
  const handleChange = (item) => {
    dispatch(setCurrentMenu(item));
    navigate(item.path);
  }
  const setTag = (flag, item, index) => { // flag用于判断是否为选中的tag
    return (
      flag ?
      <Tag color="#55acee" closeIcon onClose={() => handleClose(item, index)} key={item.name}>{item.label}</Tag> :
      <Tag key={item.name} onClick={() => handleChange(item, index)}>{item.label}</Tag>
    )
  }
  return (
    <Space className="common-tag" size={[0, 8]} wrap> 
      {
        currentMenu.name && tabsList.map((item, index) => {
          return setTag(currentMenu.path === item.path, item, index)
        })
      }
    </Space>
  );
};

export default CommonTag
