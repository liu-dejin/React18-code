import { useState } from "react";

type User = {
  name: string;
  age: number;
};
function App() {
  const [user, setUser] = useState<User | null>(null);
  const changeUser = () => {
    setUser({
      name: "tom",
      age: 18,
    });
    setUser(null);
  };
  // 类型安全 使用可选链 类型守卫
  return <>this is App{user?.name}</>;
}

export default App;
