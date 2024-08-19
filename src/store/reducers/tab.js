import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCollapsed: false,
}

export const collapsedSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    changeCollapsed: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
  }
})

export const {changeCollapsed} = collapsedSlice.actions;
export default collapsedSlice.reducer;
