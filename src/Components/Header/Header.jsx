import React, { useState, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import { themeModeContext } from "../../Context/themeContext";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { gsap } from "gsap";
import NotifBox from "./NotifBox";

function Header({ login }) {
  const [sticky, setSticky] = useState(false);
  const [notif, setNotif] = useState(false);
  const themeMode = useContext(themeModeContext);

  window.onscroll = function () {
    if (window.pageYOffset > 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    gsap.to(".header", 0.0, { y: -60, opacity: 0 });

    setTimeout(() => {
      gsap.to(".header", 0.4, { y: 0, opacity: 1 });
    }, 200);
  }, []);

  return (
    <nav
      className={`text-black z-30 header dark:text-white text11 sticky top-0 border-b border-color_border_70 dark:border-color_border_40 flex content-center justify-between px-8  pb-[2px] text-sm items-center ${
        sticky && "bg-background_body dark:bg-background_body_dark"
      }`}
    >
      <div className="p-0 pr-4 flex items-center h-full">
        <Left />
      </div>
      <div className=" flex-1 flex items-center  ">
        <ul
          className=" justify-start items-center p-0 m-0 px-1 pt-1 pb-1 gap-5 text-sm hidden md:flex"
          style={{ fontSize: "15px", fontWeight: "500" }}
        >
          <li className="pt-1 m-0  border-l border-color_border_70 dark:border-color_border_40 pl-4">
            Other Sports
          </li>
        </ul>
      </div>
      <div className=" flex items-center">{login ? <Login /> : <Right />}</div>
    </nav>
  );
}

function Left() {
  const [notif, setNotif] = useState(false);
  const themeMode = useContext(themeModeContext);
  return (
    <ul
      className="flex justify-start content-center h-full items-center p-0 m-0 gap-5 text-sm"
      style={{ fontSize: "15px", fontWeight: "500", border: "0" }}
    >
      <li className="pt-4 m-0 font-AcuminProBold font-bold cursor-pointer pb-3">
        <Link to={"/"}>VC</Link>
      </li>
      <li className="pt-4 m-0 hidden md:block cursor-pointer h-full pb-3">
        <Link to="/explore" className="anchor  h-full py-4">
          Explore
        </Link>
        <div className="anchorDiv bg-background_body shadow-xl"></div>
      </li>
      <li className="pt-4 m-0 hidden md:block cursor-pointer pb-3">
        <Link to={"/football"}>Football</Link>
      </li>
      <li className="pt-4 m-0 hidden md:block cursor-pointer pb-3">NFL</li>
      <li className="pt-4 m-0 hidden md:block cursor-pointer pb-3 ">NBA</li>
      <li className="pt-4 m-0 hidden md:block cursor-pointer pb-3 ">Matches</li>
    </ul>
  );
}

function Right() {
  const [notif, setNotif] = useState(false);
  const themeMode = useContext(themeModeContext);
  return (
    <div>
      <ul
        className="flex justify-start content-center  items-center p-0 m-0 gap-3 h-full text-sm"
        style={{ fontSize: "15px", fontWeight: "500" }}
      >
        <li className=" m-0 text-xl cursor-pointer border rounded-full p-1 border-color_border_20 dark:border-color_border_50">
          <NavLink to={"/search"}>
            <CiSearch />
          </NavLink>
        </li>
        <li
          className="pt-0 m-0 text-xl cursor-pointer"
          onClick={themeMode.toggleLoginMode}
        >
          <MdDarkMode />
        </li>
        <li
          className=" m-0 text-xl cursor-pointer relative notif h-full py-[16px] pt-[17px]"
          onMouseEnter={() => setNotif(true)}
          onMouseLeave={() => setNotif(false)}
        >
          <span>
            <IoIosNotifications />
          </span>
          <div
            onMouseEnter={() => setNotif(true)}
            onMouseLeave={() => setNotif(false)}
            className="notifDiv max-h-[80vh] overflow-y-auto bg-background_body shadow-xl transition-all delay-150 z-30 mt-[17px] right-0 translate-x-48 rounded-lg"
            tabIndex={1}
          >
            <NotifBox />
          </div>
        </li>
        <li className="pt-0 m-0">
          <Link to={"/login"}>
            <button className="w-24 text-center dark:border-color_border_40 justify-center font-bold rounded-full hidden md:flex border text-[14px] border-color_border_70 px-5 py-1 pt-2">
              Log in
            </button>
          </Link>
        </li>
        <li className="pt-0 m-0">
          <button className="w-24 text-center dark:border-color_border_40 justify-center font-bold rounded-full hidden md:flex border text-[14px] border-color_border_70 bg-theme_200 text-white px-5 py-1 pt-2">
            Sign Up
          </button>
        </li>
      </ul>
      <div
        className={`fixed ${
          notif ? "opacity-100" : " opacity-0 hidden"
        } top-0  left-0 w-[98.6vw] transition-all delay-150 z-[-1] h-screen bg-gradient-to-b from-black/10 via-black/5 to-black/5 `}
      ></div>
    </div>
  );
}

function Login() {
  const [notif, setNotif] = useState(false);
  const themeMode = useContext(themeModeContext);
  return (
    <ul
      className="flex justify-start content-center  items-center p-0 m-0 gap-3 h-full text-sm"
      style={{ fontSize: "15px", fontWeight: "500" }}
    >
      <li className=" m-0 text-xl cursor-pointer border rounded-full p-1 border-color_border_20 dark:border-color_border_50">
        <NavLink to={"/search"}>
          <CiSearch />
        </NavLink>
      </li>
      <li className="pt-0 m-0">
        <Link to={"/login"}>
          <button className="w-24 text-center dark:border-color_border_40 justify-center font-bold rounded-full hidden md:flex border text-[14px] border-color_border_70 px-5 py-1 pt-2">
            Share Your Work
          </button>
        </Link>
      </li>
      <li
        className="pt-0 m-0 text-xl cursor-pointer"
        onClick={themeMode.toggleLoginMode}
      >
        <MdDarkMode />
      </li>
      <li
        className=" m-0 text-xl cursor-pointer relative notif h-full py-[16px] pt-[17px]"
        onMouseEnter={() => setNotif(true)}
        onMouseLeave={() => setNotif(false)}
      >
        <span>
          <IoIosNotifications />
        </span>
        <div
          onMouseEnter={() => setNotif(true)}
          onMouseLeave={() => setNotif(false)}
          className="notifDiv max-h-[80vh] overflow-y-auto bg-background_body shadow-xl transition-all delay-150 z-30 mt-[17px] right-0 translate-x-48 rounded-lg"
          tabIndex={1}
        >
          <NotifBox />
        </div>
      </li>
    </ul>
  );
}

export default Header;
