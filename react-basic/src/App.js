import './index.css'
const style = {color:"pink",fontSize:"20px"}
function App() {
  return (
    <div className="App">  
     {/*行内样式控制  */}
     <span style={style}>this is span</span>
     {/* class类名控制 */}
     <span className="foo">this is span</span>
    </div>
  );
}

export default App;
