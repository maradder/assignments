import React, { Component } from "react";
import axios from "axios";
const { Provider, Consumer } = React.createContext();
class ThingProvider extends Component {
  state = {
    things: [],
    title: "",
    description: "",
    imgUrl: "",
  };
  componentDidMount() {
    axios.get("https://api.vschool.io/jamescaleca/thing").then((res) => {
      const things = res.data;
      this.setState({ things });
    });
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let newThing = {
      title: this.state.title,
      description: this.state.description,
      imgUrl: this.state.imgUrl,
    };
    console.log(newThing);
    axios
      .post("https://api.vschool.io/jamescaleca/thing", newThing)
      .then((response) => console.log(response.data));
  };
  handleDelete = (id) => {
    axios
      .delete(`https://api.vschool.io/jamescaleca/thing/${id}`)
      .then((response) => console.log(response.data));
  };
  render() {
    const { things } = this.state;
    return (
      <Provider
        value={{
          things,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          handleDelete: this.handleDelete,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { ThingProvider, Consumer as ThingConsumer };
