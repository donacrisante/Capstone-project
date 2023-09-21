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
  align-items: center;
  gap: 8px;
  font-family: var(--font-family);
  font-size: 16px;
  transition: background-color 0.2s ease-in-out;
  background-color: transparent;
  border-radius: 999px;

  &:hover {
    background-color: #8FBC8F;
  }
`;
