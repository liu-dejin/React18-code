// 1.定义组件
const Button = () => {
  // 业务逻辑 组件逻辑
  return <button>click me!</button>;
}
function App() {
  return (
    <div className="App">
      {/* 2.使用组件 */}
      {/* 自闭和 */}
      <Button />
      {/* 成对标签 */}
      <Button></Button>
    </div>
  );
}

export default App;
