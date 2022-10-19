import styled from "styled-components";

const Footercontainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90px;
  background-color: #dc97a5;
  opacity: 0.8;
  padding: 40px;
  margin: 0;
  bottom: 0;
`;

export default function Footer() {
  return (
    <Footercontainer>
      <h4>@2022 Copyright All rights reserved</h4>
    </Footercontainer>
  );
}
