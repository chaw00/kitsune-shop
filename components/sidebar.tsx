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
  background-color: grey;
  flex-direction: column;
  bottom: 0;
  opacity: 4;
  justify-content: columns;
  cursor: pointer;
  @media (min-width: 900px) {
    width: 300px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
export default function SideBar(props) {
  const { isOpen } = props;
  if (!isOpen) {
    return null;
  }
  return (
    <SideContainer>
      <>
        <button onClick={props.toggle}>X</button>
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
    </SideContainer>
  );
}
//open sidenar
