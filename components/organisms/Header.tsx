import React from "react";
import styled from "styled-components";
import Nav from "../molecules/Nav";

function Header() {
  return (
    <Wrapper className="container">
      <Nav />
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  padding-top: 58px;
  padding-bottom: 12px;
  background: #24053e;
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;
`;