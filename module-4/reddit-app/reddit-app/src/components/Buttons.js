import styled from "styled-components";
import { UlHeader } from "./StyledComponents";
import { Link } from "react-router-dom";

const Button = styled.button`
  display: flex;
  margin: 25px auto;
  background-color: ${({ theme }) => theme.secondary};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.buttonText};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

const SubmitButton = styled.button`
  display: flex;
  margin: 25px auto;
  background-color: ${({ theme }) => theme.altButton};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.buttonText};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

const FooterButton = styled.button`
  display: flex;
  margin: 25px auto;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.buttonText};
  border-radius: 0;
  cursor: pointer;
  font-size: 18px;
  padding: 0.6rem;
`;

const FooterLink = styled(Link)`
  display: flex;
  margin: 25px auto;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 0;
  cursor: pointer;
  padding: 0.6rem;

  ul {
    list-style: none;
    text-decoration-line: none;
    color: ${({ theme }) => theme.buttonText};
    font-size: 0.8rem;
  }
`;

const SignOutButton = () => {
  return (
    <Button onClick={() => console.log("signOut")}>Sign Out of Reddit</Button>
  );
};

const ClearFavesButton = () => {
  return (
    <Button onClick={() => console.log("clearFavorites")}>
      Clear Favorites
    </Button>
  );
};

const ButtonOne = () => {
  const handleFooterButtonClick = () => window.scrollTo(window.top);

  return (
    <FooterButton onClick={handleFooterButtonClick}>
      <UlHeader>Click to go back to the top</UlHeader>
    </FooterButton>
  );
};
const ButtonTwo = () => {
  return (
    <FooterLink to={"/"}>
      <UlHeader>Click to go back home</UlHeader>
    </FooterLink>
  );
};

export {
  SignOutButton,
  Button,
  ButtonOne,
  SubmitButton,
  ButtonTwo,
  ClearFavesButton,
};
