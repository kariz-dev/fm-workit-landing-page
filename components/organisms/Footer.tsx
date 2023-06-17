import styled from "styled-components";
import Logo from "../atoms/Logo";
import Social from "../atoms/Social";

export default function Footer() {
  return (
    <Wrapper>
      <Logo source="logo-dark" alt="Logo" />
      <Socials>
        <Social link="/" src="facebook" />
        <Social link="/" src="twitter" />
        <Social link="/" src="instagram" />
      </Socials>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding: 60px 0;
  text-align: center;
`;

const Socials = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 57px;
`;
