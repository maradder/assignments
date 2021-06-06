import React, { useState, useContext } from "react";
import { UglyContext } from "./context/UglyThingsContext";
import axios from "axios";
import {
  Button,
  Card,
  ImageContainer,
  Input,
  Label,
  ButtonContainer,
  DescriptionContainer,
} from "./StyledComponents";

// const EditContext = createContext()

const UglyThing = (props) => {
  const { getUglyThings, testFunc, setChangedUglyThing } = useContext(
    UglyContext
  );
  const [edit, setEdit] = useState(false);

  const [editFormState, setEditFormState] = useState({
    _id: props.item._id,
    title: props.item.title,
    description: props.item.description,
    imgUrl: props.item.imgUrl,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClickEdit = (e) => {
    setEdit(!edit);
  };

  const delUglyThing = (e) => {
    e.preventDefault();
    let editedId = e.target.getAttribute("data-id");
    let uglyCard = e.target.parentNode.parentNode;
    axios.delete(`https://api.vschool.io/marcusradder/thing/${editedId}`);
    uglyCard.parentNode.remove();
    getUglyThings();
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    let editedId = e.target.getAttribute("data-id");
    console.log(editedId);
    axios.put(`https://api.vschool.io/marcusradder/thing/${editedId}/`, {
      title: editFormState.title,
      description: editFormState.description,
      imgUrl: editFormState.imgUrl,
    });
    setChangedUglyThing({
      _id: editedId,
      title: editFormState.title,
      description: editFormState.description,
      imgUrl: editFormState.imgUrl,
    });
    handleClickEdit();
    getUglyThings();

    testFunc();
  };

  const norm = (
    <Card>
      <DescriptionContainer>
        <h1>{editFormState.title}</h1>
        <p>{editFormState.description}</p>
        <p>{editFormState._id}</p>
      </DescriptionContainer>
      <ImageContainer src={`${editFormState.imgUrl}`} alt="Ugly" />
      <ButtonContainer>
        <Button style={{ justifySelf: "flex-end" }} onClick={handleClickEdit}>
          Edit
        </Button>
        <Button data-id={props.item._id} type="button" onClick={delUglyThing}>
          Delete
        </Button>
      </ButtonContainer>
    </Card>
  );

  const editing = (
    <Card>
      <form
        data-id={props.item._id}
        data-title={props.item.title}
        data-description={props.item.description}
        data-imgurl={props.item.imgUrl}
        style={{
          display: "flex",
          width: "80%",
          flexDirection: "column",
          marginTop: "48px",
        }}
        onSubmit={handleSaveEdit}
      >
        <Label htmlFor="title">
          Title
          <Input
            type="text"
            placeholder={props.item.title}
            name="title"
            onChange={handleChange}
            defaultValue={props.item.title}
          />
        </Label>
        <Label htmlFor="description">
          Description
          <Input
            type="text"
            placeholder={props.item.description}
            name="description"
            onChange={handleChange}
            defaultValue={props.item.description}
          />
        </Label>
        <Label htmlFor="imgUrl">
          Image URL
          <Input
            type="text"
            placeholder={props.item.imgUrl}
            name="imgUrl"
            onChange={handleChange}
            defaultValue={props.item.imgUrl}
          />
        </Label>
        <img
          style={{ maxHeight: "250px", margin: "0 auto", borderRadius: "8px" }}
          src={`${editFormState.imgUrl}`}
          alt="Ugly"
        />
        <Button type="submit">Save Changes</Button>
      </form>
    </Card>
  );
  return <div>{edit === false ? norm : editing}</div>;
};

export default UglyThing;

// style={{maxHeight: "450px", minHeight: "450px", maxWidth: "300px", minWidth: "300px", margin: "100px auto", backgroundColor: "yellow", borderRadius:"8px",border: "1px solid #000000", display: "flex", flexDirection: 'column', alignItems: 'center'}}

// style={{maxHeight: "450px", minHeight: "450px", maxWidth: "300px", minWidth: "300px", margin: "100px auto", borderRadius:"8px",border: "1px solid #000000", display: "flex", flexDirection: 'column', alignItems: 'center'}}

// style={{maxHeight: "450px", minHeight: "450px", maxWidth: "300px", minWidth: "300px", margin: "auto"}}

// style={{maxHeight:"250px", margin: "0 auto", borderRadius:"8px"}}
