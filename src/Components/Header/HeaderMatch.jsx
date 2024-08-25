import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Example from "../Elements/Example";

function HeaderMatch() {
  const swiper = useSwiper();
  return (
    <header className="flex  border-blue-100 py-1 pr-20 bg-color_bg_29">
      <div className="flex items-center px-4 py-2">
        <Example />
      </div>
      <div className="flex items-center">
        <button className=" bg-theme_200 text-color_text_30 px-[3px] py-3 rounded-s-lg" onClick={() => swiper.slideNext()}>
         <IoIosArrowBack />
        </button>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="border-r border-l border-color_border_40"
      >
        <SwiperSlide>
          <div className="">
            <div></div>
            <div className="flex">
              <div className="flex-col w-40 px-3">
                <div className="flex-1 flex-col justify-between items-center">
                  <section className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <img
                        src="http://localhost:8080/image/teams/Barcelona.png"
                        className="w-5 h-5"
                        alt=""
                      />
                      <small className="text-[12px]">Barcelona</small>
                    </div>
                    <span>-</span>
                  </section>
                  <section className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        src="http://localhost:8080/image/teams/Real Madrid.png"
                        className="w-5 h-5"
                        alt=""
                      />
                      <small className="text-[12px]">Real Madrid</small>
                    </div>
                    <span>-</span>
                  </section>
                </div>
              </div>
              <div className="flex-col w-40 px-3">
                <div className="flex-1 flex-col justify-between items-center">
                  <section className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <img
                        src="http://localhost:8080/image/teams/Barcelona.png"
                        className="w-5 h-5"
                        alt=""
                      />
                      <small>Barcelona</small>
                    </div>
                    <span>-</span>
                  </section>
                  <section className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        src="http://localhost:8080/image/teams/Real Madrid.png"
                        className="w-5 h-5"
                        alt=""
                      />
                      <small>Real Madrid</small>
                    </div>
                    <span>-</span>
                  </section>
                </div>
              </div>
              <div className="flex-col w-40 px-3">
                <div className="flex-1 flex-col justify-between items-center">
                  <section className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <img
                        src="http://localhost:8080/image/teams/Barcelona.png"
                        className="w-5 h-5"
                        alt=""
                      />
                      <small>Barcelona</small>
                    </div>
                    <span>0</span>
                  </section>
                  <section className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        src="http://localhost:8080/image/teams/Real Madrid.png"
                        className="w-5 h-5"
                        alt=""
                      />
                      <small>Real Madrid</small>
                    </div>
                    <span>3</span>
                  </section>
                </div>
              </div>
              <div className="flex-col w-40 px-3">
                <div className="flex-1 flex-col justify-between items-center">
                  <section className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <img
                        src="http://localhost:8080/image/teams/Barcelona.png"
                        className="w-5 h-5"
                        alt=""
                      />
                      <small>Barcelona</small>
                    </div>
                    <span>-</span>
                  </section>
                  <section className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        src="http://localhost:8080/image/teams/Real Madrid.png"
                        className="w-5 h-5"
                        alt=""
                      />
                      <small>Real Madrid</small>
                    </div>
                    <span>-</span>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <div className="flex items-center">
        <button className=" bg-theme_200 text-color_text_30 px-[3px] py-3 rounded-e-lg" onClick={() => swiper.slideNext()}>
         <IoIosArrowForward  />
        </button>
      </div>
    </header>
  );
}

export default HeaderMatch;
