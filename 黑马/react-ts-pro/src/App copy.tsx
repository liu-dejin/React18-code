import { useState } from "react";

// 初始值自动推断  有明确初始值
function App() {
  const [value, toggle] = useState(false);
  const [list, setList] = useState([1, 2, 3]);
  const changeValue = () => {
    toggle(true);
  };
  const changeList = () => {
    setList([1, 2, 3, 4, 5]);
  };
  return (
    <>
      {value}this is App{list}
    </>
  );
}

export default App;
