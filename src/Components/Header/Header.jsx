import React, { useState, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { MdDarkMode, MdEmail } from "react-icons/md";
import { useContext } from "react";
import { themeModeContext } from "../../Context/themeContext";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { gsap } from "gsap";
import NotifBox from "./NotifBox";
import ProfileBox from "./ProfileBox";
import { useDispatch, useSelector } from "react-redux";
import { StickyContainer, Sticky } from "react-sticky";

function Header({styk}) {
  const [sticky, setSticky] = useState(false);
  const [notif, setNotif] = useState(false);
  const themeMode = useContext(themeModeContext);
  const dispatch = useDispatch()
  
  const login = useSelector((state) => state.loginReducer.login);

  window.onscroll = function () {
    dispatch({
      type: 'setscroll',
      value: window.pageYOffset
    })
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
      className={` z-30 header text11 sticky top-0 border-b  dark:border-color_border_40 flex content-center justify-between px-8  pb-[2px] text-sm items-center ${
        sticky && "bg-background_body dark:bg-background_body_dark"
      } ${styk ? sticky ? 'is-sticky text-black border-color_border_70  dark:text-white ' : 'text-white w-full font-AcuminProBold border-color_border_50' : 'text-black border-color_border_70  dark:text-white'}`}
    >
      <div className="p-0 pr-4 flex items-center h-full">
        <Left />
      </div>
      <div className=" flex-1 flex items-center  ">
        <ul
          className=" justify-start items-center p-0 m-0 px-1 pt-1 pb-1 gap-5 text-sm hidden md:flex"
          style={{ fontSize: "15px", fontWeight: "500" }}
        >
          <li className={`pt-2 m-0  border-l  dark:border-color_border_40 pl-4 ${styk ? 'border-color_border_60' : ' border-color_border_70  ' }`}>
          <Link to="/explore" className="anchorOther cursor-pointer h-full py-4">
            Other Sports
            </Link>
            <div className="anchorDivOther w-[210px]  font-SourceSansPro text-sm  text-color_text_10 bg-white translate-x-16 shadow-2xl rounded-lg">
              <ul className="pt-[14px] pb-[35px]  font-bold">
                <li className="py-[6px]">
                  <NavLink
                    className="px-6  "
                    style={{ lineHeight: "18px" }}
                    to="/search"
                  >
                    Tenis
                  </NavLink>
                </li>
                <li className="py-[6px]">
                  <NavLink
                    className="px-6"
                    style={{ lineHeight: "18px" }}
                    to="/explore"
                  >
                    Judo
                  </NavLink>
                </li>
                <li>
                  <hr className="my-[14px]" />
                </li>
                <li className="py-[4px]">
                  <a className="px-6 text-[13px] text-color_text_18" href="">
                    Search & Explore
                  </a>
                </li>
                <li className="py-[4px]">
                  <a className="px-6 text-[13px] text-color_text_18" href="">
                    Curents Galleries
                  </a>
                </li>
                <li className="py-[4px]">
                  <a className="px-6 text-[13px] text-color_text_18" href="">
                    Search & Explore
                  </a>
                </li>
                <li className="py-[4px]">
                  <a className="px-6 text-[13px] text-color_text_18" href="">
                    Curents Galleries
                  </a>
                </li>
              </ul>
            </div>
          </li>
        
        </ul>
      </div>
      <div className=" flex items-center">{login ? <Login styk={styk} /> : <Right styk={styk} />}</div>
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
      <li className="pt-5 m-0 font-AcuminProBold font-bold cursor-pointer pb-3">
        <Link to={"/"}>VC</Link>
      </li>
      <li className="pt-5 m-0 hidden md:block  h-full pb-3">
        <Link to="/explore" className="anchor cursor-pointer h-full py-4">
          Explore
        </Link>
        <div className="anchorDiv w-[210px]  font-SourceSansPro text-sm  text-color_text_10 bg-white translate-x-7 shadow-2xl rounded-lg">
          <ul className="pt-[14px] pb-[35px]  font-bold">
            <li className="py-[6px]">
              <NavLink
                className="px-6  "
                style={{ lineHeight: "18px" }}
                to="/search"
              >
                Search & Explore
              </NavLink>
            </li>
            <li className="py-[6px]">
              <NavLink
                className="px-6"
                style={{ lineHeight: "18px" }}
                to="/explore"
              >
                Curents Galleries
              </NavLink>
            </li>
            <li>
              <hr className="my-[14px]" />
            </li>
            <li className="py-[4px]">
              <a className="px-6 text-[13px] text-color_text_18" href="">
                Search & Explore
              </a>
            </li>
            <li className="py-[4px]">
              <a className="px-6 text-[13px] text-color_text_18" href="">
                Curents Galleries
              </a>
            </li>
            <li className="py-[4px]">
              <a className="px-6 text-[13px] text-color_text_18" href="">
                Search & Explore
              </a>
            </li>
            <li className="py-[4px]">
              <a className="px-6 text-[13px] text-color_text_18" href="">
                Curents Galleries
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className="pt-5 m-0 hidden md:block cursor-pointer pb-3">
        <Link to={"/football"}>Football</Link>
      </li>
      <li className="pt-5 m-0 hidden md:block cursor-pointer pb-3">NFL</li>
      <li className="pt-5 m-0 hidden md:block cursor-pointer pb-3 ">NBA</li>
      <li className="pt-5 m-0 hidden md:block cursor-pointer pb-3 ">
        <Link to={'/football/matches'}>
        Matches
        </Link>
        </li>
    </ul>
  );
}

function Right({styk}) {
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
            <button className={`w-24 text-center dark:border-color_border_40 ${styk ? 'bg-background_body text-color_text_00' : ''} justify-center font-bold rounded-full hidden md:flex border text-[14px]  px-5 py-1 pt-2 ${styk ? 'border-color_border_60' : ' border-color_border_70  ' }`}>
              Log in
            </button>
          </Link>
        </li>
        <li className="pt-0 m-0">
          <button className={`w-24 text-center dark:border-color_border_40 justify-center font-bold rounded-full hidden md:flex border text-[14px]  bg-theme_200 text-white px-5 py-1 pt-2 ${styk ? 'border-color_border_60' : ' border-color_border_70  ' }`}>
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
        <li className="pt-0 m-0">
          <Link to={"/login"}>
            <button className="w-36 text-center dark:border-color_border_40 justify-center font-bold rounded-full hidden md:flex border text-[14px] border-color_border_70 px-2 py-1 pt-2">
              Share Your Work
            </button>
          </Link>
        </li>
        {/* <li
        className="pt-0 m-0 text-xl cursor-pointer"
        onClick={themeMode.toggleLoginMode}
      >
        <MdDarkMode />
      </li> */}
        <li
          className=" m-0 text-xl cursor-pointer relative notif h-full py-[16px] pt-[17px]"
          onMouseEnter={() => setNotif(true)}
          onMouseLeave={() => setNotif(false)}
        >
          <span>
            <MdEmail />
          </span>
          <div
            onMouseEnter={() => setNotif(true)}
            onMouseLeave={() => setNotif(false)}
            className="notifDiv max-h-[80vh] overflow-y-auto bg-background_body shadow-xl transition-all delay-150 z-30 mt-[17px] right-0 translate-x-20 rounded-lg"
            tabIndex={1}
          >
            <NotifBox />
          </div>
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
            className="notifDiv max-h-[80vh] overflow-y-auto bg-background_body shadow-xl transition-all delay-150 z-30 mt-[17px] right-0 translate-x-20 rounded-lg"
            tabIndex={1}
          >
            <NotifBox />
          </div>
        </li>
        <li
          className=" m-0 text-xl cursor-pointer  relative notif h-full py-[12px]  pt-[12px]"
          onMouseEnter={() => setNotif(true)}
          onMouseLeave={() => setNotif(false)}
        >
          <span>
            <img src="/image/tools/zoom-230.png" className="w-[30px] h-[30px]" alt="" />
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

export default Header;
