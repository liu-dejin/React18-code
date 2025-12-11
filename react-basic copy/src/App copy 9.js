import { useEffect, useState } from "react"

function Son () {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('定时器执行中')
    }, 1000)
    return () => {
      // 清除副作用
      clearInterval(timer)
    }
  }, [])
  return <div>this is Son</div>
}
function App () {
  const [show, setShow] = useState(true)
  return (

    <div className="App" onClick={() => {
      setShow(false)
    }}>
      {show && <Son></Son>}
    </div >
  )
}

export default App
