import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const billStore = createSlice(
  {
    name: 'bill',
    // 状态数据
    initialState: {
      // 账单列表
      billList: []
    },
    reducers: {
      // 同步修改方法
      setBillList(state, action) {
        state.billList = action.payload.billList
      }
    }
  }
)
// 解构actionCreater函数
const { setBillList } = billStore.actions

// 编写异步方法
export const getBillList = () => {
  return async (dispatch) => {
    // 编写异步请求
    const res = await axios.get('http://localhost:8888/ka')
    // 触发同步reducer
    dispatch(setBillList(res.data))
  }
}
// 导出reducer
const reducer = billStore.reducer
export default reducer