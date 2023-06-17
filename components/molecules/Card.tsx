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

const Wrapper = styled.div`
  max-width: 354px;
  text-align: center;
`;

const Number = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 56px;
  padding-top: 12px;
  width: 56px;
  height: 56px;
  border: 1px solid #584d62;
  border-radius: 50%;
  display: inline-block;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #24053e;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Desc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #24053e;
`;
