import React, { useState, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { MdDarkMode, MdEmail } from "react-icons/md";
import { useContext } from "react";
import { themeModeContext } from "../../Context/themeContext";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { gsap } from "gsap";
import ProfileBox from "./ProfileBox";
import { useSelector } from "react-redux";

function AboatHeader({ sticky }) {
  const themeMode = useContext(themeModeContext);

  const login = useSelector((state) => state.loginReducer.login);
  useEffect(() => {
    gsap.to(".headerA", 0.0, { y: -60, opacity: 0 });

    setTimeout(() => {
      gsap.to(".headerA", 0.4, { y: 0, opacity: 1 });
    }, 200);
  }, []);

  return (
    <nav className={`headerA flex justify-between shadow-2xl border border-color_border_70 items-center  sticky top-0 z-40 px-8  py-5  bg-white`}>
      <div className="p-0 pr-4 flex items-center h-full flex-1">
        <Left />
      </div>
      <div className=" flex-1 flex items-center  ">
        <Center />
      </div>
      <div className=" flex items-center flex-1">
        {login ? <Login styk={sticky} /> : <Right styk={sticky} />}
      </div>
    </nav>
  );
}

function Left() {
  return (
    <ul
      className="flex justify-start content-center h-full font-SourceSansProBold items-center p-0 m-0 gap-5 text-sm"
      style={{ fontSize: "15px", fontWeight: "500", border: "0" }}
    >
      <li className=" m-0 font-SourceSansPro cursor-pointer ">
        <Link to={"/"} className="flex items-center gap-2">
        <span className="p-[2px]  px-[6px] rounded-lg bg-black text-white text-3xl">VC</span>
        <p className="text-4xl">Victory City</p>
        </Link>
      </li>
    </ul>
  );
}

function Center() {
  return (
    <ul
      className="flex  justify-center content-center h-full items-center p-0 m-0 gap-10 font-bold font-SourceSansProBold"
    >
    
      <li className="m-0 hidden md:block  h-full ">
        <Link to="/explore" className="anchor cursor-pointer h-full py-4">
          Explore
        </Link>
     
      </li>
      <li className=" m-0 hidden md:block cursor-pointer">
        <Link to={"/football"}>Football</Link>
      </li>
      <li className=" m-0 hidden md:block cursor-pointer">NFL</li>
      <li className=" m-0 hidden md:block cursor-pointer ">NBA</li>
      <li className=" m-0 hidden md:block cursor-pointer ">
        <Link to={"/football/matches"}>Matches</Link>
      </li>
    </ul>
  );
}

function Right({ styk }) {
  return (
    <div className=" w-full">
      <ul
        className="flex justify-end content-center  items-center p-0 m-0 gap-0 h-full text-sm"
        style={{ fontSize: "15px", fontWeight: "500" }}
      >
        <li className="pt-0 m-0">
          <button
            className={` text-center justify-center font-bold rounded-full hidden md:flex text-[14px]   text-color_text_00 px-2 py-1 pt-2
            
            `}
          >
            Sign Up
          </button>
        </li>
        <li className=" m-0 text-xl cursor-pointer relative notif h-full py-[0px] pt-[0px]">
          <span>
            <img
              src="/image/logo/logo.png"
              className="w-11 h-11 bg-transparent"
              alt=""
            />
          </span>
        </li>
      </ul>
    </div>
  );
}

function Login() {
  const [notif, setNotif] = useState(false);
  return (
    <div>
      <ul
        className="flex justify-start content-center  items-center p-0 m-0 gap-3 h-full text-sm"
        style={{ fontSize: "15px", fontWeight: "500" }}
      >
        <li
          className=" m-0 text-xl cursor-pointer  relative notif h-full py-[12px]  pt-[12px]"
          onMouseEnter={() => setNotif(true)}
          onMouseLeave={() => setNotif(false)}
        >
          <span>
            <img
              src="/image/tools/zoom-230.png"
              className="w-[30px] h-[30px]"
              alt=""
            />
          </span>
          <div
            onMouseEnter={() => setNotif(true)}
            onMouseLeave={() => setNotif(false)}
            className="notifDiv max-h-[80vh] overflow-y-auto bg-background_body shadow-xl transition-all delay-150 z-30 mt-[17px] right-0 translate-x-20 rounded-md"
            tabIndex={1}
          >
            <ProfileBox />
          </div>
        </li>
        <li className=" m-0 text-xl cursor-pointer relative notif h-full py-[0px] pt-[0px]">
          <span>
            <img
              src="/image/logo/logo.png"
              className="w-11 h-11 bg-transparent"
              alt=""
            />
          </span>
        </li>
      </ul>
      <div
        className={`fixed ${
          notif ? "opacity-100" : " opacity-0 hidden"
        } top-0  left-0 w-[99.6vw] transition-all delay-150 z-[-1] h-screen bg-gradient-to-b from-black/10 via-black/5 to-black/5 `}
      ></div>
    </div>
  );
}

export default AboatHeader;
