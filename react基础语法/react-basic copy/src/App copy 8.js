import { useEffect, useState } from "react"

function App () {
  // 1.无依赖性 初始+状态更新
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log('副作用函数执行了')
  // })
  // 2.[]只会在初始化执行
  // useEffect(() => {
  //   console.log('副作用函数执行了')
  // }, [])
  // 3.[依赖性] 初始化+依赖性调用时触发
  useEffect(() => {
    console.log('count变化了')
  }, [count])
  return (
    <div className="App" >
      <button onClick={() => setCount(count + 1)}>点击+1</button>
      {count}</div>

  )
}

export default App
