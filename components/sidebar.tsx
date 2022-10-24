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
  background-color: white;
  flex-direction: column;
  bottom: 0;
  justify-content: columns;
  cursor: pointer;
  @media (min-width: 900px) {
    width: 300px;
  }
  @media (min-width: 1024px) {
    display: none;
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
        <button onClick={sidebar.toggle}>X</button>
        <h3>Menu</h3>
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
//open sidenar
