// C1 ass API父子通信
import React, { Component } from "react";
// 1. 父传子 直接标签绑定
// 2. 子传父 子组件绑定父组件的函数 子组件调用传参 
// 子组件
class Son extends Component {
  
  render() {
    // this.props.msg
    return <div >我是子组件{this.props.msg}
    <button onClick={() => this.props.onGetMsg("子组件消息")}>传递消息给父组件</button>
    </div>;
  }
}

// 父组件
class Parent extends Component {
  state = {
    msg: "我是父组件"
  }
  getMsg = (msg) => {
    console.log(msg)
  }
  render() {
    return (
      <div>
        我是父组件<Son msg={this.state.msg} onGetMsg = {this.getMsg}/>
      </div>
    );
  }
}

function App() {
  return (
    <>
      <Parent />
    </>
  );
}

export default App;