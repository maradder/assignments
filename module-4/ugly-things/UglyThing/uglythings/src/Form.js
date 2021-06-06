import React, { useContext, useState } from "react";
import axios from "axios";
import { UglyContext } from "./context/UglyThingsContext";
import {
  Button,
  ButtonContainer,
  Card,
  Input,
  Label,
} from "./StyledComponents";

const Form = () => {
  const { setNewUglyThing, getUglyThings } = useContext(UglyContext);
  const [formState, setFormState] = useState({
    _id: "",
    title: "",
    description: "",
    imgUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title: formState.title,
      description: formState.description,
      imgUrl: formState.imgUrl,
    };
    setNewUglyThing({
      title: `${formState.title}`,
      description: `${formState.description}`,
      imgUrl: `${formState.imgUrl}`,
    });

    axios.post("https://api.vschool.io/marcusradder/thing/", newItem);

    setInterval(getUglyThings, 1000);
  };
  return (
    <Card>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          width: "80%",
          flexDirection: "column",
          margin: "48px auto 24px auto",
        }}
      >
        <Label htmlFor="title">
          Title
          <Input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
          ></Input>
        </Label>
        <Label htmlFor="description">
          Description
          <Input
            type="text"
            name="description"
            value={formState.description}
            onChange={handleChange}
          ></Input>
        </Label>
        <Label htmlFor="imgUrl">
          Image URL
          <Input
            type="text"
            name="imgUrl"
            value={formState.imgUrl}
            onChange={handleChange}
          ></Input>
        </Label>
        <ButtonContainer>
          <Button type="submit">Submit</Button>
        </ButtonContainer>
      </form>
    </Card>
  );
};

export default Form;
