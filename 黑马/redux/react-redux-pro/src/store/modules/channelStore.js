import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: []
  },
  reducers: {
    setChannels (state, action) {
      state.channelList = action.payload
    }
  }
})

const { setChannels } = channelStore.actions
// 异步处理
export const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://api-toutiao-web.itheima.net/mp/v1_0/channels')
    dispatch(setChannels(res.data.data.channels))
  }
}

const reducer = channelStore.reducer
export default reducer