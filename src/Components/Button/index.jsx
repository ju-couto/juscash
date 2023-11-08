import React from "react";
import { StyledButton } from "./styles";
const Button = ({ type, text, onClick, disabled, color, secondary }) => {
  return (
    <StyledButton type={type} onClick={onClick} color={color}
      secondary={secondary ? 1 : 0}
    disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
