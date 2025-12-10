
function Son (props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
function App () {
  const name = 'this is App '
  return (
    <div className="App">
      <Son>
        <span>this is span</span>
      </Son>
    </div>
  )
}

export default App
