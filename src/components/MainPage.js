import React from "react";
import styled from "styled-components";
import backgroundImg from "../sources/background.jpg";

export default function MainPage() {
  return (
    <StLayout>
      <div className="top_container">
        <div className="title_box">
          <div className="title"> - 김성욱 -</div>
          <div className="title_inner_box">
            <div className="title">프론트엔드 </div>
            <div className="title">포트폴리오</div>
          </div>
        </div>
        <div className="empty"></div>
        <div className="body_box">
          <div className="body">안녕하세요.</div>
          <div className="body">
            남다른 성장 곡성을 그리고 있는 신입 프론트엔드 개발자입니다.
          </div>
          <div className="body">
            오늘은 모르지만, 내일은 해결할 수 있는 역량을 가지고 있습니다.
          </div>
          <div className="body">
            몰입의 즐거움을 알고, 개발에 몰입하고 있습니다.
          </div>
        </div>
        <div className="info_message">방문해 주셔서 감사합니다</div>
      </div>
    </StLayout>
  );
}
const StLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .top_container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 28px 0;
    background: linear-gradient(
        180deg,
        rgba(112, 93, 80, 0.8) 0,
        rgba(112, 93, 80, 0.8) 90%
      ),
      url(${backgroundImg}) center/100% no-repeat;
    width: 100%;
    height: 100%;
    color: white;

    .title_box {
      margin-top: 16px;
      margin-left: auto;
      margin-right: auto;
      font-family: LeferiPoint-BlackA;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      .title {
        color: white;
        font-size: 48px;
        font-weight: 900;
        @media (max-width: 500px) {
          font-size: 32px;
        }
      }
      .title_inner_box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
      }
    }
    .empty {
      width: 100px;
      height: 28px;
      border-bottom: 3px solid #f4623a;
      margin-bottom: 28px;
    }
    .body_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-bottom: 48px;
      .body {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #c5c8cb;
      }
    }
    .info_message {
      display: flex;
      align-items: center;
      width: fit-content;
      background-color: #f4623a;
      border-radius: 30px;
      padding: 16px 32px;
      font-size: 16px;
      margin-bottom: 16px;
      &:hover {
        background-color: rgb(0, 0, 0, 0.5);
      }
    }
  }
`;
