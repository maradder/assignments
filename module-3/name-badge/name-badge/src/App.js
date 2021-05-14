import './App.css';
import React, { Component }from 'react';
import { Badge } from './BadgeList';

class App extends Component{
  state = {
            firstName: "",
            lastName: "",
            email: "",
            birthplace: "",
            phone: "",
            favFood: "",
            comments: "",
            badgeNumber: 0,
            backgroundCooooler: "",
            badges: []
  }

  handleChange = e => {
    const {name, value} = e.target
      this.setState( {[name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    let updatedBadgeNumber = parseInt(this.state.badgeNumber)
    updatedBadgeNumber = updatedBadgeNumber += 1
    this.badgeEvenOdd()
    let badgeObject = this.state.badges.slice()
    badgeObject.push(this.state)
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      birthplace: "",
      phone: "",
      favFood: "",
      comments: "",
      badgeNumber: updatedBadgeNumber,
      backgroundCooooler: "", 
      badges: badgeObject
    })
    console.log(this.state)
    }

    // badgeEvenOdd = () => {
    //   return (
    //   this.badgeNumber % 2 === 0 ? this.setState({backgroundCooooler: "#9B1B1B"}) : this.setState({backgroundCooooler: "#1A75BC"})
    //   )
    // }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className="inputStyle" key={this.state.badgeNumber}>
            <input type="text"       placeholder="First Name"             name="firstName"  onChange={this.handleChange} minLength="3" required value={this.state.firstName}/>
            <input type="text"       placeholder="Last Name"              name="lastName"   onChange={this.handleChange} minLength="3" required value={this.state.lastName}/>
            <input type="email"      placeholder="Email"                  name="email"      onChange={this.handleChange} minLength="3" required value={this.state.email}/>
            <input type="text"       placeholder="Place of Birth"         name="birthplace" onChange={this.handleChange} minLength="3" required value={this.state.birthplace}/>
            <input type="tel"        placeholder="Phone"                  name="phone"      onChange={this.handleChange} minLength="3"required value={this.state.phone}/>
            <input type="text"       placeholder="Favorite Food"          name="favFood"    onChange={this.handleChange} minLength="3" required value={this.state.favFood}/>
            <textarea type="textbox" placeholder="Tell us about yourself" name="comments"   onChange={this.handleChange} minLength="3" required value={this.state.comments}/>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
        <br/>
        <br/>

        <div>
          {this.state.badges.map(badge =>
            <Badge  firstName={badge.firstName}
                    lastName={badge.lastName}
                    email={badge.email}
                    birthplace={badge.birthplace}
                    phone={badge.phone}
                    favfood={badge.favFood}
                    comments={badge.comments}/>)}
        </div>
      </div>
    );
  }
}

export default App;
