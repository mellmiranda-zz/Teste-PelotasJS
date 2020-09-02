import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #000;
  border-radius: 4px;
  font-size: 20px;
  color: #ff69b4;
  padding: 8px 12px;
  outline: none;
`;

const Button = (props) => {
  const [text, setText] = useState("");
  const handleClick = () => {
    setText("Botão foi clicado!");
  };
  return (
    <StyledButton onClick={handleClick}>
      <span>{text || props.text}</span>
    </StyledButton>
  );
};

export default Button;
