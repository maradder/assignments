import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

class UglyThingsContextProvider extends Component {
  state = {
    uglyThingsList: [],
    title: "",
    description: "",
    imgUrl: "",
    editUglyThingSaved: { title: "", description: "", imgUrl: "" },
  };

  render() {
    return (
      <Provider
        value={{
          uglyThingsList: this.state.uglyThingsList,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          handleSave: this.handleSave,
          title: this.state.title,
          description: this.state.description,
          imgUrl: this.state.imgUrl,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { UglyThingsContextProvider, Consumer as UglyThingsContextConsumer };
