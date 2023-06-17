import React from "react";
import styled from "styled-components";
import Nav from "../molecules/Nav";

export default function Header() {
  return (
    <Wrapper className="container">
      <Nav />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 58px;
  padding-bottom: 12px;
  background: #24053e;
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    padding: 32px 16px 10px;
  }
`;
