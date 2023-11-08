import React from "react";
import { Container } from "./style";
const Checkbox = ({ name, label, onCheck, disabled, checked }) => {
    const handleCheckboxChange = (event) => {
      const newValue = event.target.checked;
      onCheck(name, newValue); 
    };
  return (
    <Container>
      <input type="checkbox" name={name} checked={checked} disabled={disabled}
        onChange={handleCheckboxChange}/>
      <label htmlFor={name}>{label}</label>
    </Container>
  );
};
export default Checkbox;
