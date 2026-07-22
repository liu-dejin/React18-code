import { useEffect, useState } from "react"

const Url = 'http://api-toutiao-web.itheima.net/mp/v1_0/channels'
function App () {
  useEffect(() => {
    async function getList () {
      const res = await fetch(Url)
      const jsonRes = await res.json()
      console.log(jsonRes)
      setList(jsonRes.data.channels)
    }
    getList()
  }, [])
  const [list, setList] = useState([])
  return (
    <div className="App">
      {
        list.map(item => (
          <div key={item.id}>{item.name}</div>
        ))
      }

    </div>
  )
}

export default App
