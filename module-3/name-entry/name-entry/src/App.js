import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    currentName: '',
    names: []
  }


  handleChange = e => {
    this.setState({currentName: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(prevState => ({names: [...prevState.names, prevState.currentName]}))}

  render() {
    const allNames = this.state.names.map(name => {
      return (
        <li>
            {name}
        </li>
      )
    })
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
        <div className="inputWrapper">
          <input type="text" placeholder="Name" value={this.state.currentName} onChange={this.handleChange} />
          <h1>{this.state.currentName}</h1>
        </div>
        <button>Submit</button>
      </form>
      <ol style={{listStyle: "decimal outside none"}}>{allNames}</ol>
    </div>
  )}
}

export default App;
