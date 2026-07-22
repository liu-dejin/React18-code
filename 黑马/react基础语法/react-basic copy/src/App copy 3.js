// 父子通信
// 1.父组件传递 子组件身上绑定属性
// 2.子组件接收 props的参数 props包含了父组件传递的全部数据
// {name:父组件的数据}
function Son (props) {
  console.log(props)
  // props.name = 'this is 111' 不能直接修改
  return (
    <div>
      this is Son {props.name}
      ,jsx:{props.child}
    </div>
  )
}
function App () {
  const name = 'this is App '
  return (
    <div className="App">
      <Son name={name} age={18} isTrue={true} list={[1, 2, 3]} obj={{ 1: 'a' }} cb={() => {
        console.log(111)
      }} child={<span>this is span</span>} />
    </div>
  )
}

export default App
