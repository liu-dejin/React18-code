import { memo, useMemo, useState } from "react"

// 简单类型=> 只有props变化才会重新渲染
// 复杂类型=> 只有props变化才会重新渲染 比较新值和旧值的引用父组件函数重新执行 实际上已经形成了新的引用
// 保证引用稳定  useMemo 组件缓存过程中缓存一个值


const MemoSon = memo(function Son({count,list}) {
  console.log("子组件重复渲染")
  return <div>this is Son{count}{list}</div>
})



function App() {
 const [count,setCount] = useState(0)
 const num = 100
 const list = useMemo(()=>{
  return [1,2,3]
 },[])
  return <div>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    <MemoSon count={num} list={list} /></div>
}

export default App