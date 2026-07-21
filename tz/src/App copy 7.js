import React, { forwardRef, useRef } from "react";

// 子组件
// function Son() {
//   return <input type="text" />;
// }
const Son = ({ref})=>{
   return <input type="text" ref={ref} />;
}

// 父组件
function App() {
const inputRef =  useRef()
const showRef = ()=>{
  console.log(inputRef)
  inputRef.current.focus()
}

  return (
    <>
      {/* 需要将 ref 传递给子组件的 input */}
      <Son ref={inputRef} />
      <button onClick={showRef}>聚焦</button>
    </>
  );
}

export default App;