import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "../lib/api";
import { useRouter } from "next/router";

const CardWrapper = styled.button`
  height: 400px;
  background-color: #560903;
  font-size: 20px;
  font-weight: 200;
  width: 80%;
  padding: 5px 16px;
  align-items: center;
  color: #f7ff93;
  text-align: center;
  position: relative;
  border: 5px solid white;
  border-radius: 30px;
  margin: 20px;
  padding: 20px;
  line-height: 30px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  &:hover {
    transform: translate(-20px, -9px);
  }
`;

export default function Card({ product }) {
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
      <div>
        <h4>{product.title}</h4>
        <h5>{product.amount}</h5>
      </div>
    </CardWrapper>
  );
}

// {
//     "title": "Kitkat Chocomint",
//     "slug": "kitkat-chocomint",
//     "featuredImage": {
//         "url": "https://images.ctfassets.net/ldcdkc14ex30/2OrJMn7fxJAnfMF5xwafM8/698b4f9e295073506231ed819eac6344/309648753_1258675814934840_1196438583186010872_n.jpg"
//     }
// }
