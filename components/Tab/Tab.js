import styled from "styled-components";

export default function Tab({ children, isActive, onClick }) {
  return (
    <StyledTab name={`tab${isActive ? " tab--active" : ""}`} onClick={onClick}>
      {children}
    </StyledTab>
  );
}

const StyledTab = styled.button`
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family);
  font-size: 16px;
  transition: background-color 0.2s ease-in-out;
  background-color: transparent;
  /* margin: -40px -16px;
  padding: 10px 16px; */
  border-radius: 999px;

  &:hover {
    background-color: #8FBC8F;
  }
 

  /* border: 1px solid #ccc;
  border-radius: 10px;
  background: #cccccc;
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.25); */
`;
