import Head from "next/head";
import { BANNER, fetchGraphQL, PRODUCTS } from "../lib/api";
import Banner from "../components/banner";

export default function Home({ banner }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Banner banner={banner}></Banner>
    </>
  );
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  try {
    const banner = await fetchGraphQL(BANNER);
    console.log(BANNER);
    return {
      props: {
        banner: banner.data.bannerCollection.items[0],
      },
    };
  } catch (e) {
    console.log("ERRR", e);
    return {
      notFound: true,
    };
  }
}
