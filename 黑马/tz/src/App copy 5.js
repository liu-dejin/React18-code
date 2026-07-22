import React, { memo, useCallback, useState } from "react";

// 子组件 - 使用 memo 包裹
const Input = memo(function Input({ onChange }) {
  console.log("子组件重新渲染了");
  return <input type="text" onChange={(e) => onChange(e.target.value)} />;
});

function App() {
  // 传给子组件的函数 - 使用 useCallback 避免不必要的重新渲染
  const changeHandler =useCallback((value) => {
    console.log(value);
  },[]) 

  // 触发父组件重新渲染的函数
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* 把函数作为 prop 传给子组件 */}
      <Input onChange={changeHandler} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default App;