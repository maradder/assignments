import React, {Component} from 'react'
import Die from './Die'

class DiceBox extends Component {
    state = {
                    dice1: 0,
                    dice2: 0,
                    dice3: 0,
                    dice4: 0,
                    dice5: 0,
    }

    randNum = () => {
        return (
            Math.floor(Math.random() *6).toString()
        )
    }

    rollDice = () => {
        this.setState({ dice1: this.randNum(),
                        dice2: this.randNum(),
                        dice3: this.randNum(),
                        dice4: this.randNum(),
                        dice5: this.randNum()
        })
    }

    DiceBoxStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '250px'
    }

    DiceStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    render() {
        return (
            <div style={ this.DiceBoxStyle}>
                <div className="">
                    <Die style={this.DiceStyle} value={this.state.dice1}/>
                    <Die style={this.DiceStyle} value={this.state.dice2}/>
                    <Die style={this.DiceStyle} value={this.state.dice3}/>
                    <Die style={this.DiceStyle} value={this.state.dice4}/>
                    <Die style={this.DiceStyle} value={this.state.dice5}/>
                </div>
                <button onClick={this.rollDice} >Roll 'Em</button>
            </div>
        )
    }
}

export default DiceBox;
