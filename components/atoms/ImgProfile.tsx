import styled from "styled-components";
import Image from "next/image";

export default function ImgProfile() {
  return (
    <Img
      src="/images/image-founder.webp"
      width={477}
      height={477}
      alt="Image founder"
      priority
    />
  );
}

const Img = styled(Image)`
  @media (max-width: 768px) {
    width: 281px;
    height: 281px;
  }
`;
