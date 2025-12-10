// React获取dom
// 1.useRef生成ref对象  绑定到dom上

import { useRef } from "react";

// 2.dom可用时 ref.current获取dom dom渲染完毕才可以获取
function App() {
  const inputRef = useRef(null)
  const showDom = ()=>{
    console.dir(inputRef.current)
  }
  return (
    <div className="App">   
    <input  ref={inputRef} type="text" />
    <button onClick={showDom}>获取dom</button>
    </div>
  );
}

export default App;
