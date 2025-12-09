const list = [{
  id:1,
  name:'ldj',
  age:18
},{
  id:2,
  name:'ldj2',
  age:19
},{
  id:3,
  name:'ldj3',
  age:20
}]
function App() {
  return (
    <div className="App">   
    {/* 渲染列表 */}
    {/* map循环那个结构就return那个接口 需要加key */}
    <ul>
      {list.map(item=><li key={item.id}>{item.name}</li>)}
    </ul>
    </div>
  );
}

export default App;
