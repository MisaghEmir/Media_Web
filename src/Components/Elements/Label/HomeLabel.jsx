import React, { useEffect, useState } from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrFormClose } from "react-icons/gr";

import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function HomeLabel() {
  const [show, setShow] = useState(false);
  const scroll = useSelector((state) => state.toolsReducer.scroll);

  useEffect(() => {
    if (scroll > 250 && show === false) {
      gsap.to(".label", 0.0, { opacity: 0 });
      gsap.to(".label", 0.4, { y: 60 });

      setTimeout(() => {
        gsap.to(".label", 0.4, { y: 0, opacity: 1 });
      }, 200);
      setShow(true)
    }
  }, [scroll]);

  const CloseHandle = () => {
    gsap.to(".label", 0.4, { y: 60 });
    gsap.to(".label", 0.4, { opacity: 0 });
    // setTimeout(() => {
    //   gsap.to(".label", 0.4, { x: 0, opacity: 1 });
    // }, 200);
  };

  return (
    <div
      className={`text-color_text_12  p-16 py-7 pl-9 rounded-xl label fixed bottom-10 right-3 bg-background_body dark:bg-background_body_dark shadow-lg shadow-white ${
        !show && "hidden"
      } `}
    >
      <div className=" ">
        <h1 className="text-3xl font-bold font-AdobeCleanBlack">
          Welcome to Victory City
        </h1>
        <p className="text-xl w-80 mt-3 font-AdobeCleanUXBold" style={{ lineHeight: "23px" }}>
          Showcase your work. Find new inspiration, hand-picked just for you.
        </p>
        <div className="flex mt-3 gap-3 items-center">
            <Link to={'/login'}>
          <button
            className={`w-44 text-center dark:border-color_border_40 justify-center font-bold rounded-full hidden md:flex border text-[14px]  bg-theme_200 text-white px-5 py-1 pt-2 " border-color_border_70  "`}
            >
            Sign Up With Email
          </button>
              </Link>
          <div className="flex items-center">
            <span className="text-2xl mr-4 items-center flex">
              <FcGoogle />
            </span>
            <span className="text-2xl mr-4 ">
              <FaFacebook />
            </span>
            <span className="text-2xl mr-4 ">
              <FaApple />
            </span>
          </div>
        </div>
        <span
          className=" absolute top-2 right-3 cursor-pointer"
          onClick={CloseHandle}
        >
          <GrFormClose />
        </span>
      </div>
    </div>
  );
}

export default HomeLabel;
