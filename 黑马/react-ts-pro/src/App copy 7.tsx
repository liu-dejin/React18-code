import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <input ref={inputRef}></input>
    </>
  );
}

export default App;
