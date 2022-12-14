import React from "react";
import styled from "styled-components";
import js from "../sources/js.png";
import html from "../sources/html.png";
import css from "../sources/css.png";
import react from "../sources/react.png";
import reactquery from "../sources/reactquery.png";
import recoil from "../sources/recoil.png";
import redux from "../sources/redux.png";
import styledcom from "../sources/styled.png";
import cf from "../sources/cf.jpg";
import s3 from "../sources/s3.png";
import vercel from "../sources/vercel.png";
import git from "../sources/git.png";
import github from "../sources/github.png";
import axios from "../sources/axios.png";
import notion from "../sources/notion.png";
import slack from "../sources/slack.png";

export default function SkillsPage({ SkillsRef }) {
  return (
    <StLayout ref={SkillsRef}>
      <div className="title">SKILLS</div>
      <div className="container">
        <div className="skill_box">
          <div className="skill_box_title">Frontend</div>
          <div className="skiil_box_body">
            <div className="item">
              <div className="item_img">
                <img src={js} alt="js" />
              </div>
              <div className="item_text">JavaScript</div>
            </div>
            <div className="item">
              <div className="item_img">
                <img src={html} alt="html" />
              </div>
              <div className="item_text">Html</div>
            </div>
            <div className="item">
              <div className="item_img">
                <img src={css} alt="css" />
              </div>
              <div className="item_text">CSS</div>
            </div>
            <div className="item">
              <div className="item_img">
                <img src={react} alt="react" />
              </div>
              <div className="item_text">React</div>
            </div>
            <div className="item">
              <div className="item_img">
                <img src={reactquery} alt="reactquery" />
              </div>
              <div className="item_text">React-Query</div>
            </div>
            <div className="item">
              <div className="item_img">
                <img src={recoil} alt="recoil" />
              </div>
              <div className="item_text">Recoil</div>
            </div>
            <div className="item">
              <div className="item_img">
                <img src={redux} alt="redux" />
              </div>
              <div className="item_text">Redux/Toolkit</div>
            </div>
            <div className="item">
              <div className="item_img">
                <img src={styledcom} alt="styledcom" />
              </div>
              <div className="item_text">Styled-Component</div>
            </div>
            <div className="item">
              <div className="item_img">
                <img src={axios} alt="axios" />
              </div>
              <div className="item_text">Axios</div>
            </div>
          </div>
        </div>
        <div className="skill_box_outer">
          <div className="skill_box">
            <div className="skill_box_title">Deployment</div>
            <div className="skiil_box_body">
              <div className="item">
                <div className="item_img">
                  <img src={s3} alt="s3" />
                </div>
                <div className="item_text">S3</div>
              </div>
              <div className="item">
                <div className="item_img">
                  <img src={cf} alt="cf" />
                </div>
                <div className="item_text">CloudFront</div>
              </div>
              <div className="item">
                <div className="item_img">
                  <img src={vercel} alt="vercel" />
                </div>
                <div className="item_text">Vercel</div>
              </div>
            </div>
          </div>
          <div className="skill_box">
            <div className="skill_box_title">Version Control</div>
            <div className="skiil_box_body">
              <div className="item">
                <div className="item_img">
                  <img src={git} alt="git" />
                </div>
                <div className="item_text">git</div>
              </div>
              <div className="item">
                <div className="item_img">
                  <img src={github} alt="github" />
                </div>
                <div className="item_text">GitHub</div>
              </div>
            </div>
          </div>
          <div className="skill_box">
            <div className="skill_box_title">Communication</div>
            <div className="skiil_box_body">
              <div className="item">
                <div className="item_img">
                  <img src={notion} alt="notion" />
                </div>
                <div className="item_text">Notion</div>
              </div>
              <div className="item">
                <div className="item_img">
                  <img src={slack} alt="slack" />
                </div>
                <div className="item_text">Slack</div>
              </div>
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
  background-color: #f9c51d;
  padding-bottom: 48px;
  scroll-margin-top: 80px;
  img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }
  .title {
    font-family: LeferiPoint-BlackA;
    font-size: 48px;
    font-weight: 900;
    border-bottom: 1px solid #4d5053;
    margin: 48px auto;
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
    gap: 40px;
  }
  .skill_box {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: fit-content;
    max-width: 380px;
    width: 100%;
    background-color: white;
    padding: 32px 16px;
    border-radius: 24px;
    &:hover {
      transform: translateY(8px);
      transition: transform 0.2s ease;
    }
    .skill_box_title {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      font-size: 24px;
      font-weight: 600;
      color: #f4623a;
      padding-bottom: 8px;
      margin-bottom: 8px;
      border-bottom: 1px solid #4d5053;
    }
    .item_text {
      font-size: 20px;
    }
  }
  .skill_box_outer {
    max-width: 380px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
  }
`;
