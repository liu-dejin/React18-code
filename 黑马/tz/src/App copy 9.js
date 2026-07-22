import React, { Component, useState } from "react";


class Son extends Component{
  // 生命周期函数
  componentDidMount(){
    console.log("组件渲染完毕异步请求")
    // 开启一个定时器
 this.timer =    setInterval(() => {
      console.log("定时器运行中",new Date())
    }, 1000);

  }
  componentWillUnmount(){
    console.log("清除副作用")
    clearInterval(this.timer)
  }
  render(){
 return <div>i am Son</div>;
  }
}



const App = () => {
  const [show,setShow] = useState(true)
  return (
    <>
   {show&&<Son />}   
   <button onClick={()=>setShow(false)  }></button>
    </>
  );
};

export default App;