import React from "react";
import { ReactComponent as User } from "../sources/person-fill.svg";
import { ReactComponent as Calender } from "../sources/calendar-fill.svg";
import { ReactComponent as Pin } from "../sources/geo-alt-fill.svg";
import { ReactComponent as Phone } from "../sources/telephone-fill.svg";
import { ReactComponent as Mail } from "../sources/envelope-fill.svg";
import { ReactComponent as Pen } from "../sources/pencil-fill.svg";
import styled from "styled-components";

export default function AboutMe({ AboutRef }) {
  return (
    <StLayout ref={AboutRef}>
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
  scroll-margin-top: 80px;

  .bottom_container {
    display: flex;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .bottom_title {
      font-family: LeferiPoint-BlackA;
      font-size: 3rem;
      font-weight: 900;
      border-bottom: 1px solid #9da0a3;
      margin: 48px auto;
      @media (max-width: 500px) {
        font-size: 2rem;
      }
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
      @media (max-width: 500px) {
        font-size: 1rem;
      }
    }
    .bottom_body_item_right_body {
      display: flex;
      flex-wrap: nowrap;
      font-size: 1rem;
      @media (max-width: 500px) {
        font-size: 0.75rem;
      }
    }
  }
`;
