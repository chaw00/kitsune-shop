import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/navbar";

const Logo = styled.a`
  display: flex;
  gap: 20px;
  cursor: pointer;
  img {
    border-radius: 50%;
  }
`;

const Headercontainer = styled.header`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  width: 100%;
  background-color: #dc97a5;
  opacity: 0.8;
  padding: 0;
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 1;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export default function Header(header) {
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
      <Navigation toggle={header.toggle}></Navigation>
    </Headercontainer>
  );
}
