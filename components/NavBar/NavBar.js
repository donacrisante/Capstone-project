import styled from "styled-components";
import Link from "next/link";
import { FaHome, FaCalculator, FaList, FaChartBar } from "react-icons/fa";

export default function NavBar() {
  return (
    <Navbar>
      <Link href="/">
        <FaHome />
      </Link>

      <Link href="/calculator">
        <FaCalculator />
      </Link>

      <Link href="/journey-list">
        <FaList />
      </Link>
      <Link href="/chart">
        <FaChartBar />
      </Link>
    </Navbar>
  );
}

const Navbar = styled.nav`
  background-color: lightslategray;
    position: fixed;
    display: flex;
    bottom: 0px;
    width: 100%;
    padding: 10px;
    left: 0px;
    justify-content: space-around;
    border: 2px solid black;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0px;
`;
