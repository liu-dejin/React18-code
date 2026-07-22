import { useState } from "react"

// 1.组件外使用
const [value, setValue] = useState('')
function App () {
  // 只能在组件顶层调用 不能嵌套到if for 其他函数中
  if (Math.random() > 0.5) {
    const [value, setValue] = useState('')
  }
  return (
    <div className="App">

    </div>
  )
}

export default App
