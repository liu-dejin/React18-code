// 定义文章类型
const articleType = 2
// 核心函数
const getArticleType= ()=>{
  if(articleType===0){
    return <div>无图模式</div>
  }else if(articleType===1){
    return <div>单图模式</div>
  }else{
    return <div>三图模式</div>
  }
}
function App() {
  return (
    <div className="App">   
    {/* 复杂的条件渲染 */}
    {getArticleType()}
    </div>
  );
}

export default App;
