import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/navbar";

const Logo = styled.a`
  display: flex;
  gap: 20px;
  cursor: pointer;
`;

const Headercontainer = styled.header`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  width: 100%;
  background-color: black;
  opacity: 0.8;
  color: white;
  padding: 0 20px;
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export default function Header(props) {
  return (
    <Headercontainer>
      <Link href={"/"}>
        <Logo>
          <Image
            alt={"Kitsune Shop"}
            src={"/kit.jpg"}
            height={50}
            width={70}
          ></Image>
          <h2>Kitsune Shop</h2>
        </Logo>
      </Link>
      <Navigation toggle={props.toggle}></Navigation>
    </Headercontainer>
  );
}
