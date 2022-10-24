import Image from "next/image";
import styled from "styled-components";
import { Banner as BannerType } from "../types/graphql";

const ImageContainer = styled.figure`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  align-items: baseline;
  > figcaption {
    z-index: 1;
  }
`;

export default function Banner({ banner }: { banner: BannerType }) {
  const { url } = banner.featuredBanner;
  return (
    <>
      <figcaption>
        <h2>{banner.bannerTitle}</h2>
      </figcaption>
      <ImageContainer>
        <Image
          alt={banner.bannerTitle}
          src={url}
          layout="fill"
          objectFit="cover"
        ></Image>
      </ImageContainer>
    </>
  );
}
