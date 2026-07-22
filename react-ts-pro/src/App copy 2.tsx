import { useState } from "react";

type User = {
  name: string;
  age: number;
};

function App() {
  // const [user, setUser] = useState<User>({
  //   name: "tom",
  //   age: 18,
  // });
  // const [user, setUser] = useState<User>(()=>{
  //   return {
  //     name: "tom",
  //     age: 18,
  //   }
  // });
  const [user, setUser] = useState<User>({
    name: "tom",
    age: 18,
  });
  // const changeUser = () => {
  //   setUser({
  //     name: "tom",
  //     age: 18,
  //   });
  // };
  const changeUser = () => {
    setUser(() => ({
      name: "tom",
      age: 18,
    }));
  };
  return <>this is App{user.name}</>;
}

export default App;
