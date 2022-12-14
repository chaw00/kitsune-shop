import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { SampleProducts } from "../types/graphql";

const CardWrapper = styled.button`
  height: 420px;
  background-color: #508ebf;
  font-size: 20px;
  font-weight: 200;
  width: 80%;
  padding: 5px 16px;
  align-items: center;
  color: black;
  text-align: center;
  position: relative;
  border: 5px solid white;
  border-radius: 30px;
  margin: 20px;
  padding: 15px;
  line-height: 30px;
  font-family: cursive;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  &:hover {
    transform: translate(-20px, -9px);
  }
  > figcaption {
    font-weight: bold;
  }
`;

export default function Card({ product }: { product: SampleProducts }) {
  const router = useRouter();
  const handleRouteChange = () => {
    router.push(`/product/${product.slug}`);
  };
  return (
    <CardWrapper onClick={handleRouteChange}>
      <Image
        alt={product.title}
        src={product.featuredImage.url}
        height={"100%"}
        width={"100%"}
        layout="responsive"
      ></Image>
      <figcaption>{product.title}</figcaption>
      <p> &#8369;&nbsp;{product.amount}</p>
    </CardWrapper>
  );
}
