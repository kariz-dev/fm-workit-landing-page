import React from "react";
import Button from "../atoms/Button";
import styled from "styled-components";
import Image from "next/image";

export default function MainBanner() {
  return (
    <Wrapper>
      <MainBannerTitle>
        Data <span>tailored</span> to
        <br /> your needs.
      </MainBannerTitle>
      <Button href="/" text="Learn more" />
      <BgImgLeft
        src="/images/bg-pattern-1.svg"
        width={270.29}
        height={215.1}
        alt="Illustraion left"
      />
      <BgImgRight
        src="/images/bg-pattern-2.svg"
        width={141.7}
        height={112.71}
        alt="Illustration right"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 326px;
  background: #24053e;
  text-align: center;
  border-bottom-left-radius: 50% 15%;
  border-bottom-right-radius: 50% 15%;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 156px;
    border-bottom-left-radius: 80% 18%;
    border-bottom-right-radius: 80% 18%;
  }
`;

const MainBannerTitle = styled.h2`
  color: #fff;
  font-size: 80px;
  font-weight: 600;
  font-style: normal;
  font-family: "Fraunces 144pt";
  margin-bottom: 37px;

  @media (max-width: 768px) {
    font-size: 50px;
    margin-bottom: 40px;
  }

  span {
    border-bottom: 2px solid #44ffa1;
  }
`;

const BgImgLeft = styled(Image)`
  position: absolute;
  left: -100px;
  width: 270.29px;
  height: auto;
  top: 70px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BgImgRight = styled(Image)`
  position: absolute;
  right: -50px;
  width: 141.7px;
  height: auto;
  top: 300px;

  @media (max-width: 768px) {
    display: none;
  }
`;
