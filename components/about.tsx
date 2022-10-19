import Image from "next/image";
import styled from "styled-components";
import { ABOUT, fetchGraphQL } from "../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richContentOptions } from "./richContent";

const ImageBox = styled.figure`
  position: relative;
  justify-content: center;
`;

const InfoBox = styled.div`
  font-size: 40px;
  font-weight: 300;
  color: #560903;
  text-align: left;
  padding: 20px;
`;
const StlyedUL = styled.ul`
  display: grid;
  max-width: 1300px;
  grid-template-columns: repeat(1, minmax(150px, 500px));
  grid-gap: 20px;
  padding: 20px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;

  > li {
    display: flex;
    min-width: 200px;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(150px, 500px));
  }
`;
export default function About({ about }) {
  return (
    <StlyedUL>
      <ImageBox>
        <Image
          alt="Avatar"
          src={about.profileImage.url}
          height="600%"
          width="500%"
        ></Image>
      </ImageBox>
      <InfoBox>
        {documentToReactComponents(
          about.aboutMe.json,
          richContentOptions(about.aboutMe.links) as any
        )}
      </InfoBox>
    </StlyedUL>
  );
}
export async function getStaticPaths() {
  const about = await fetchGraphQL(ABOUT);

  return {
    paths: about.data.aboutMeCollection.items.map((about) => ({
      params: {
        product: about.slug,
      },
    })),
    fallback: "blocking",
  };
}
