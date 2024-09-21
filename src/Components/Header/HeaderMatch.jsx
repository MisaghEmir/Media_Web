import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Example from "../Elements/Example";
import { NavLink } from "react-router-dom";

function HeaderMatch({ open }) {
  const [slide, setSlide] = useState(0);
  const [list, setList] = useState([
    {
      name: "bac",
    },
    {
      name: "Rmd",
    },
    {
      name: "Bry",
    },
    {
      name: "Drt",
    },
    {
      name: "Mnc",
    },
    {
      name: "Clh",
    },
    {
      name: "Mnu",
    },
    {
      name: "Liv",
    },
    {
      name: "Atc",
    },
    {
      name: "Yuv",
    },
    {
      name: "Mil",
    },
    {
      name: "Int",
    },
    {
      name: "Bondesliga",
    },
    {
      name: "Valiball",
    },
    {
      name: "Shena",
    },
    {
      name: "Shena",
    },
    {
      name: "Shena",
    },
    {
      name: "Shena",
    },
  ]);

  useEffect(() => {
    gsap.to(".headermatch", 0.0, { y: -60, opacity: 0 });

    setTimeout(() => {
      gsap.to(".headermatch", 0.4, { y: 0, opacity: 1 });
    }, 200);
  }, []);
  const swiper = useSwiper();

  const nextSlide = () => {
    const arr = list;
    gsap.to(".k3", 0.4, { opacity: 0.75, backgroundColor: "#000" });
    setTimeout(() => {
      gsap.to(".k3", 0.4, { backgroundColor: "rgb(0, 87, 255)", opacity: 1 });
    }, 200);
    setTimeout(() => {
      const index = arr.shift();
      arr.push(index);
      setList([...arr]);
    }, 300);
  };

  const prevSlide = () => {
    let arr = list;
    console.log(arr);
    gsap.to(".k3", 0.4, { opacity: 0.75, backgroundColor: "#000" });
    setTimeout(() => {
      gsap.to(".k3", 0.4, { backgroundColor: "rgb(0, 87, 255)", opacity: 1 });
    }, 200);
    setTimeout(() => {
      const index = arr[arr.length - 1];
      arr.pop();
      arr = [index, ...arr];
      console.log(arr);
      setList([...arr]);
    }, 300);
  };

  return (
    <header className="flex  border-blue-100 headermatch  pr-20 bg-color_bg_28 z-40 relative">
      <div className="flex items-center px-4 py-2">
        <Example />
      </div>
      <div className="flex items-center">
        <button
          className=" bg-theme_200 text-color_text_30 px-[3px] py-3 rounded-s-lg"
          onClick={() => setSlide(slide <= 9 ? 0 : slide - 9)}
        >
          <a href={`#anchor${slide}`}>
            <IoIosArrowBack />
          </a>
        </button>
      </div>
      <div
        style={{ scrollBehavior: "smooth" }}
        className="flex w-full overflow-hidden delay-1000 pr-10 border-r border-l border-color_border_40"
      >
        <div className="flex w-[300%] gap-3 dark:text-white">
          <div className="flex">
            <div className=" flex items-center px-10 relative" id={`anchor0`}>
              <p className="text-2xl font-bold font-SourceSansPro dark:text-white z-10">
                Laliga
              </p>
              <div className="left-0 absolute top-0 w-full h-full z-[0]">
                <img
                  src="/image/test/4.png"
                  className="w-full h-full grayscale  opacity-15 dark:opacity-20 object-cover"
                  alt=""
                />
              </div>
            </div>
            {list.map((item, index) => (
              <div
                key={index}
                id={`anchor${index + 1}`}
                className="flex-col w-40 px-3 mx-[14px] py-1 cursor-pointer"
              >
                <NavLink to={"/football/match"}>
                  <div className="flex-1 flex-col justify-between items-center">
                    <section className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <img
                          src="http://localhost:8080/image/teams/Barcelona.png"
                          className="w-5 h-5"
                          alt=""
                        />
                        <small className="text-[12px]">{item.name}</small>
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
                        <small className="text-[12px]">{item.name}</small>
                      </div>
                      <span>-</span>
                    </section>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="border-r border-l border-color_border_40"
      >
        <SwiperSlide>
          <div className="dark:text-white">
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
      </Swiper> */}
      <div className="flex items-center">
        <button
          className=" bg-theme_200 text-color_text_30 px-[3px] py-3 rounded-e-lg"
          onClick={() => setSlide(slide === 0 ? slide + 9 : slide + 5)}
        >
          <a href={`#anchor${slide}`}>
            <IoIosArrowForward />
          </a>
        </button>
      </div>
      <div
        className={`left-0 absolute top-0 h-full z-[-1] bg-background_body_dark ${open}`}
      ></div>
    </header>
  );
}

export default HeaderMatch;
