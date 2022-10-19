import Head from "next/head";
import { fetchGraphQL, PRODUCTS } from "../lib/api";
import Card from "../components/card";
import styled from "styled-components";

import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "../components/styles";

const StlyedUL = styled.ul`
  display: grid;
  max-width: 1300px;
  grid-template-columns: repeat(1, minmax(150px, 500px));
  grid-gap: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  list-style: none;

  > li {
    display: flex;
    min-width: 200px;
    justify-content: center;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(150px, 500px));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(150px, 500px));
  }
`;
export default function Products({ products }) {
  return (
    <>
      <Head>
        <title>Product List</title>
      </Head>
      <Container>
        <Main>
          <Description>Pick Your Guilty Pleasure</Description>
          <StlyedUL>
            {products.map((product) => (
              <li key={product.slug}>
                <Card product={product}></Card>
              </li>
            ))}
          </StlyedUL>
        </Main>
      </Container>
    </>
  );
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  try {
    const products = await fetchGraphQL(PRODUCTS);
    console.log(products);
    return {
      props: {
        products: products.data.sampleProductsCollection.items,
      },
    };
  } catch (e) {
    console.log("ERRR", e);
    return {
      notFound: true,
    };
  }
}
