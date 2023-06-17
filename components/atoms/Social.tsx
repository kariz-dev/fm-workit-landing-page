import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface socialProps {
  src: "instagram" | "facebook" | "twitter";
  link: string;
}

export default function Social(props: socialProps) {
  const { src, link } = props;
  return (
    <SocialLink href={link}>
      <SocialImg src={`/images/icon-${src}.svg`} alt={src} width={32} height={32} />
    </SocialLink>
  );
}

const SocialLink = styled(Link)`
  cursor: pointer;
`
const SocialImg = styled(Image)`
  width: 32px;
`