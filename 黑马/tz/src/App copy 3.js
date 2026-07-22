import { memo, useState } from "react"

// 只有props变化才会重新渲染

const MemoSon = memo(function Son() {
  console.log("子组件重复渲染")
  return <div>this is Son</div>
})



function App() {
 const [count,setCount] = useState(0)
  return <div>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    <MemoSon /></div>
}

export default App