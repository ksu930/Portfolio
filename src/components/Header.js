import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import { SiMicrodotblog } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import hamburger from "../sources/hamburger.svg";

export default function Header({ AboutRef, SkillsRef, ArchRef, ProjectRef }) {
  const [position, setPosition] = useState(0);
  const [dropState, setDropState] = useState(0);
  const onClickDropStateChange = () => {
    if (dropState === 0) {
      return setDropState(1);
    } else {
      return setDropState(0);
    }
  };
  function onScroll() {
    if (window.scrollY === 0) {
      setPosition(1);
    } else {
      setPosition(0);
    }
  }
  window.onresize = function () {
    if (window.innerWidth > 820) {
      setDropState(0);
    }
  };
  useEffect(() => {
    if (window.scrollY === 0) {
      setPosition(1);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <StHeaderContainer position={position} dropstate={dropState}>
      <div className="header_fix">
        <div className="left_div">
          <div>SungUk's Portfolio</div>
        </div>
        <div className="right_div">
          <div className="navbar">
            <div
              className="navitem"
              position={position}
              onClick={() =>
                AboutRef.current.scrollIntoView({
                  block: "start",
                  behavior: "smooth",
                })
              }
            >
              About me
            </div>
            <div
              className="navitem"
              position={position}
              onClick={() =>
                SkillsRef.current.scrollIntoView({
                  block: "start",
                  behavior: "smooth",
                })
              }
            >
              Skills
            </div>
            <div
              className="navitem"
              position={position}
              onClick={() =>
                ArchRef.current.scrollIntoView({
                  block: "start",
                  behavior: "smooth",
                })
              }
            >
              Archiving
            </div>
            <div
              className="navitem"
              position={position}
              onClick={() =>
                ProjectRef.current.scrollIntoView({
                  block: "start",
                  behavior: "smooth",
                })
              }
            >
              Projects
            </div>
          </div>
          <GoMarkGithub
            onClick={() => window.open("https://github.com/ksu930")}
            style={{ cursor: "pointer" }}
          />
          <SiMicrodotblog
            onClick={() => window.open("https://velog.io/@ksu930")}
            style={{ cursor: "pointer" }}
          />
          <GrInstagram
            onClick={() =>
              window.open("https://www.instagram.com/ddungwukkim/")
            }
            style={{ cursor: "pointer" }}
          />
        </div>
        <div
          className="right_div_button"
          onClick={() => onClickDropStateChange()}
        >
          <img src={hamburger} alt="hamburger" />
        </div>
      </div>

      <div className="drop_box" dropstate={dropState}>
        <div className="drop_box_item">
          <div
            className="drop_box_item_content"
            onClick={() => {
              AboutRef.current.scrollIntoView({
                block: "start",
                behavior: "smooth",
              });
              setDropState(0);
            }}
          >
            About me
          </div>
          <div
            className="drop_box_item_content"
            onClick={() => {
              SkillsRef.current.scrollIntoView({
                block: "start",
                behavior: "smooth",
              });
              setDropState(0);
            }}
          >
            Skills
          </div>
          <div
            className="drop_box_item_content"
            onClick={() => {
              ArchRef.current.scrollIntoView({
                block: "start",
                behavior: "smooth",
              });
              setDropState(0);
            }}
          >
            Archiving
          </div>
          <div
            className="drop_box_item_content"
            onClick={() => {
              ProjectRef.current.scrollIntoView({
                block: "start",
                behavior: "smooth",
              });
              setDropState(0);
            }}
          >
            Projects
          </div>
        </div>
      </div>
      <div className="drop_box_layout" onClick={() => setDropState(0)}></div>
    </StHeaderContainer>
  );
}
const StHeaderContainer = styled.div`
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  font-size: 2rem;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${(props) => (props.position ? "transparent" : "white")};
  color: ${(props) => (props.position ? "hsla(0,0%,100%,.7)" : "black")};
  transition: background-color 0.2s, color 0.2s;
  z-index: 5;
  @media (max-width: 500px) {
    font-size: 24px;
    background-color: white;
    color: black;
  }
  @media (max-width: 820px) {
    background-color: white;
    color: black;
  }

  .header_fix {
    box-sizing: border-box;
    width: 100%;
    min-height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    vertical-align: middle;
  }
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
    @media (max-width: 820px) {
      display: none;
    }
  }
  .right_div_button {
    display: none;
    float: right;
    box-sizing: border-box;
    width: 3.5rem;
    height: 3rem;
    padding: 0.5rem 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    text-align: center;
    cursor: pointer;
    background-color: hsla(0, 0%, 100%, 0.7);
    img {
      box-sizing: border-box;
    }
    @media (max-width: 820px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    font-size: 1rem;
    margin-right: 2rem;
  }
  .navitem {
    color: ${(props) => (props.position ? "hsla(0,0%,100%,.7)" : "black")};
    cursor: pointer;
  }
  .drop_box {
    display: none;
    width: 100%;
    max-height: ${(props) => (props.dropstate ? "176px" : "0px")};
    overflow-y: hidden;
    transition: max-height 0.2s;
    @media (max-width: 820px) {
      display: flex;
    }
  }
  .drop_box_item {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 1rem 0 0 0;
    font-size: 1rem;
  }
  .drop_box_item_content {
    box-sizing: border-box;
    padding: 0.75rem 0;
    color: #6c757d;
    cursor: pointer;
  }
  .drop_box_layout {
    display: none;
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    z-index: -1;
    @media (max-width: 820px) {
      display: ${(props) => (props.dropstate ? "flex" : "none")};
    }
  }
`;
