import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "../lib/api";

const CardContainer = styled.section`
  background-color: #c6e2e9;
  display: flex;
  width: 100%;
  justify-content: center;
`;
const CardWrapper = styled.button`
  height: 400px;
  background-color: #fee1eb;
  font-size: 20px;
  font-weight: 200;
  width: 80%;
  background-color: #e0bbe4;
  padding: 5px 16px;
  align-items: center;
  text-align: center;
  position: relative;
  border: 2px solid white;
  border-radius: 18px;
  margin: 20px;
  line-height: 30px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    color: red;
    border-color: #0070f3;
  }
`;

export default function Card({ product }) {
  const handleRouteChange = () => {};
  return (
    <CardContainer>
      <CardWrapper>
        <Image
          alt={product.title}
          src={product.featuredImage.url}
          height={"100%"}
          width={"100%"}
          layout="responsive"
        ></Image>
        <div>
          <h4>{product.title}</h4>
        </div>
      </CardWrapper>
    </CardContainer>
  );
}

// {
//     "title": "Kitkat Chocomint",
//     "slug": "kitkat-chocomint",
//     "featuredImage": {
//         "url": "https://images.ctfassets.net/ldcdkc14ex30/2OrJMn7fxJAnfMF5xwafM8/698b4f9e295073506231ed819eac6344/309648753_1258675814934840_1196438583186010872_n.jpg"
//     }
// }
