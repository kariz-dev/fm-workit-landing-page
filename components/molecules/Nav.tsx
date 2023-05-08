import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <NavMenu className="container">
      <NavLogo src="/images/logo-light.svg" alt="Workit Landing Page" />
      <NavBtn href="/">Apply for access</NavBtn>
    </NavMenu>
  );
}

export default Nav;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled.img`
  width: 95.76px;
  height: auto;
`;

const NavBtn = styled.a`
  border-bottom: 1px solid #44ffa1;
  padding-bottom: 8px;
`;
