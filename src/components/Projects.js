import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { Pagination, Zoom } from "swiper";
import mini1 from "../sources/mini1.JPG";
import mini2 from "../sources/mini2.JPG";
import mini3 from "../sources/mini3.JPG";
import mini4 from "../sources/mini4.JPG";
import mini5 from "../sources/mini5.JPG";
import mini6 from "../sources/mini6.JPG";
import mini7 from "../sources/mini7.JPG";
import mini8 from "../sources/mini8.JPG";
import mini9 from "../sources/mini9.JPG";
import clone1 from "../sources/clone1.png";
import clone2 from "../sources/clone2.png";
import clone3 from "../sources/clone3.png";
import clone4 from "../sources/clone4.png";
import clone5 from "../sources/clone5.png";
import clone6 from "../sources/clone6.png";
import port1 from "../sources/port1.JPG";
import port2 from "../sources/port2.JPG";
import port3 from "../sources/port3.JPG";
import port4 from "../sources/port4.JPG";
import l1 from "../sources/l1.png";
import l2 from "../sources/l2.png";
import l3 from "../sources/l3.png";
import l4 from "../sources/l4.png";
import l6 from "../sources/l6.png";
import l7 from "../sources/l7.png";
import l8 from "../sources/l8.png";
import l9 from "../sources/l9.png";
import l10 from "../sources/l10.png";
import l11 from "../sources/l11.png";
import l12 from "../sources/l12.png";
import l13 from "../sources/l13.png";
import l14 from "../sources/l14.png";
import l15 from "../sources/l15.png";
import l16 from "../sources/l16.png";
import l17 from "../sources/l17.png";
import l18 from "../sources/l18.png";
import l19 from "../sources/l19.png";
import l20 from "../sources/l20.png";

export default function Projects({ ProjectRef }) {
  return (
    <StLayout ref={ProjectRef}>
      <div className="title">PROJECTS</div>
      <div className="body_wrap">
        <div className="body_container">
          <div className="body_title">등대지기</div>
          <div className="body_day">2022.12.6 ~ 2022.12.18 </div>
          <div className="body_contents">
            <div className="carosel_wrap">
              <Swiper
                zoom={true}
                pagination={{
                  type: "fraction",
                }}
                loop={true}
                modules={[Pagination, Zoom]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l1} alt="l1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l2} alt="l2" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l3} alt="l3" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l4} alt="l4" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l6} alt="l6" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l7} alt="l7" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l8} alt="l8" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l9} alt="l9" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l10} alt="l10" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l11} alt="l11" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l12} alt="l12" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l13} alt="l13" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l14} alt="l14" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l15} alt="l15" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l16} alt="l16" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l17} alt="l17" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l18} alt="l18" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l19} alt="l19" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={l20} alt="l20" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text_wrap">
              <div className="summary">
                <div className="summary_text_box">
                  <b>
                    사용자가 부동산 매물에 대해 공인중개사에게 문의하고,
                    발품팔았던 기록들을 메모할 수 있는 모바일 웹사이트
                  </b>
                  입니다.
                  <br></br>
                  <br></br>
                  <span className="pink">
                    프론트엔드 3명, 백엔드 3명, 디자이너 1명, 총 7명
                  </span>
                  이 함께 기획단계부터 서비스 런칭까지 진행했다는 점에서 큰
                  의미가 있는 프로젝트 입니다.
                  <br></br>
                  <br></br>
                  서버 상태 관리와 전역 상태 관리를 위해 이전 프로젝트 때 일부만
                  적용했었던 <span className="pink">React-query</span>,{" "}
                  <span className="pink">Recoil</span>을 숙달할 수 있는
                  기간이었습니다.
                  <br></br>
                  자동로그인 구현을 위해 쿠키에 대해 공부할 수 있었고, refresh
                  토큰을 활용한 access토큰 재발급 로직을 구현하면서{" "}
                  <span className="pink">Axios-intercepter</span>
                  기능의 활용도를 높일 수 있었습니다.
                  <br></br>
                  CSS 속성과 <span className="pink">Media-query</span>를
                  사용하여 반응형 웹페이지를 구현하였고,{" "}
                  <span className="pink">S3</span>와{" "}
                  <span className="pink">Cloudfront</span>를 사용해 배포를
                  진행했습니다.
                </div>
                <div className="summary_button_outer_box">
                  <div
                    className="summary_button_box"
                    onClick={() =>
                      window.open(
                        "https://github.com/H99-9-A-1Team-Project/Front-End"
                      )
                    }
                  >
                    자세히 보기 &nbsp; ▶ READ ME
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="info_content">
                  <div className="info_content_title">✔ 주요기능</div>
                  <div className="info_content_body">
                    - 로그인(일반유저 / 공인중개사 분리)
                    <br></br>- 공인중개사와 매물에 대한 상담
                    <br></br>- 발품팔았던 매물에 대한 기록
                    <br></br>- 지도 API를 활용한 상담과 기록의 위치 시각화
                    <br></br>- 상담목록 검색
                    <br></br>- 공인중개사 상담에 대한 평가(좋아요)
                    <br></br>- 프로필 편집
                    <br></br>- 공인중개사 계정관리(완료 시 이메일 전송)
                    <br></br>- 이미지 압축
                  </div>
                </div>
                <div className="info_content">
                  <div className="info_content_title">✔ Frontend</div>
                  <div className="info_content_body">
                    - React
                    <br></br>- React-query
                    <br></br>- Recoil
                    <br></br>- S3
                    <br></br>- Cloudfront
                    <br></br>- Axios
                    <br></br>- Styled-component
                    <br></br>- Toast-ui-editor
                    <br></br>- Swiper
                  </div>
                </div>
                <div className="info_content">
                  <div className="info_content_title">✔ GitHub</div>
                  <div
                    className="info_content_body_a"
                    onClick={() =>
                      window.open(
                        "https://github.com/H99-9-A-1Team-Project/Front-End"
                      )
                    }
                  >
                    https://github.com/H99-9-A-1Team-Project/Front-End
                  </div>
                </div>
                <div className="info_content_last">
                  <div className="info_content_title">✔ URL</div>
                  <div
                    className="info_content_body_a"
                    onClick={() =>
                      window.open("https://www.lighthousefriend.com/")
                    }
                  >
                    https://www.lighthousefriend.com/
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body_wrap">
        <div className="body_container">
          <div className="body_title">Portfolio</div>
          <div className="body_day">2022.12.6 ~ 2022.12.18 </div>
          <div className="body_contents">
            <div className="carosel_wrap">
              <Swiper
                zoom={true}
                pagination={{
                  type: "fraction",
                }}
                loop={true}
                modules={[Pagination, Zoom]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={port1} alt="port1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={port2} alt="port2" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={port3} alt="port3" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={port4} alt="port4" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text_wrap">
              <div className="summary">
                <div className="summary_text_box">
                  <b>포트폴리오 용도로 제작한 웹사이트</b>입니다.
                  <br></br>
                  <br></br>
                  부트캠프기간 동안 치열하게 진행했던 프로젝트들을 하나의
                  포트폴리오에 담기위해 제작한 웹사이트입니다. 개발자로 취직을
                  하고난 후에도 지금 만들어 놓은 포트폴리오를 계속
                  업그레이드하여 활용할 생각입니다.
                  <br></br>
                  <br></br>
                  포트폴리오는 최종프로젝트를 진행하며 연습했던{" "}
                  <span className="pink">반응형 웹페이지</span>를 적용하였고,{" "}
                  <span className="pink">S3</span>와{" "}
                  <span className="pink">Cloudfront</span>를 사용해
                  배포하였습니다.
                </div>
                <div className="summary_button_outer_box">
                  <div
                    className="summary_button_box"
                    onClick={() =>
                      window.open("https://github.com/ksu930/Portfolio")
                    }
                  >
                    자세히 보기 &nbsp; ▶ READ ME
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="info_content">
                  <div className="info_content_title">✔ 주요기능</div>
                  <div className="info_content_body">
                    - 간단한 자기소개
                    <br></br>- 인적사항
                    <br></br>- 기술스택
                    <br></br>- 깃허브, 기술블로그 링크
                    <br></br>- 프로젝트 경험
                  </div>
                </div>
                <div className="info_content">
                  <div className="info_content_title">✔ Frontend</div>
                  <div className="info_content_body">
                    - React
                    <br></br>- S3
                    <br></br>- Cloudfront
                    <br></br>- Swiper
                    <br></br>- Styled-component
                  </div>
                </div>
                <div className="info_content">
                  <div className="info_content_title">✔ GitHub</div>
                  <div
                    className="info_content_body_a"
                    onClick={() =>
                      window.open("https://github.com/ksu930/Portfolio")
                    }
                  >
                    https://github.com/ksu930/Portfolio
                  </div>
                </div>
                <div className="info_content_last">
                  <div className="info_content_title">✔ URL</div>
                  <div
                    className="info_content_body_a"
                    onClick={() =>
                      window.open("https://www.ksu-portfolio.com/")
                    }
                  >
                    https://www.ksu-portfolio.com/
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body_wrap">
        <div className="body_container">
          <div className="body_title">OP.GG 클론</div>
          <div className="body_day">2022.10.28 ~ 2022.11.03 (1주일)</div>
          <div className="body_contents">
            <div className="carosel_wrap">
              <Swiper
                zoom={true}
                pagination={{
                  type: "fraction",
                }}
                loop={true}
                modules={[Pagination, Zoom]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={clone1} alt="clone1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={clone2} alt="clone2" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={clone3} alt="clone3" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={clone4} alt="clone4" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={clone5} alt="clone5" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={clone6} alt="clone6" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="text_wrap">
              <div className="summary">
                <div className="summary_text_box">
                  <b>
                    OP.GG라는 게임 커뮤니티 사이트를 최대한 유사하게 구현한
                    프로젝트
                  </b>
                  입니다. 서비스되고 있는 웹페이지를 선정하여 CSS적으로 최대한
                  유사하게 구현해보는 것을 목적으로 실시한 프로젝트입니다.
                  <br></br>
                  <br></br>
                  기존 프로젝트의 MVP 기능과 스코프를 비슷하게 하여,&nbsp;
                  <span className="pink">React</span>,&nbsp;
                  <span className="pink">Redux</span>의 사용을 숙달하고 현업에서
                  많이 사용하는&nbsp;<span className="pink">CSS속성</span>에는
                  어떤것이 있는지 공부해보고, 내것으로 만드는 것이 목표였습니다.
                  <br></br>
                  <br></br>
                  평소에 자주 사용하였지만 정확한 원리를 모르고 사용했었던
                  속성들에 대해서 공부하는 시간을 가질수 있었습니다.
                  모든페이지를 구현해보고싶었지만, 1주일이라는 시간적 제약으로
                  인하여 메인페이지와 커뮤니티 페이지만 구현하였습니다.
                  <br></br>
                  <br></br>
                  Redux의 보일러코드를 줄이고, 불편한 API 통신 절차를 개선하기
                  위해 &nbsp;<span className="pink">Recoil</span>과 &nbsp;
                  <span className="pink">React-query</span>를 일부 적용
                  시켜보았습니다.
                </div>
                <div className="summary_button_outer_box">
                  <div
                    className="summary_button_box"
                    onClick={() =>
                      window.open("https://github.com/ksu930/cloneproject")
                    }
                  >
                    자세히 보기 &nbsp; ▶ READ ME
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="info_content">
                  <div className="info_content_title">✔ 주요기능</div>
                  <div className="info_content_body">
                    - 회원가입(유효성검사, 헬퍼 텍스트, 중복확인)
                    <br></br>- 로그인(토큰저장)
                    <br></br>- 로그인 / 로그아웃 상태에 따른 헤더 반응
                    <br></br>- 게시글 작성 / 조회 / 수정 / 삭제(이미지포함)
                    <br></br>- 댓글 작성 / 조회 / 수정 / 삭제
                    <br></br>- 게시글 좋아요 기능
                    <br></br>- 페이지네이션
                    <br></br>- 검색기능
                  </div>
                </div>
                <div className="info_content">
                  <div className="info_content_title">✔ Frontend</div>
                  <div className="info_content_body">
                    - React
                    <br></br>- Redux(toolkit)
                    <br></br>- Vercel
                    <br></br>- Axios
                    <br></br>- Json-server
                    <br></br>- Styled-component
                    <br></br>- React-query
                    <br></br>- Recoil
                    <br></br>
                  </div>
                </div>
                <div className="info_content">
                  <div className="info_content_title">✔ GitHub</div>
                  <div
                    className="info_content_body_a"
                    onClick={() =>
                      window.open("https://github.com/ksu930/cloneproject")
                    }
                  >
                    https://github.com/ksu930/cloneproject
                  </div>
                </div>
                <div className="info_content_last">
                  <div className="info_content_title">✔ URL</div>
                  <div
                    className="info_content_body_a"
                    onClick={() => window.open("https://opggclone.vercel.app/")}
                  >
                    https://opggclone.vercel.app/
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body_wrap">
        <div className="body_container">
          <div className="body_title">항해그램</div>
          <div className="body_day">2022.10.21 ~ 2022.10.27 (1주일)</div>
          <div className="body_contents">
            <div className="carosel_wrap">
              <Swiper
                zoom={true}
                pagination={{
                  type: "fraction",
                }}
                loop={true}
                modules={[Pagination, Zoom]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={mini1} alt="mini1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={mini2} alt="mini2" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={mini3} alt="mini3" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={mini4} alt="mini4" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={mini5} alt="mini5" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={mini6} alt="mini6" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={mini7} alt="mini7" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={mini8} alt="mini8" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img src={mini9} alt="mini9" />
                  </div>
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
                  느끼지 못했었습니다.
                  <br></br>
                  처음으로 협업을 진행하면서 git의 필요성을 느끼고, HTML, CSS,
                  JavaScript를 비롯하여 <span className="pink">React</span>에
                  대하여 공부할 수 있었고, <span className="pink">Redux</span>를
                  활용한 전역상태관리가 왜 필요한지,{" "}
                  <span className="pink">Json-server</span>를 활용한
                  mock-server가 왜 필요한지를 배우며 웹 개발의 기본 지식을 쌓을
                  수 있었던 프로젝트입니다.
                </div>
                <div className="summary_button_outer_box">
                  <div
                    className="summary_button_box"
                    onClick={() =>
                      window.open("https://github.com/ksu930/miniproject")
                    }
                  >
                    자세히 보기 &nbsp; ▶ READ ME
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="info_content">
                  <div className="info_content_title">✔ 주요기능</div>
                  <div className="info_content_body">
                    - 회원가입(유효성검사, 헬퍼 텍스트, 중복확인)
                    <br></br>- 로그인(토큰저장)
                    <br></br>- 로그인 / 로그아웃 상태에 따른 헤더 반응
                    <br></br>- 게시글 작성 / 조회 / 수정 / 삭제(이미지포함)
                    <br></br>- 댓글 작성 / 조회 / 수정 / 삭제
                    <br></br>- 게시글 좋아요 기능
                    <br></br>- 무한스크롤
                  </div>
                </div>
                <div className="info_content">
                  <div className="info_content_title">✔ Frontend</div>
                  <div className="info_content_body">
                    - React
                    <br></br>- Redux(thunk,toolkit)
                    <br></br>- Vercel
                    <br></br>- Axios
                    <br></br>- Json-server
                    <br></br>- React-intersection-observer
                    <br></br>- Styled-component
                  </div>
                </div>
                <div className="info_content">
                  <div className="info_content_title">✔ GitHub</div>
                  <div
                    className="info_content_body_a"
                    onClick={() =>
                      window.open("https://github.com/ksu930/miniproject")
                    }
                  >
                    https://github.com/ksu930/miniproject
                  </div>
                </div>
                <div className="info_content_last">
                  <div className="info_content_title">✔ URL</div>
                  <div
                    className="info_content_body_a"
                    onClick={() =>
                      window.open("https://miniproject-plum.vercel.app/")
                    }
                  >
                    https://miniproject-plum.vercel.app/
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
  scroll-margin-top: 80px;

  .title {
    font-family: LeferiPoint-BlackA;
    font-size: 48px;
    font-weight: 900;
    border-bottom: 1px solid white;
    margin: 0 auto;
    color: white;
    margin-bottom: 48px;
    @media (max-width: 500px) {
      font-size: 32px;
    }
  }
  .body_wrap {
    width: 100%;
    max-width: 1080px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
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
    color: #75787b;
    font-size: 16px;
    margin-bottom: 24px;
  }
  .body_contents {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 40px;
  }
  .carosel_wrap {
    display: flex;
    flex-direction: column;
    width: 100%;

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
    max-height: 600px;
    object-fit: fill;
  }
  .swiper-pagination {
    bottom: 0px;
  }
  .text_wrap {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }
  .summary {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    width: 48%;
    font-size: 16px;
    line-height: normal;
    @media (max-width: 680px) {
      border-bottom: 1px solid #c5c8cb;
      width: 100%;
    }
    b {
      font-weight: bold;
    }
    .pink {
      color: #ed3770;
    }
  }
  .summary_text_box {
    box-sizing: border-box;
    width: 100%;
    white-space: pre-wrap;
    word-break: break-all;
  }
  .summary_button_outer_box {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
  }
  .summary_button_box {
    width: fit-content;
    background-color: black;
    border-radius: 4px;
    margin-top: 20px;
    color: white;
    padding: 12px;
    cursor: pointer;
    @media (max-width: 680px) {
      margin: 20px 0;
      padding: 6px;
      font-size: 12px;
    }
  }
  .info {
    width: 48%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 680px) {
      width: 100%;
    }
  }
  .info_content,
  .info_content_last {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    @media (max-width: 680px) {
      flex-direction: column;
      align-items: flex-start;
      border-bottom: 1px solid #c5c8cb;
      padding-bottom: 20px;
    }
  }
  .info_content_last {
    @media (max-width: 680px) {
      border-bottom: none;
      padding-bottom: 0px;
    }
  }
  .info_content_title {
    font-size: 20px;
    min-width: 104px;
    height: 100%;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: 500px) {
      font-size: 16px;
      min-width: 85px;
    }
  }
  .info_content_body {
    font-size: 16px;
    line-height: normal;
    white-space: pre-line;
    word-break: break-all;
  }
  .info_content_body_a {
    font-size: 16px;
    color: #258ddb;
    cursor: pointer;
    text-decoration: none;
    white-space: pre-line;
    word-break: break-all;
    &:hover {
      text-decoration: underline;
    }
  }
`;
