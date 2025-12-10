import { useState } from "react"

// 核心: 在子组件调用父组件的函数并传参
function Son ({ onGetMessage }) {
  const sonMessage = 'this is son message'
  return (
    <div >
      <button onClick={() => onGetMessage(sonMessage)}>点击获取子组件消息</button>
    </div>
  )
}
function App () {
  const [message, setMessage] = useState('')
  const getMessage = (msg) => {
    setMessage(msg)
  }
  return (
    <div className="App">
      <Son onGetMessage={getMessage} />
      {message}
    </div>
  )
}

export default App
