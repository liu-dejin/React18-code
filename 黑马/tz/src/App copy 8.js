import { Component } from "react"

class Counter extends Component {
  state = {
    count: 0
  }
  setCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return <button onClick={this.setCount}>{this.state.count}</button>
  }
}

function App () {
  return (
    <><Counter /></>
  )
}

export default App