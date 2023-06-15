import styled from "styled-components";
import Logo from "../atoms/Logo";

export default function Footer() {
  return (
    <Wrapper>
      <Logo source="logo-dark" alt="Logo" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding: 60px 0;
  text-align: center;
`;
