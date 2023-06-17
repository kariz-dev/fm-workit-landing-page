import styled from "styled-components";
import Image from "next/image";

export default function HeroIllustration() {
  return (
    <MobileIllustration
      src="/images/image-hero.webp"
      width={767}
      height={441}
      alt="Illustration right"
    />
  );
}

const MobileIllustration = styled(Image)`
  display: block;
  margin: -260px auto 0;
  position: relative;

  @media (max-width: 768px) {
    width: 300px;
    height: auto;
    object-fit: contain;
    margin-top: -100px;
  }
`;
