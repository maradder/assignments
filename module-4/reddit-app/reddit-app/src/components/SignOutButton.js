import React from "react";
import Button from "./Button";

const SignOutButton = () => {
  return (
    <Button onClick={() => console.log("signOut")}>Sign Out of Reddit</Button>
  );
};

export default SignOutButton;
