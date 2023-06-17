import styled from "styled-components"
import Card from "../molecules/Card"

export default function Features() {
  return (
    <Feature>
      <Card
        number={1}
        title="Actionable insights"
        desc="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
      />
      <Card
        number={2}
        title="Data-driven decisions"
        desc="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
      />
      <Card
        number={3}
        title="Always affordable"
        desc="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
      />
    </Feature>
  )
}

const Feature = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  justify-content: center;
  margin-top: 90px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
    gap: 40px;
  }
`