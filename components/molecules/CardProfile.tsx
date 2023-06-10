import styled from "styled-components";
import Button from "../atoms/Button";

interface CardProfileProps {
  title: string;
  desc: string;
}

export default function CardProfile(props: CardProfileProps) {
  const { title, desc } = props;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <Button href="/" text="Apply for access" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 64px;
  background: #24053e;
  width: 730px;
  height: fit-content;
  margin-left: -40px;
  align-self: flex-end;
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 600;
  font-size: 56px;
`;

const Desc = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
`;
