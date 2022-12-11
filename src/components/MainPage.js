import React from "react";
import styled from "styled-components";
import backgroundImg from "../sources/background.jpg";
import { ReactComponent as User } from "../sources/person-fill.svg";
import { ReactComponent as Calender } from "../sources/calendar-fill.svg";
import { ReactComponent as Pin } from "../sources/geo-alt-fill.svg";
import { ReactComponent as Phone } from "../sources/telephone-fill.svg";
import { ReactComponent as Mail } from "../sources/envelope-fill.svg";
import { ReactComponent as Pen } from "../sources/pencil-fill.svg";

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
      <div className="bottom_container">
        <div className="bottom_title">ABOUT ME</div>
        <div className="bottom_body_box">
          <div className="bottom_body_item">
            <div className="bottom_body_item_left">
              <User />
            </div>
            <div className="bottom_body_item_right">
              <div className="bottom_body_item_right_title">이름</div>
              <div className="bottom_body_item_right_body">김성욱</div>
            </div>
          </div>
          <div className="bottom_body_item">
            <div className="bottom_body_item_left">
              <Calender />
            </div>
            <div className="bottom_body_item_right">
              <div className="bottom_body_item_right_title">생년월일</div>
              <div className="bottom_body_item_right_body">93.03.10</div>
            </div>
          </div>
          <div className="bottom_body_item">
            <div className="bottom_body_item_left">
              <Pin />
            </div>
            <div className="bottom_body_item_right">
              <div className="bottom_body_item_right_title">주소지</div>
              <div className="bottom_body_item_right_body">부산광역시 진구</div>
            </div>
          </div>
          <div className="bottom_body_item">
            <div className="bottom_body_item_left">
              <Phone />
            </div>
            <div className="bottom_body_item_right">
              <div className="bottom_body_item_right_title">연락처</div>
              <div className="bottom_body_item_right_body">010-2288-1722</div>
            </div>
          </div>
          <div className="bottom_body_item">
            <div className="bottom_body_item_left">
              <Mail />
            </div>
            <div className="bottom_body_item_right">
              <div className="bottom_body_item_right_title">이메일</div>
              <div className="bottom_body_item_right_body">
                ksu930310@gmail.com
              </div>
            </div>
          </div>
          <div className="bottom_body_item">
            <div className="bottom_body_item_left">
              <Pen />
            </div>
            <div className="bottom_body_item_right">
              <div className="bottom_body_item_right_title">학력</div>
              <div className="bottom_body_item_right_body">중앙대학교</div>
              <div className="bottom_body_item_right_body">(화학공학과)</div>
            </div>
          </div>
        </div>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        180deg,
        rgba(112, 93, 80, 0.8) 0,
        rgba(112, 93, 80, 0.8) 90%
      ),
      url(${backgroundImg}) center/100% no-repeat;
    width: 100%;
    height: 61vh;
    color: white;
    overflow: hidden;
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
      gap: 12px;
      margin-bottom: 48px;
      .body {
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
  .bottom_container {
    display: flex;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .bottom_title {
      font-family: LeferiPoint-BlackA;
      font-size: 48px;
      font-weight: 900;
      border-bottom: 1px solid #9da0a3;
      margin: 48px auto;
    }
    .bottom_body_box {
      box-sizing: border-box;
      width: 60%;
      display: flex;
      flex-direction: row;
      flex-flow: row wrap;
      align-items: center;
      margin: 0 auto 0 auto;
      align-items: center;
      justify-content: center;
    }
    .bottom_body_item {
      display: flex;
      flex-direction: row;
      margin-bottom: 32px;
      margin-right: 24px;
    }
    .bottom_body_item_left {
      margin-right: 24px;
    }
    .bottom_body_item_right {
      display: flex;
      flex-direction: column;
      width: 180px;
    }
    .bottom_body_item_right_title {
      display: flex;
      flex-wrap: nowrap;
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 8px;
    }
    .bottom_body_item_right_body {
      display: flex;
      flex-wrap: nowrap;
      font-size: 16px;
    }
  }
`;
