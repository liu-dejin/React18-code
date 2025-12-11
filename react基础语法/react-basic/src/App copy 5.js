// 普通方式
// const onClick = ()=>{
//   console.log('被点击了')
// }

// 事件对象
// const onClick = (e)=>{
//   console.log('被点击了',e)
// }

// 自定义参数
// const onClick = (name) => {
//   console.log(name);
// };

// 自定义参数+事件对象e
const onClick = (name,e)=>{
  console.log(name,e)
}
function App() {
  return (
    <div className="App">
      {/* <button onClick={()=>onClick('张三')}>click me</button> */}
      <button onClick={(e)=>onClick('张三',e)}>click me</button>
    </div>
  );
}

export default App;
