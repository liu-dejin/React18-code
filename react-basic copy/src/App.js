// 封装自定义hook
// 1.声明一个use开头的函数 2.函数体内封装可复用的逻辑
// 3.return需要的状态和回调 4.在哪个组件需要使用 就执行函数解构状态和回调
// 自定义hook 封装状态切换
import { useState } from "react"
function useTaggle () {
  // 可复用的逻辑代码
  const [value, setValue] = useState(true)
  const taggle = () => {
    setValue(!value)
  }
  // 那些状态和回调函数在其他组件使用就要return出去
  return {
    value,
    taggle
  }
}
function App () {
  const { value, taggle } = useTaggle()
  return (
    <div >
      {value && <div>this is div</div>}
      <button onClick={taggle}>taggle</button>
    </div>

  )
}

export default App