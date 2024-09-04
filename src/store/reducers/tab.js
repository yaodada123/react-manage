import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCollapsed: false,
  tabsList: [
    {
      path: '/',
      name: 'home',
      label: '首页'
    }
  ],
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
      } else {
        state.currentMenu = null
      }
    },
  }
})

export const {changeCollapsed, selectMenuList} = collapsedSlice.actions;
export default collapsedSlice.reducer;
