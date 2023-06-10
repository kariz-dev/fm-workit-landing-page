import styled from "styled-components"
import ImgProfile from "../atoms/ImgProfile"
import CardProfile from "../molecules/CardProfile"

export default function Profile() {
  return (
    <Wrapper>
      <ImgProfile />
      <CardProfile 
        title="Be the first to test"
        desc="Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call."
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1112px;
  margin: 80px auto 0;
  display: flex;
  align-items: center;
`
