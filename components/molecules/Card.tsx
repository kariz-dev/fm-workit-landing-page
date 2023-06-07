import styled from "styled-components";

interface CardProps {
  number: number;
  title: string;
  desc: string;
}

export default function Card(props: CardProps) {
  const { number, title, desc } = props;
  return (
    <Wrapper>
      <Number>{number}</Number>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Number = styled.p``;

const Title = styled.h3``;

const Desc = styled.p``;
