import { useDispatch, useSelector } from "react-redux"
// 导入counterStore
import { addToNum, descrement, inscrement } from "./store/modules/counterStore"
import { fetchChannelList } from "./store/modules/channelStore"
import { useEffect } from "react"

function App () {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const { channelList } = useSelector(state => state.channel)
  // useEffect触发异步请求
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])
  return (
    <div className="App">
      <button onClick={() => dispatch(descrement())}>-</button>
      {count}
      <button onClick={() => dispatch(inscrement())}>+</button>
      <button onClick={() => dispatch(addToNum(100))}>+100</button>
      <ul>
        {channelList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default App
