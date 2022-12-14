import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import SkillsPage from "./components/SkillsPage";
import Archiving from "./components/Archiving";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import { useEffect, useRef, useState } from "react";
import pageup from "./sources/page-up.svg";

function App() {
  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ArchRef = useRef(null);
  const ProjectRef = useRef(null);
  const [srollState, setScrollState] = useState(0);
  function onScroll() {
    if (window.scrollY >= 820) {
      setScrollState(1);
    } else {
      setScrollState(0);
    }
  }
  useEffect(() => {
    if (window.scrollY >= 820) {
      setScrollState(1);
    } else {
      setScrollState(0);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <StContainer srollState={srollState}>
      <Header
        AboutRef={AboutRef}
        SkillsRef={SkillsRef}
        ArchRef={ArchRef}
        ProjectRef={ProjectRef}
      />
      <MainPage HomeRef={HomeRef} AboutRef={AboutRef} />
      <AboutMe AboutRef={AboutRef} />
      <SkillsPage SkillsRef={SkillsRef} />
      <Archiving ArchRef={ArchRef} />
      <Projects ProjectRef={ProjectRef} />
      <div
        className="top"
        onClick={() =>
          HomeRef.current.scrollIntoView({
            block: "start",
            behavior: "smooth",
          })
        }
      >
        <img src={pageup} alt={pageup} />
      </div>
    </StContainer>
  );
}

export default App;

const StContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: fit-content;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    height: 20%; /* 스크롤바의 길이 */
    background: var(--gray5); /* 스크롤바의 색상 */
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: none; /*스크롤바 뒷 배경 색상*/
  }
  .swiper-pagination-bullet {
    background-color: #f4623a;
  }
  .top {
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background-color: #fff;
    cursor: pointer;
    opacity: 0.5;
    display: ${(props) => (props.srollState ? "flex" : "none")};
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
