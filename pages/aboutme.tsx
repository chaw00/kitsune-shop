import Head from "next/head";
import { ABOUT, fetchGraphQL } from "../lib/api";
import About from "../components/about";
import TechStack from "../components/swiper";
import client from "../services/apollo-client";
import { AboutMe as AboutMeType } from "../types/graphql";

export default function AboutMe({ about }: { about: AboutMeType }) {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <About about={about}></About>
      <TechStack tech={about.techStackCollection.items}></TechStack>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  try {
    const about = await client.query({
      query: ABOUT,
    });
    return {
      props: {
        about: about.data.aboutMeCollection.items[0],
      },
      revalidate: 10,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
