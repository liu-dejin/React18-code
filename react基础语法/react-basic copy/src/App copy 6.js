import { createContext, useContext } from "react"
// 1.创建上下文对象
const Msgcontext = createContext()
function A () {

  return (
    <div>
      this is a
      <B>
      </B>
    </div>
  )
}
function B () {
  // 3，底层组件使用useContext获取数据
  const msg = useContext(Msgcontext)
  return (
    < div >
      {msg}
      this is b
    </ div >
  )
}
function App () {
  const msg = 'this is App '
  return (

    // 2.高阶组件provider提供数据
    <Msgcontext.Provider value={msg}>
      <div className="App">
        <A>
        </A>
      </div>
    </Msgcontext.Provider>
  )
}

export default App
