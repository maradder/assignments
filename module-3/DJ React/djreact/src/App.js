import './App.css';
import React from 'react';
import Square from './Square';
import song1 from "./alex-productions-dance-party-jump.mp3"
import song2 from "./batchbug-cant-stop-me.mp3"
import song3 from "./flanzen-promises.mp3"
import song4 from "./leonell-cassio-a-magical-journey-through-space.mp3"
import song5 from "./liqwyd-sunny.mp3"
import song6 from "./pika5onic-over-hit.mp3"
import song7 from "./punch-deck-hollow-sun.mp3"
import song8 from "./vendredi-all-night-long.mp3"

// import { Button } from './styledComponents';

const songList = [
                  new Audio(song1),
                  new Audio(song2),
                  new Audio(song3),
                  new Audio(song4),
                  new Audio(song5),
                  new Audio(song6),
                  new Audio(song7),
                  new Audio(song8)
]

const [ song1Audio,
        song2Audio, 
        song3Audio, 
        song4Audio, 
        song5Audio, 
        song6Audio, 
        song7Audio, 
        song8Audio 
] = songList

class App extends React.Component {
  state = {
        colors: ["white", "black", "black", "white"],
        songPlaying: null
        };

  playSound = audioFile => {
    audioFile.play();
  }

  djSmall = () => {
    this.playSound(song1Audio)               
    this.setState(({colors}) =>  ({colors: colors.map(color => color !== 'white' ? 'white' : 'black')}))
  }

  partyDj = () => { 
    this.playSound(song2Audio)               
    this.setState(({colors}) => {
      return {colors: ['purple', 'purple', colors[2], colors[3]]} 
    })
  }
  
  proDjLeft = () => { 
    this.playSound(song3Audio)               
    this.setState(({colors}) => {
      return {colors: [colors[0], colors[1], 'blue', colors[3]]} 
    })
  }
  
  proDjRight = () => {
    this.playSound(song4Audio)               
    this.setState(({colors}) => {
      return {colors: [colors[0], colors[1], colors[2], 'blue']} 
    })
  }

  bigDjOne = () => {
    this.playSound(song5Audio)               
    this.setState(({colors}) => {
      return {colors: ["pink", colors[1], colors[2], colors[3]]}
    })
  }
  bigDjTwo = () => {
    this.playSound(song6Audio)               
    this.setState(({colors}) => {
      return {colors: [colors[0], "green", colors[2], colors[3]]}
    })
  }
  bigDjThree = () => {
    this.playSound(song7Audio)               
    this.setState(({colors}) => {
      return {colors: [colors[0], colors[1], "teal", colors[3]]}
    })
  }
  bigDjFour = () => {
    this.playSound(song8Audio)               
    this.setState(({colors}) => {
      return {colors: [colors[0], colors[1], colors[2], "orange"]}
    })
  }

  

  render() {
    return (
      <div className="squareContainer">
        {this.state.colors.map((color, index) => {
          return (
          <Square color={color} index={index}/>
          )
        } )}

      <button onClick={this.djSmall}>DJ Small</button>
      <button onClick={this.partyDj}>Party DJ</button>
      <button onClick={this.proDjLeft}>Left Blue</button>
      <button onClick={this.proDjRight}>Right Blue</button>
      <button onClick={this.bigDjOne}>Big DJ One</button>
      <button onClick={this.bigDjTwo}>Big DJ Two</button>
      <button onClick={this.bigDjThree}>Big DJ Three</button>
      <button onClick={this.bigDjFour}>Big DJ Four</button>
      </div>
    )
  };
}
export default App;
