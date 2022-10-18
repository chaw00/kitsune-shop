import { fetchGraphQL, PRODUCT, PRODUCTS } from "../../lib/api";
import Image from "next/image";
import styled from "styled-components";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richContentOptions } from "../../components/richContent";

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
  font-size: 40px;
  font-weight: 300;
  color: #560903;
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
  background-color: #560903;
  color: #f7ff93;
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
          <h1>{product.title}</h1>
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
  const products = await fetchGraphQL(PRODUCTS);

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
  console.log(PRODUCT(product));
  // Call an external API endpoint to get posts
  try {
    const products = await fetchGraphQL(PRODUCT(product));

    return {
      props: {
        product: products.data.sampleProductsCollection.items[0],
      },
      revalidate: 10,
    };
  } catch (e) {
    console.log("ERRR", e);
    return {
      notFound: true,
    };
  }
}
