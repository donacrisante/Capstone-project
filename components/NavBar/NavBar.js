import styled from "styled-components";
import Link from "next/link";
import { FaHome, FaCalculator, FaList, FaChartBar } from "react-icons/fa";

export default function NavBar() {
  return (
    <Navbar>
      <Link href="/">
        <IconContainer>
          <FaHome />
        </IconContainer>
      </Link>

      <Link href="/calculator">
        <IconContainer>
          <FaCalculator />
        </IconContainer>
      </Link>
      <Link href="/journey-list">
        <IconContainer>
          <FaList />
        </IconContainer>
      </Link>
      <Link href="/chart">
        <IconContainer>
          <FaChartBar />
        </IconContainer>
      </Link>
    </Navbar>
  );
}

const Navbar = styled.nav`
  background-color: #4e6151;
  position: fixed;
  display: flex;
  bottom: 0px;
  width: 100%;
  padding: 10px;
  left: 0px;
  justify-content: space-around;
  border: none;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
`;

const IconContainer = styled.div`
  color: #eed9c4;
  font-size: 24px;
`;
