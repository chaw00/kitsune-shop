import styled, { StyledComponent } from "styled-components";
import { SOCIAL } from "../lib/api";
import client from "../services/apollo-client";
import { SocialMedia } from "../types/graphql";
import Social from "./socialMedia";
import Image from "next/image";
const Footercontainer = styled.footer`
  display: flex;
  text-align: left;
  width: 100%;
  background-color: #dc97a5;
  opacity: 0.8;
  padding: 0px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

const Copy = styled.span`
  width: 100%;
  text-align: center;
  margin: 10px;
  justify-content: center;
  font-weight: bold;
`;

export default function Footer({
  socialMedia,
}: {
  socialMedia: SocialMedia[];
}) {
  return (
    <Footercontainer>
      <Social social={socialMedia}></Social>
      <Copy>©2022 Copyright All rights reserved</Copy>
    </Footercontainer>
  );
}
