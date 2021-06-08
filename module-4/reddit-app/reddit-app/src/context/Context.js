import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Context.Provider value={(isLoggedIn, setIsLoggedIn)}>
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
