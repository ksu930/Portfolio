import React from "react";
import styled from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import { SiMicrodotblog } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";

export default function Header() {
  return (
    <StHeaderContainer>
      <div className="left_div">
        <div>SungUk's Portfolio</div>
      </div>
      <div className="right_div">
        <a href="https://github.com/ksu930">
          <GoMarkGithub />
        </a>
        <a href="https://velog.io/@ksu930">
          <SiMicrodotblog />
        </a>
        <a href="https://www.instagram.com/ddungwukkim/">
          <GrInstagram />
        </a>
      </div>
    </StHeaderContainer>
  );
}
const StHeaderContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  font-size: 30px;
  font-weight: 800;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
  background-color: white;
  color: black;
  a {
    text-decoration: none;
    color: black;
  }
  .left_div {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }
  .right_div {
    display: flex;
    gap: 12px;
  }
`;
