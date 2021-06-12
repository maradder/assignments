import styled from "styled-components";

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

export default Button;
