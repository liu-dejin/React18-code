// 1.声明一个react状态
// 2.核心绑定流程
// 1.value绑定状态

import { useState } from "react"

// 2.onChange e获取到数据反向修改
function App () {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
    </div>
  )
}

export default App
