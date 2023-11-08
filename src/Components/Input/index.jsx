import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import { StyledLabel, Container, ContainerInput } from "./styles";

const Input = ({ label, name, onChange, type, required, value, disabled}) => {
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Container>
      <StyledLabel htmlFor={name}>{label}
      {required && <span>*</span>}
      </StyledLabel>
      <ContainerInput>
        <input
          id={name}
          name={name}
          value={value}
          disabled={disabled}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          onChange={onChange}
        />
        {isPassword && (
          <div onClick={toggleShowPassword}>
            {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
          </div>
        )}
      </ContainerInput>
    </Container>
  );
};

export default Input;
