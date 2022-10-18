import Link from "next/link";
import styled from "styled-components";

const Mobilecontainer = styled.button`
  width: 20px;
  margin: 0;
  padding: 0;
  height: 20px;
  background-color: black;
  gap: 2px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
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
  height: 2px;
  background-color: white;
  width: 15px;
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Nav(props) {
  return (
    <NavWrapper>
      <Navigation>
        <Link href="/">
          <h3>Home</h3>
        </Link>
        <Link href="/products">
          <h3>Products</h3>
        </Link>
        <Link href="/about">
          <h3>About</h3>
        </Link>
      </Navigation>
      <Mobilecontainer onClick={props.toggle}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
        {/* <Image src={"/Icon.jpg"} height={20} width={20}></Image> */}
      </Mobilecontainer>
    </NavWrapper>
  );
}
