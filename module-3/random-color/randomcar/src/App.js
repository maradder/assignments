import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
const invert = require('invert-color')


class App extends Component{
  state={
        new_color: 'Click for random colors',
        inverted_color: ''
        }

  handleClick = (e) => {
    e.preventDefault()
    let seconds = new Date().getTime()
    console.log("help")
    axios.get(`https://www.colr.org/json/color/random?timestamp=${seconds}`)
    .then(response => {
      const newColor = response.data.new_color
      const invertColor = invert(newColor)
      this.setState({ new_color: '#' + newColor,
                      inverted_color: invertColor})
    })
    console.log(this.state.new_color)
  }
  
  render() {
  return (
    <div style={{ backgroundColor:`${this.state.new_color}`,
                  height: "400px",
                  width: "400px",
                  display:"flex",
                  alignItems: "center",
                  justifyContent:"center",
                  margin: "32vh auto",
                  borderRadius: "16px",
                  userSelect: "none",
                  cursor: "pointer"
                  }} onClick={this.handleClick}>

      <p style={{ fontFamily: "sans-serif",
                  fontSize: "24px",
                  fontWeight: "500",
                  color: this.state.inverted_color,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",}}>

        {this.state.new_color}

      </p>
      </div>
      
  );

  }
}

export default App;
