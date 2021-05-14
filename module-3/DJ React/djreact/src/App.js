import './App.css';
import React from "react";
import Square from './Square';
import song1 from "./music/alex-productions-dance-party-jump.mp3"
import song2 from "./music/batchbug-cant-stop-me.mp3"
import song3 from "./music/flanzen-promises.mp3"
import song4 from "./music/leonell-cassio-a-magical-journey-through-space.mp3"
import song5 from "./music/liqwyd-sunny.mp3"
import song6 from "./music/pika5onic-over-hit.mp3"
import song7 from "./music/punch-deck-hollow-sun.mp3"
import song8 from "./music/vendredi-all-night-long.mp3"

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
        songPlaying: false
        };



  playSound = (audio) => {
    audio.play();
  }

  pauseSound = (audio) => {
    audio.pause();
  }

  djSmall = () => {
    let otherAudio = songList.filter(song => song !== song1Audio)
    console.log(otherAudio)
    this.pauseSound(otherAudio)
    this.playSound(song1Audio)               

    this.setState(({colors, songPlaying}) => { 
      return {
        colors: colors.map(color => color !== 'white' ? 'white' : 'black'), 
        songPlaying: song1Audio
      }
    })
  }

  partyDj = () => {
    let otherAudio = songList.filter(song => song !== song2Audio)
    this.pauseSound(otherAudio) 
    this.playSound(song2Audio)               
    this.setState(({colors, songPlaying}) => {
      return {colors: ['purple', 'purple', colors[2], colors[3]],
      songPlaying: song2Audio
    }

    })
  }
  
  proDjLeft = () => { 
    let otherAudio = songList.filter(song => song !== song3Audio)
    this.pauseSound(otherAudio)
    this.playSound(song3Audio)               
    this.setState(({colors, songPlaying}) => {
      return {colors: [colors[0], colors[1], 'blue', colors[3]],
      songPlaying: song3Audio
    }

    })
  }
  
  proDjRight = () => {
    let otherAudio = songList.filter(song => song !== song4Audio)
    this.pauseSound(otherAudio)
    this.playSound(song4Audio)               
    this.setState(({colors, songPlaying}) => {
      return {colors: [colors[0], colors[1], colors[2], 'blue'],
      songPlaying: song4Audio
    }

    })
  }

  bigDjOne = () => {
    let otherAudio = songList.filter(song => song !== song5Audio)
    this.pauseSound(otherAudio)
    this.playSound(song5Audio)               
    this.setState(({colors, songPlaying}) => {
      return {colors: ["pink", colors[1], colors[2], colors[3]],
      songPlaying: song5Audio
    }

    })
  }
  bigDjTwo = () => {
    let otherAudio = songList.filter(song => song !== song6Audio)
    this.pauseSound(otherAudio)
    this.playSound(song6Audio)               
    this.setState(({colors, songPlaying}) => {
      return {colors: [colors[0], "green", colors[2], colors[3]],
      songPlaying: song6Audio
    }

    })
  }
  bigDjThree = () => {
    let otherAudio = songList.filter(song => song !== song7Audio)
    this.pauseSound(otherAudio)
    this.playSound(song7Audio)               
    this.setState(({colors, songPlaying}) => {
      return {colors: [colors[0], colors[1], "teal", colors[3]],
      songPlaying: song7Audio
    }

    })
  }
  bigDjFour = () => {
    let otherAudio = songList.filter(song => song !== song8Audio)
    this.pauseSound(otherAudio)
    this.playSound(song8Audio)               
    this.setState(({colors, songPlaying}) => {
      return {colors: [colors[0], colors[1], colors[2], "orange"],
      songPlaying: song8Audio
    }

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
