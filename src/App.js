import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import styled from "styled-components";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  return (
    <StContainer>
      <Header />
      <>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <MainPage />
          </SwiperSlide>
          <SwiperSlide>
            <MainPage />
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </>
    </StContainer>
  );
}

export default App;

const StContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  .swiper-pagination-bullet {
    background-color: #f4623a;
  }
`;
