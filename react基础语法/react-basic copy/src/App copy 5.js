import { useState } from "react"

// 1.子传父 Son1->App->Son2
function Son1 ({ onGetName }) {
  const name = 'this is Son1'
  return (
    <div>
      <button onClick={() => {
        onGetName(name
        )
      }}>点击</button>
    </div>
  )
}
function Son2 ({ name }) {

  return (
    <div>
      this is Son2
      {name}
    </div>
  )
}
function App () {
  const [name, setName] = useState('')
  const getSon1Name = (name) => {

    setName(name)
  }
  return (
    <div className="App">
      <Son1 onGetName={getSon1Name}>
      </Son1>

      <Son2 name={name}>
      </Son2>
    </div>
  )
}

export default App
