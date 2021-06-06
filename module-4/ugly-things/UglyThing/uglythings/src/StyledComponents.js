import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: fit-content;
  width: 475px;
  padding: 24px;
  margin: 90px auto;
  background-image: ${({ theme }) => theme.cardColor};
  border-radius: 20px;
  box-shadow: 1px 1px 40px #aaaaaa;
`;

const ImageContainer = styled.img`
  max-height: 300px;
  min-height: 300px;
  width: 100%;
`;
const Input = styled.input`
  height: 32px;
  width: 100%;
  padding-left: 10px;
  margin: 0 auto 28px auto;
  border-radius: 20px;
  outline: none;

  :focus {
    border: 3px solid #39ff14;
    height: 32px;
    margin: 0 auto 29px auto;
  }
`;

const Label = styled.label`
  position: relative;
`;

const ButtonContainer = styled.div`
  width: 100%;
  max-height: fit-content;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  height: 35px;
  width: 100px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.accentColor};
  margin: 8px;
  background: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.primaryText};

  :hover {
    box-shadow: 1px 1px 7px ${({ theme }) => theme.background};
  }

  :active {
    box-shadow: -1px -1px 2px ${({ theme }) => theme.background};
  }
`;

const DescriptionContainer = styled.div`
  text-transform: uppercase;
  max-height: 100px;
`;

const StyledHeader = styled.header`
  height: fit-content;
  width: 100vw;
  display: flex;
  padding: 16px 48px;
  content: ${(props) => props.theme.background};
`;

export {
  Button,
  ButtonContainer,
  Card,
  Input,
  ImageContainer,
  Label,
  DescriptionContainer,
  StyledHeader,
};
