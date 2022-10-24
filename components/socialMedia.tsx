import styled from "styled-components";
import { SocialMedia } from "../types/graphql";
import Image from "next/image";

const SocialContainer = styled.div`
  align-items: center;
  /* padding: 25px 50px; */
  cursor: pointer;
  margin: 10px;
  padding: 0;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  min-width: 300px;
  justify-content: space-between;
  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
  > a {
    margin: 0 1rem;
    @media (min-width: 1024px) {
      &:hover {
        transform: translate(-10px, -7px);
      }
    }
  }
  @media (min-width: 1024px) {
    display: center;
    text-align: center;
  }
`;

export default function Social({ social }: { social: SocialMedia[] }) {
  return (
    <SocialContainer>
      {social.map((social) => (
        <a
          key={social.socialMediaImage.url}
          href={social.socialMediaUrl}
          target="blank"
        >
          <Image
            alt={social.socialMediaAlt}
            src={social.socialMediaImage.url}
            height={"30px"}
            width={"30px"}
          ></Image>
        </a>
      ))}
    </SocialContainer>
  );
}
