import React from "react";
import styled from "styled-components";

interface ButtonProps {
  href: string;
  text: string;
}

export default function Button(props: ButtonProps) {
  const { href, text } = props;
  return <Cta href={href}>{text}</Cta>;
}

const Cta = styled.a`
  background: #44ffa1;
  border: 2px solid #44ffa1;
  color: #24053e;
  padding: 13px 32px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: #4ffba5;
  }
`;
