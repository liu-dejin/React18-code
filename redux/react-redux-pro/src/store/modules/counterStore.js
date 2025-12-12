import { createSlice } from '@reduxjs/toolkit'
const counterStore = createSlice({
  name: 'counter',
  // 初始化状态
  initialState: {
    count: 0
  },
  // 修改状态的方法 同步方法 支持直接修改
  reducers: {
    inscrement (state) {
      state.count++
    },
    descrement (state) {
      state.count--
    },
    addToNum (state, action) {
      state.count = action.payload
    }
  }
})

// 结构actionCreater函数
const { inscrement, descrement, addToNum } = counterStore.actions
// 获取reducer
const reducer = counterStore.reducer

// 按需导出actionCreater
export { inscrement, descrement, addToNum }
// 默认导出reducer
export default reducer