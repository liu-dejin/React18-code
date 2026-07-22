// 项目根组件
// APP->index.js->public/index.html(root)
const count = 100
const getName = ()=> 'ldj'
function App() {
  return (
    <div className="App">
      this is App
      {/* 使用引号传递字符串 */}
      {'this is Message'}
      {/* JS变量 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().toString()}
      {/* js对象 */}
      <div style={{color:'red'}}>this is div</div>
    </div>
  );
}

export default App;
