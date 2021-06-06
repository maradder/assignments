import React, { useState, createContext } from "react";
import axios from "axios";

const UglyContext = createContext();

const UglyContextProvider = (props) => {
  const [setNewUglyThing] = useState({
    title: "",
    description: "",
    imgUrl: "",
  });

  const [changedUglyThing, setChangedUglyThing] = useState({
    _id: "",
    title: "",
    description: "",
    imgUrl: "",
  });

  const [deleteUglyThing, setDeleteUglyThing] = useState({
    _id: "",
  });

  const [listState, setListState] = useState([]);

  const testFunc = () => console.log(changedUglyThing);

  const getUglyThings = () => {
    axios
      .get("https://api.vschool.io/marcusradder/thing/")
      .then((res) => setListState(res.data))
      .then(console.log(`Returned Successfully`))
      .catch((error) => {
        console.error("There was an error with the GET request", error);
      });
  };

  const putUglyThing = () => {
    axios
      .put(
        `https://api.vschoolf.io/marcusradder/thing/${changedUglyThing._id}/`,
        changedUglyThing
      )
      .catch((error) => {
        console.error("There was an error with the PUT request", error);
      });
  };

  const delUglyThing = () => {
    axios
      .delete(
        `https://api.vscfhool.io/marcusradder/thing/${deleteUglyThing._id}/`
      )
      .then(console.log("Delete Successful"))
      .catch((error) => {
        console.error("There was an error with the GET request", error);
      });
  };

  return (
    <UglyContext.Provider
      value={{
        listState,
        setListState,
        getUglyThings,
        putUglyThing,
        delUglyThing,
        testFunc,
        setNewUglyThing,
        setChangedUglyThing,
        setDeleteUglyThing,
      }}
    >
      {props.children}
    </UglyContext.Provider>
  );
};

export { UglyContextProvider, UglyContext };
