import React from "react";
import Button from "../atoms/Button";
import styled from "styled-components";

export default function MainBanner() {
  return (
    <Wrapper>
      <MainBannerTitle>Data <span>tailored</span> to<br/> your needs.</MainBannerTitle>
      <Button href="/" text="Learn more"/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 226px;
  background: #24053E;
  text-align: center;
  border-bottom-left-radius: 100% 45%;
  border-bottom-right-radius: 100% 45%;
`;

const MainBannerTitle = styled.h2`
  color: #fff;
  font-size: 80px;
  font-weight: 600;
  font-style: normal;
  font-family: 'Fraunces 144pt';
  margin-bottom: 37px;

  span{
    border-bottom: 2px solid #44FFA1;
  }
`
