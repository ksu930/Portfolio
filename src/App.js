import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import SkillsPage from "./components/SkillsPage";

function App() {
  return (
    <StContainer>
      <Header />
      <MainPage />
      <SkillsPage />
    </StContainer>
  );
}

export default App;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
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
`;
