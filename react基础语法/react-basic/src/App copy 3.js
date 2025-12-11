const isLogin = false
function App() {
  return (
    <div className="App">   
    {/* 条件渲染 */}
    {/* 逻辑与&& */}
    {isLogin && <span>登录成功</span>}
    {/* 三元运算符 */}
    {isLogin ? <span>登录成功</span> : <span>loading...</span>}
    </div>
  );
}

export default App;
