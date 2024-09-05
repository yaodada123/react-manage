import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCollapsed: false, // 控制侧边栏展开与收缩
  tabsList: [ // 传递tag值
    {
      path: '/',
      name: 'home',
      label: '首页'
    }
  ],
  currentMenu: {}, // 记录选中的tag标签
}

export const collapsedSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    changeCollapsed: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
    selectMenuList: (state, { payload: val }) => { // 传值从tab到tag,兄弟组件传值方法
      if (val.name !== 'home') {
        state.currentMenu = val;
        const result = state.tabsList.findIndex(item => item.name === val.name)
        if (result === -1) {
          state.tabsList.push(val)
          console.log(state.tabsList, 'selectMenuList')
        }
      } else if(val.name === 'home' && state.tabsList.length === 1) {
        state.currentMenu = {}
      }
    },
    closeTab: (state, { payload: val }) => { // 关闭选中的tag标签
      let res = state.tabsList.findIndex(item => item.name === val.name)
      state.tabsList.splice(res, 1);
    },
    setCurrentMenu: (state, {payload: val}) => { // 设置当前选中的tag
      if (val.name === 'home') {
        state.currentMenu = {}
      } else {
        state.currentMenu = val
      }
    }
  }
})

export const {changeCollapsed, selectMenuList, closeTab, setCurrentMenu} = collapsedSlice.actions;
export default collapsedSlice.reducer;
