import { fetchGraphQL, PRODUCT, PRODUCTS } from "../../lib/api";

export default function Product({ product }) {
  return <>{JSON.stringify(product)}</>;
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
