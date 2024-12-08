import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background: var(--secondary-text);
  color: var(--text-color);
  padding: 20px 40px;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: var(--background-color);
  text-decoration: none;
  margin: 10px 0;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--text-color);
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    background: var(--background-color);
    transition: width 0.5s, height 0.5s;
    z-index: -1;
  }

  &:hover::before {
    width: 200px;
    height: 200px;
  }
`;

const cText = styled.h3`
  color: --background-color;
  margin: 10px 0;
  font-size: 14px;
`;

function Footer() {
  const handleMouseEnter = (e) => {
    const link = e.target;
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    link.style.setProperty("--x", `${x}px`);
    link.style.setProperty("--y", `${y}px`);
  };

  return (
    <Box>
      <FooterContainer>
        <cText>Copyright © 2024. All rights are reserved.</cText>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FooterLink href="/help" onMouseEnter={handleMouseEnter}>
            Help
          </FooterLink>
          <FooterLink href="/about" onMouseEnter={handleMouseEnter}>
            FAQ
          </FooterLink>
          <FooterLink href="/terms" onMouseEnter={handleMouseEnter}>
            Terms
          </FooterLink>
        </div>
      </FooterContainer>
    </Box>
  );
}

export default Footer;
