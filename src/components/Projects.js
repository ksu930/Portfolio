import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import mini1 from "../sources/mini1.JPG";
import mini2 from "../sources/mini2.JPG";
import mini3 from "../sources/mini3.JPG";
import mini4 from "../sources/mini4.JPG";
import mini5 from "../sources/mini5.JPG";
import mini6 from "../sources/mini6.JPG";
import mini7 from "../sources/mini7.JPG";
import mini8 from "../sources/mini8.JPG";
import mini9 from "../sources/mini9.JPG";

export default function Projects() {
  return (
    <StLayout>
      <div className="title">PROJECTS</div>
      <div className="body_wrap">
        <div className="body_container">
          <div className="body_title">항해그램</div>
          <div className="body_day">2022.10.21 ~ 2022.10.27 (1주일)</div>
          <div className="body_contents">
            <div className="carosel_wrap">
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={mini1} alt="mini1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={mini2} alt="mini2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={mini3} alt="mini3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={mini4} alt="mini4" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={mini5} alt="mini5" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={mini6} alt="mini6" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={mini7} alt="mini7" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={mini8} alt="mini8" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={mini9} alt="mini9" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text_wrap">
              <div className="summary">
                <div className="summary_text_box">
                  <b>
                    부트캠프에서 함께 공부했던 사람들과 피드를 통해 소통할 수
                    있는 웹 서비스
                  </b>
                  입니다. 인스타그램, 페이스북과 같은 SNS와 유사하게 사용자가
                  피드를 작성하여 공유하며 소통하는 것을 목적으로 합니다.
                  <br></br>
                  <br></br>
                  git에 대해 공부했던적이 있었지만, 1인 프로젝트만 git에 대해
                  공부했던적이 있었지만, 1인 프로젝트만 하다보니 git의 필요성을
                  느끼지 못했었습니다. 처음으로 협업을 진행하면서 git의 필요성을
                  느끼고, HTML, CSS, JavaScript를 비롯하여{" "}
                  <span className="pink">React</span>를 배우면서{" "}
                  <span className="pink">Redux</span>를 활용한 전역상태관리가 왜
                  필요한지, <span className="pink">Json-server</span>를 활용한
                  mock-server가 왜 필요한지를 배우며 웹 개발의 기본 지식을 쌓을
                  수 있었던 프로젝트입니다.
                </div>
                <div
                  className="summary_button_box"
                  onClick={() =>
                    window.open("https://github.com/ksu930/miniproject")
                  }
                >
                  자세히 보기 ▶ READ ME
                </div>
              </div>
              <div className="info">
                <div className="info_content">
                  <div className="info_content_title">✔ 주요기능</div>
                  <div className="info_content_body">
                    회원가입(유효성검사, 헬퍼 텍스트, 중복확인),
                    로그인(토큰저장), 로그인/로그아웃 상태에 따른 헤더 반응,
                    게시글 작성/조회/수정/삭제(이미지포함), 댓글
                    작성/조회/수정/삭제, 게시글 좋아요, 무한스크롤
                  </div>
                </div>
                <div className="info_content">
                  <div className="info_content_title">✔ GitHub</div>
                  <a
                    className="info_content_body_a"
                    href="https://github.com/ogaeng1/mini-FE"
                  >
                    https://github.com/ogaeng1/mini-FE
                  </a>
                </div>
                <div className="info_content">
                  <div className="info_content_title">✔ URL</div>
                  <a
                    className="info_content_body_a"
                    href="https://miniproject-plum.vercel.app/"
                  >
                    https://miniproject-plum.vercel.app/
                  </a>
                </div>
                <div className="info_content">
                  <div className="info_content_title">✔ Frontend</div>
                  <div className="info_content_body">
                    React, Redux, Axios, Json-server,
                    React-intersection-observer, Styled-component
                  </div>
                </div>
                <div className="info_content">
                  <div className="info_content_title">✔ 주요기능</div>
                  <div className="info_content_body">
                    회원가입(유효성검사, 헬퍼 텍스트, 중복확인),
                    로그인(토큰저장), 로그인/로그아웃 상태에 따른 헤더 반응,
                    게시글 작성/조회/수정/삭제(이미지포함), 댓글
                    작성/조회/수정/삭제, 게시글 좋아요, 무한스크롤
                  </div>
                </div>
              </div>
            </div>
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
  background-color: #1d809f;
  padding: 48px 24px;
  margin: 0 auto;
  .title {
    font-family: LeferiPoint-BlackA;
    font-size: 48px;
    font-weight: 900;
    border-bottom: 1px solid white;
    margin: 0 auto;
    color: white;
    margin-bottom: 48px;
  }
  .body_wrap {
    width: 100%;
    max-width: 1080px;
    box-sizing: border-box;
  }
  .body_container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px;
    margin: 0 auto;
    border-radius: 20px;
    background-color: #fff;
  }
  .body_title {
    font-size: 40px;
    color: black;
    font-weight: 600;
    margin-bottom: 24px;
  }
  .body_day {
    color: #c5c8cb;
    font-size: 16px;
    margin-bottom: 24px;
  }
  .body_contents {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    gap: 40px;
  }
  .carosel_wrap {
    display: flex;
    flex-direction: column;
    width: 45%;
    min-width: 350px;
    min-height: fit-content;
  }
  .swiper {
    width: 100%;
    height: fit-content;
  }
  .swiper-slide {
    width: 100%;
    height: fit-content;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: fill;
  }
  .text_wrap {
    width: 45%;
    min-width: 350px;
    display: flex;
    flex-direction: column;
  }
  .summary {
    font-size: 16px;
    line-height: normal;
    border-bottom: 1px solid #c5c8cb;
    b {
      font-weight: bold;
    }
    .pink {
      color: #ed3770;
    }
  }
  .summary_button_box {
    margin: 20px 0;
    width: fit-content;
    background-color: black;
    border-radius: 4px;
    color: white;
    padding: 12px;
    cursor: pointer;
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
  }
  .info_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
  .info_content_title {
    font-size: 20px;
    font-weight: bold;
    min-width: max-content;
  }
  .info_content_body {
    font-size: 16px;
    line-height: normal;
  }
  .info_content_body_a {
    font-size: 16px;
    color: #258ddb;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
