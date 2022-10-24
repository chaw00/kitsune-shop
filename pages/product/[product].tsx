import { PRODUCT, PRODUCTS } from "../../lib/api";
import Image from "next/image";
import styled from "styled-components";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richContentOptions } from "../../components/richContent";
import client from "../../services/apollo-client";

const Container = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageContainer = styled.figure`
  position: relative;
  width: 100%;
  height: 400px;
  transition: transform 0.2s;
  padding: 50px;
  img {
    height: auto;
    object-fit: contain;
  }
`;

const Info = styled.div`
  font-size: 35px;
  font-weight: 500;
  color: black;
  text-align: center;
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 100;
  text-align: left;
  padding: 2rem;
  margin: 5px 5px 10px 5px;
  background-color: #508ebf;
  @media (min-width: 1024px) {
    text-align: center;
  }
`;

export default function Product({ product }) {
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <Container>
        <ImageContainer>
          <Image
            alt={product.title}
            src={product.featuredImage.url}
            layout="fill"
            objectFit="contain"
            border-radius="30px"
          ></Image>
        </ImageContainer>
        <Info>
          <h2>{product.title}</h2>
          <p>Buy this for {product.amount}php</p>
        </Info>
      </Container>
      <Description>
        <h4>Product Details:</h4>

        {documentToReactComponents(
          product.details.json,
          richContentOptions(product.details.links) as any
        )}
      </Description>
    </>
  );
}

export async function getStaticPaths() {
  const products = await client.query({
    query: PRODUCTS,
  });

  return {
    paths: products.data.sampleProductsCollection.items.map((product) => ({
      params: {
        product: product.slug,
      },
    })),
    fallback: "blocking",
  };
}
export async function getStaticProps({ params }) {
  const { product } = params;
  // Call an external API endpoint to get posts
  try {
    const products = await client.query({
      query: PRODUCT(product),
    });

    return {
      props: {
        product: products.data.sampleProductsCollection.items[0],
      },
      revalidate: 10,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
