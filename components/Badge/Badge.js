import styled from "styled-components";

export default function Badge({ children }) {
  return <StyledBadge>{children}</StyledBadge>;
}

const StyledBadge = styled.span`
  background-color: #4c924c;
  font-weight: normal;
  padding: 3px 10px;
  border-radius: 10px;
  position: right;
`;
