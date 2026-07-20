// 用户相关状态管理
import { removeToken, request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken } from "@/utils";
const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      _setToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserinfo(state) {
      state.token = ''
      state.userInfo = {}
      removeToken()
    }
  }
})

// 解构actionCreator
const { setToken, setUserInfo, clearUserinfo } = userStore.actions

// 获取ruducer
const userReducer = userStore.reducer

// 异步方法
const login = (loginForm) => {
  return async (dispatch) => {
    // 发送异步
    const res = await request.post('/authorizations', loginForm)
    // 调用同步方法
    dispatch(setToken(res.data.token))
  }
}
// 获取个人用户信息异步方法
const getUserInfo = () => {
  return async (dispatch) => {
    // 发送异步
    const res = await request.get('/user/profile')
    // 调用同步方法
    dispatch(setUserInfo(res.data))
  }
}

export { login, getUserInfo, clearUserinfo }

export default userReducer
