import React, { Component } from 'react';


class BadgeForm extends Component {
        inputInputs = [
        {
        NAME: "firstName",
        PLACEHOLDER: "First Name",
        TYPE: "text" ,
        VALUE: this.props.currentstate.firstName
        },
        {
        NAME: "lastName",
        PLACEHOLDER: "Last Name",
        TYPE: "text",
        VALUE: this.props.currentstate.lastName
        },
        {
        NAME: "email",
        PLACEHOLDER: "Email",
        TYPE: "email",
        VALUE: this.props.currentstate.email
        },
        { 
        NAME: "birthplace",
        PLACEHOLDER: "Birthplace",
        TYPE: "text",
        VALUE: this.props.currentstate.birthplace
        },
        {
        NAME: "phone",
        PLACEHOLDER: "Phone",
        TYPE: "tel",
        VALUE: this.props.currentstate.phone
        },
        {
        NAME: "favFood",
        PLACEHOLDER: "Favorite Food",
        TYPE: "text",
        VALUE: this.props.currentstate.favFood
        }
    ]
    render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <div className="inputStyle" > 
        {this.inputInputs.map(field => <input type={field.TYPE}     placeholder={field.PLACEHOLDER}  name={field.NAME}  onChange={this.handleChange}   minLength="3"  value={field.VALUE}/>)}
        <textarea type="textbox"  placeholder="Tell us about yourself"   name="comments"   onChange={this.handleChange}   minLength="3"  value={this.props.currentstate.comments}/>
        </div>
        <br/>
        <button type="submit">Submit</button>
    </form>
    )}
}

export default BadgeForm