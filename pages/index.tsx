import Head from "next/head";
import { BANNER } from "../lib/api";
import Banner from "../components/banner";
import client from "../services/apollo-client";

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
    const banner = await client.query({
      query: BANNER,
    });
    return {
      props: {
        banner: banner.data.bannerCollection.items[0],
      },
      revalidate: 10,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
