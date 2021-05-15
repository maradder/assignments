import './App.css';
import React, { Component } from 'react';
import axios from 'axios'
import Target from './Target';

const AppStyle = {
  display: 'grid',
  gridTemplateColumns: '60% 40%',
  gridTemplateRows: 'auto',
  padding: '100px'
}

const OverlayTop = {
  position: 'fixed',
  top: "0px",
  right: "0px",
  minHeight: "50vh",
  minWidth: "50vw",
  // gridColumn: "2 / 3",
  background: "linear-gradient(183deg, #000000, 35%, #00000000)",
  zIndex: 3
}

const OverlayBottom = {
  position: 'fixed',
  bottom: "0px",
  right: "0px",
  minHeight: "50vh",
  minWidth: "50vw",
  // gridColumn: "2 / 3",
  background: "linear-gradient(183deg, #00000000, 65%, #000000)",
  zIndex: 3
}

class App extends Component {
  state = {
    targetDeck: []
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
    .then(response => {
      const targets = response.data
      this.setState({ targetDeck: targets })
    })
  }
  
  render() {
    return (
      <div style={AppStyle}>
        <div style={OverlayTop}/>
          { this.state.targetDeck.map(person => <Target targetpic={person.image} name={person.name} />)}
        <div style={OverlayBottom}/>
      </div>
    );
  }
}

export default App;
