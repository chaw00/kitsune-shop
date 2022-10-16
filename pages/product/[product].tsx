import { fetchGraphQL, PRODUCT, PRODUCTS } from "../../lib/api";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
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
  text-align: left;
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
      <Container>
        <ImageContainer>
          <Image
            alt={product.title}
            src={product.featuredImage.url}
            layout="fill"
            objectFit="contain"
          ></Image>
        </ImageContainer>
        <Info>
          <h1>{product.title}</h1>
          <p>Buy this for {product.amount}php</p>
        </Info>
      </Container>
      <Description>{product.description}</Description>
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
    };
  } catch (e) {
    console.log("ERRR", e);
    return {
      notFound: true,
    };
  }
}
