import './App.css';
import React, { Component }from 'react';
import Badge from './BadgeList';

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
            badges: []
  }


  handleChange = e => {
    const {name, value} = e.target
    console.log(e.target)
    this.setState({[name]: value})
    }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(prevState => {
      return {
              ...prevState,
              firstName: "",
              lastName: "",
              email: "",
              birthplace: "",
              phone: "",
              favFood: "",
              comments: "",  
              badgeNumber: this.state.badgeNumber + 1,
              badges: [...prevState.badges,
                        { firstName: this.state.firstName,
                          lastName: this.state.lastName,
                          email: this.state.email,
                          birthplace: this.state.birthplace,
                          phone: this.state.phone,
                          favFood: this.state.favFood, 
                          comments:  this.state.comments,
                          badgeNumber:  this.state.badgeNumber}
                      ]
      }
          }
      
    )
  };

  inputInputs = [
    {
    NAME: "firstName",
    PLACEHOLDER: "First Name",
    TYPE: "text" ,
    VALUEAttr: this.state.firstName
    },
    {
    NAME: "lastName",
    PLACEHOLDER: "Last Name",
    TYPE: "text",
    VALUEAttr: this.state.lastName
    },
    {
    NAME: "email",
    PLACEHOLDER: "Email",
    TYPE: "email",
    VALUEAttr: this.state.email
    },
    { 
    NAME: "birthplace",
    PLACEHOLDER: "Birthplace",
    TYPE: "text",
    VALUEAttr: this.state.birthplace
    },
    {
    NAME: "phone",
    PLACEHOLDER: "Phone",
    TYPE: "tel",
    VALUEAttr: this.state.phone
    },
    {
    NAME: "favFood",
    PLACEHOLDER: "Favorite Food",
    TYPE: "text",
    VALUEAttr: this.state.faveFood
    }
]

  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit} style={{backgroundImage: 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)',}}>
        <h1>Welcome, let's get to know you</h1>
          <div className="inputStyle" > 
          {this.inputInputs.map(field => <input type={field.TYPE} placeholder={field.PLACEHOLDER} name={field.NAME} onChange={this.handleChange} minLength="3" inputvalue={field.VALUEAttr}/>)}
          <textarea type="textbox"
                    placeholder="Tell us about yourself"
                    name="comments"
                    onChange={this.handleChange}
                    minLength="3"
                    value={this.state.comments}
                    />
          </div>
          <br/>
          <button type="submit">Submit</button>
      </form>
        <br/>

        <div>
          {this.state.badges.map(badge =>
            <Badge  firstname={badge.firstName}
                        lastname={badge.lastName}
                        email={badge.email}
                        birthplace={badge.birthplace}
                        phone={badge.phone}
                        favfood={badge.favFood}
                        comments={badge.comments}
                        badgenumber={badge.badgeNumber}/>)}
        </div>
      </div>
    );
  }
}

export default App;
