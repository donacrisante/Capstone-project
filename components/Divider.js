import styled from "styled-components";

export default function Divider() {
    return <Hr name="divider" role="none" />;
  }

  const Hr = styled.hr`
  border: none;
  width: 100%;
  margin: 0;
  height: 1px;
  background: color-water-10;
`;