import { useState } from "react";

// useState 实现计数器
function App() {
  // 1.调用useState添加一个状态变量
  // count 状态变量 setCount 修改count的方法
  const [count, setCount] = useState(0);
  // let [count, setCount] = useState(0);
  // 2.点击事件回调
  const handleClick =()=>{
    // 1.传入新值修改count 2. 组件重新渲染
    // 状态不可变
    // count++
    // console.log(count)
    setCount(count+1)
  }

  // 修改对象状态
  const [form,setForm] = useState({
    username:'admin',
    password:'admin'
  })
  const changeForm = () =>{
    // 错误写法❌
    // form.username = 'root'

    setForm({
      ...form,
      username:'root'
    })
  }
  return (
    
    <div className="App">   
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>提交{form.username}</button>
    </div>
  );
}

export default App;
