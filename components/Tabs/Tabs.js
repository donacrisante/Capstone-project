import styled from "styled-components";

export default function Tabs({ children }) {
  return <StyledTabs name="tabs">{children}</StyledTabs>;
}

const StyledTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  width: 400px;
  height: 44px;
`;
