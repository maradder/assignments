import React from "react";
import Button from "./Button";

const ClearFavesButton = () => {
  return (
    <Button onClick={() => console.log("clearFavorites")}>
      Clear Favorites
    </Button>
  );
};

export default ClearFavesButton;
