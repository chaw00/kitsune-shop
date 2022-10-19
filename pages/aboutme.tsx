import Head from "next/head";
import { ABOUT, fetchGraphQL } from "../lib/api";
import About from "../components/about";
import TechStack from "../components/swiper";

export default function AboutMe({ about }) {
  console.log(about);
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
    const about = await fetchGraphQL(ABOUT);
    console.log(about);
    return {
      props: {
        about: about.data.aboutMeCollection.items[0],
      },
    };
  } catch (e) {
    console.log("ERRR", e);
    return {
      notFound: true,
    };
  }
}
