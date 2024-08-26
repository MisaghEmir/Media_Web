import React, { useEffect, useState } from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Toggle from "../Components/Elements/Toggle";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function Login() {
  const [emailCheck, setEmailCheck] = useState(false);

  useEffect(() => {
    gsap.to(".email", 0.0, { opacity: 0 });
    gsap.to(".email", 0.4, { x: 60 });
    gsap.to(".logo", 0.0, { opacity: 0 });
    gsap.to(".logo", 0.4, { y: 60 });

    setTimeout(() => {
      gsap.to(".email", 0.4, { x: 0, opacity: 1 });
      gsap.to(".logo", 0.4, { y: 0, opacity: 1 });
    }, 200);
  }, []);

  const clickHandle = (submit) => {
    switch (submit) {
      case "general":
        gsap.to(".email", 0.4, { x: -30, opacity: 0 });
        gsap.to(".password", 0.4, { x: 60 });
        setTimeout(() => {
          setEmailCheck(true);
          gsap.to(".password", 0.4, { x: 0, opacity: 1 });
        }, 180);
        break;
      case "biling":
        gsap.to(".password", 0.4, { x: -30, opacity: 0 });
        gsap.to(".email", 0.4, { x: 60 });
        setTimeout(() => {
          setEmailCheck(false);
          gsap.to(".email", 0.4, { x: 0, opacity: 1 });
        }, 180);
        break;
      default:
        break;
    }
  };
  return (
    <div className=" relative flex  overflow-hidden font-AdobeCleanLight">
      <div className="z-[-2] fixed w-full h-full overflow-hidden">
        <img
          src="./image/random/random1.jpg"
          className="w-full h-full"
          alt=""
        />
      </div>
      <div className="z-[-1] flex bg-background_body_dark opacity-60 fixed w-full h-full overflow-hidden"></div>
      <div className="z-[0] flex justify-between fixed w-full h-full overflow-hidden">
        <div className="flex-1 flex items-center justify-center">
          <Link to="/">
            <h1 className=" logo text-color_text_27 mr-52 mt-24 text-4xl flex font-bold items-center font-SourceSansPro ">
              <span className="p-[2px] mr-3 bg-black px-2  rounded-lg text-2xl">
                VC
              </span>
              Victory City
            </h1>
          </Link>
        </div>
        <div className="flex-1 flex justify-start items-center">
          <div
            className={`${
              emailCheck && "hidden"
            } email bg-background_body dark:bg-background_body_dark rounded-md p-12 px-16`}
          >
            <div className="pb-11 border-b border-color_border_70">
              <h1 className="text-3xl font-bold font-AcuminPro">Sign in</h1>
              <p className="my-3 text-color_text_17 font-bold">
                New user?{" "}
                <span className=" text-theme_100">Create an account</span>
              </p>
              <div className="mt-10">
                <label
                  htmlFor=""
                  className="text-sm font-bold text-color_text_17"
                >
                  Email address
                </label>
                <br />
                <input
                  type="text"
                  className="w-full mt-2 outline-none py-[6px] pt-[4px] text-sm px-3 border border-color_border_70 focus:border-color_border_0 rounded-[4px]"
                />
                <div className=" flex justify-end">
                  <button
                    onClick={() => clickHandle("general")}
                    className="w-24 mt-5 text-center justify-center font-bold rounded-full hidden md:flex border text-[14px] border-color_border_70 bg-theme_200 text-white px-5 py-2 pt-1"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10 relative flex justify-center flex-col">
              <span className=" absolute top-[-70px] left-[168px] bg-background_body p-4">
                Or
              </span>
              <button className="w-96 items-center py-3 font-AcuminPro mt-4 text-center justify-center font-bold rounded-full hidden md:flex border  border-color_border_70 hover:border-color_border_40 text-color_text_00 ">
                <span className="text-3xl mr-4 items-center flex">
                  <FcGoogle />
                </span>
                Continue with Google
              </button>
              <button className="w-96 items-center py-3 mt-4 font-AcuminPro text-center justify-center font-bold rounded-full hidden md:flex border  border-color_border_70 hover:border-color_border_40 text-color_text_00 ">
                <span className="text-3xl mr-4 ">
                  <FaFacebook />
                </span>
                Continue with Facebook
              </button>
              <button className="w-96 items-center py-3 mt-4 font-AcuminPro text-center justify-center font-bold rounded-full hidden md:flex border  border-color_border_70 hover:border-color_border_40 text-color_text_00 ">
                <span className="text-3xl mr-4 ">
                  <FaApple />
                </span>
                Continue with Apple
              </button>
              <span className="flex justify-center mt-4 text-sm font-AcuminPro text-theme_100">
                View more
              </span>
              <span className="flex mt-8 text-sm font-AcuminPro text-theme_100">
                Get help signing in
              </span>
            </div>
          </div>
          <div
            className={`${
              !emailCheck && "hidden"
            } password bg-background_body dark:bg-background_body_dark rounded-md p-12 px-16`}
          >
            <div className="pb-40 border-b border-color_border_70">
              <h1 className="text-3xl font-bold font-AcuminPro">
                Enter your password
              </h1>
              <div className="flex items-center justify-start gap-4 mt-9">
                <img
                  src="./image/tools/zoom-230.png"
                  className="w-16 h-16"
                  alt=""
                />
                <div className="flex-col items-center py-4 justify-center font-AcuminPro text-color_text_19 text-sm">
                  <p className="m-0 p-0 " style={{ lineHeight: "14px" }}>
                    misagh.amir@yahoo.com
                    <br />
                    <small className="m-0 p-0 text-sm">Personal Account</small>
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <label
                  htmlFor=""
                  className="text-sm font-bold text-color_text_17"
                >
                  Password
                </label>
                <br />
                <input
                  type="password"
                  className="w-96 mt-2 outline-none py-[6px] pt-[4px] text-sm px-3 border border-color_border_70 focus:border-color_border_0 rounded-[4px]"
                />
                <div className=" flex justify-between items-center">
                  <div className="pt-6 flex items-center gap-2">
                    <Toggle handle={() => {}} value={true} />
                    <p className="font-AdobeCleanLight text-sm">
                      Stay signed in
                    </p>
                  </div>
                  <button
                    onClick={() => clickHandle("biling")}
                    className="w-24 mt-5 text-center justify-center font-bold rounded-full hidden md:flex border text-[14px] border-color_border_70 bg-theme_200 text-white px-5 py-2 pt-1"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 relative flex justify-center flex-col">
              <span className="flex mt-4 text-sm font-AcuminPro text-theme_100">
                Reset your password
              </span>
              <span className="flex mt-5 text-sm font-AcuminPro text-theme_100">
                Sign in to a different account
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
