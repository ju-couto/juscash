import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${(props) => (props.color === "white" ? "#808080" : "#FFF")};
  font-size: ${(props) => (props.secondary ? "14px" : "20px")};
  border: ${(props) =>
    props.secondary
      ? `1px solid ${props.color === "white" ? "#808080" : "#FFF"}`
      : "none"};
  background-color: ${(props) => props.color || "#60c31e"};
  border-radius: ${(props) => (props.secondary ? "4px" : "6px")};
  width: fit-content;
  padding: 0 20px;
  font-weight: 400;
  height: 30px;
  min-width: 100px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (!props.disabled & "#60c31e" )};
    color: ${(props) => (!props.disabled & "#6a6a6a")};
  }

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
