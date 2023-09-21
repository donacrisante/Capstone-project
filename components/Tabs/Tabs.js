import styled from "styled-components";

export default function Tabs({ children }) {
  return <StyledTabs name="tabs">{children}</StyledTabs>;
}

const StyledTabs = styled.div`
  display: flex;
  width: 400px;
  height: 44px;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 50px;
`;
