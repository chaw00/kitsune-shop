import Link from "next/link";
import styled from "styled-components";

const Mobilecontainer = styled.button`
  width: 30px;
  height: 40px;
  background-color: inherit;
  border: 0;
  padding: 0;
  gap: 2px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  &:hover {
    background-color: green;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
const Navigation = styled.nav`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    gap: 30px;
  }
`;

const HamburgerLine = styled.div`
  height: 3px;
  background-color: white;
  width: 20px;
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px 20px 0;
`;

export default function Nav(nav) {
  return (
    <NavWrapper>
      <Navigation>
        <Link href="/">
          <h3>Home</h3>
        </Link>
        <Link href="/products">
          <h3>Products</h3>
        </Link>
        <Link href="/aboutme">
          <h3>About</h3>
        </Link>
      </Navigation>
      <Mobilecontainer onClick={nav.toggle}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </Mobilecontainer>
    </NavWrapper>
  );
}
