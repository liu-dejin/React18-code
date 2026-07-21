import { useMemo, useState } from 'react'
// 消耗非常大计算 使用useMemo
function factorialOf(n) {
  console.log('斐波那契函数执行了')
  return n <= 0 ? 1 : n * factorialOf(n - 1)
}




function App() {
  const [count, setCount] = useState(0)
  // 计算斐波那契之和
  // const sumByCount = factorialOf(count)

  const [num, setNum] = useState(0)

const res =   useMemo(()=>{
    factorialOf(num)
  }, [num])
  // 组件重新渲染
  console.log('组件重新渲染')
  return (
    <>
      {res}
      <button onClick={() => setCount(count + 1)}>+count:{count}</button>
      <button onClick={() => setNum(num + 1)}>+num:{num}</button>
    </>
  )
}

export default App