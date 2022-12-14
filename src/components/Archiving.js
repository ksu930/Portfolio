import React, { useRef } from "react";
import styled from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import { SiMicrodotblog } from "react-icons/si";

export default function Archiving({ ArchRef }) {
  return (
    <StLayout ref={ArchRef}>
      <div className="title">ARCHIVING</div>
      <div className="container">
        <div
          className="item_box"
          onClick={() => window.open("https://github.com/ksu930")}
        >
          <div className="item_box_title">
            <GoMarkGithub /> Github
          </div>
          <div className="link">github.com/ksu930</div>
          <div className="body_main">
            <div className="body_main_content1">소스 코드 저장소</div>
            <div className="body_main_content2">입니다.</div>
          </div>
          <div className="body_sub">
            <ul>
              <li>과거 프로젝트, 프로그램, 앱의 소스코드</li>
              <li>혼자서 코딩 연습을 위해 작성했던 소스코드</li>
            </ul>
          </div>
        </div>
        <div
          className="item_box"
          onClick={() => window.open("https://velog.io/@ksu930")}
        >
          <div className="item_box_title">
            <SiMicrodotblog /> Velog
          </div>
          <div className="link">velog.io/@ksu930</div>
          <div className="body_main">
            <div className="body_main_content1">
              공부 및 지식 공유 목적의 블로그
            </div>
            <div className="body_main_content2">입니다.</div>
          </div>
          <div className="body_sub">
            <ul>
              <li>공부했던 내용을 복습하기 위한 기록</li>
              <li>공부했던 내용을 내것으로 만들기 위한 기록</li>
              <li>개발자의 길을 걸으며 공부한 관련 지식 정리</li>
              <li>공부한 지식을 공유하며 선한 영향력 행사</li>
            </ul>
          </div>
        </div>
      </div>
    </StLayout>
  );
}
const StLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
  padding-bottom: 48px;
  scroll-margin-top: 80px;

  .title {
    font-family: LeferiPoint-BlackA;
    font-size: 48px;
    font-weight: 900;
    border-bottom: 1px solid #4d5053;
    margin: 48px auto;
    color: white;
    @media (max-width: 500px) {
      font-size: 32px;
    }
  }
  .container {
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    padding: 0 5rem;
    justify-content: space-evenly;
    color: black;
    gap: 40px;
  }
  .item_box {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    max-width: 380px;
    height: 332px;
    padding: 16px;
    border-radius: 20px;
    background-color: white;
    padding: 32px;
    gap: 20px;
    cursor: pointer;
    &:hover {
      transform: translateY(8px);
      transition: transform 0.2s ease;
    }
    @media (max-width: 500px) {
      height: 100%;
    }
  }
  .item_box_title {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 40px;
    color: black;
    font-weight: 600;
    gap: 8px;
  }
  .link {
    font-size: 20px;
    color: #258ddb;
    word-break: break-all;
  }
  .body_main {
    display: inline;
    flex-direction: row;
    font-size: 20px;
    .body_main_content1 {
      display: inline;
      font-weight: bold;
    }
    .body_main_content2 {
      display: inline;
    }
  }
  .body_sub {
    box-sizing: border-box;
    font-size: 16px;
    ul {
      margin-left: 16px;
    }
    li {
      box-sizing: border-box;
      list-style-type: disc;
      margin-bottom: 20px;
    }
  }
`;
