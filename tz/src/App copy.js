import { useReducer } from "react"

//1.定义reducer函数根据不同的action返回不同的状态
const reducer = (state,action)=>{
  switch(action.type){
    case 'add':
      return state+1
    case 'sub':
      return state-1
    case 'set':
      return action.payload
    default:
      return state
  }
}
//2.组件中调用useReducer(reducer,0) =>[state,dispatch]
//3.组件中调用dispatch({type:'add'})  通知reducer产生新状态 使用新状态更新ui
function App() {
  const [state, dispatch] = useReducer(reducer,0)
  return <div>this is App{state}
  <button onClick={() => dispatch({type:'add'})}>Add</button>
  <button onClick={() => dispatch({type:'sub'})}>Sub</button>
  <button onClick={() => dispatch({type:'set',payload:100})}>Set</button>
  </div>
}

export default App