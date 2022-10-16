import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import Header from "../components/header";

const Contain = styled.div`
  background-color: #560903;
  color: #f7ff93;
  text-align: left;
  font-size: 20px;
  font-weight: 100%;
`;

export default function About({ about }) {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Contain>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
          laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
          sequi!
        </p>
      </Contain>
    </div>
  );
}
