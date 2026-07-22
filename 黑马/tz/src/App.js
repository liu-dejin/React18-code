import { useEffect } from "react"
import { create } from "zustand"
const URL = 'http://geek.itheima.net/v1_0/channels'
// 创建store
// 函数参数返回应该对象 对象里面是数据和方法
// set修改数据 必须使用set
// set(函数 需要用到老数据)
// 不需要老数据 参数直接是对象  set({count:100})
const useCount = ((set) => {
  return {
    // 状态数据
    count: 0,
    // 修改数据方法
    inc: () => {
      set((state) => ({ count: state.count + 1 }))
    },

  }
})
const channelStore = (set) => {
  return {
    channelList: [],
    getChannel: async () => {
      const res = await fetch(URL)
      const jsonRes = await res.json()
      console.log(jsonRes)
      set({
        channelList: jsonRes.data.channels
      })
    }
  }
}

const useStore = create((...a)=>{
  return{
    ...useCount(...a),
  ...channelStore(...a)
  }
})

function App () {
  const { count, inc, getChannel, channelList } = useStore()
  useEffect(() => {
    getChannel()
  }, [getChannel])
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={inc}>Increment</button>
      <ul>
        {
          channelList.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </>
  )
}

export default App