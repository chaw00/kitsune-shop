import styled from "styled-components";
import Link from "next/link";

const SideContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  background-color: #dc97a5;
  flex-direction: column;
  bottom: 0;
  justify-content: columns;
  text-indent: 30px;
  cursor: pointer;
  @media (min-width: 900px) {
    width: 300px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
  > button {
    background-color: #508ebf;
    font-size: medium;
    font-weight: bold;
    text-align: center;
    width: 100%;
    height: 30px;
    font-family: cursive;
    &:hover {
      background-color: #ccdbea;
      color: black;
    }
  }
  > nav {
    h3:hover {
      background-color: #ccdbea;
      color: #560903;
      height: 25px;
      border-radius: 30px;
      text-decoration: underline;
    }
  }
`;

const SideBarFooter = styled.div`
  display: block;
`;

export default function SideBar(sidebar) {
  const { isOpen } = sidebar;
  if (!isOpen) {
    return null;
  }
  return (
    <SideContainer>
      <>
        <button onClick={sidebar.toggle}>Close</button>
        <nav>
          <Link href="/">
            <h3>Home</h3>
          </Link>
          <Link href="/products">
            <h3>Products</h3>
          </Link>
          <Link href="/aboutme">
            <h3>About</h3>
          </Link>
        </nav>
      </>
      <SideBarFooter></SideBarFooter>
    </SideContainer>
  );
}
