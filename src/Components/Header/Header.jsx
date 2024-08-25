import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import { themeModeContext } from "../../Context/themeContext";
import { Link } from "react-router-dom";

function Header() {
  const [sticky, setSticky] = useState(false);
  const themeMode = useContext(themeModeContext);

  window.onscroll = function () {
    if (window.pageYOffset > 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <nav
      className={`text-black z-30 dark:text-white text11 sticky top-0 border-b border-color_border_70 flex content-center justify-between px-8 py-[2px] pb-0 text-sm items-center ${
        sticky && "bg-background_body dark:bg-background_body_dark"
      }`}
    >
      <div className="p-0 pr-4 flex items-center h-full">
        <ul
          className="flex justify-start content-center h-full items-center p-0 m-0 gap-5 text-sm"
          style={{ fontSize: "15px", fontWeight: "500", border: "0" }}
        >
          <li className="pt-4 m-0 font-AcuminProBold font-bold cursor-pointer pb-3">
          <Link to={'/'}>
            VC
            </Link>
          </li>
          <li className="pt-4 m-0 hidden md:block cursor-pointer  pb-3">
            Explore
          </li>
          <li className="pt-4 m-0 hidden md:block cursor-pointer pb-3">
            <Link to={'/football'}>
            Football
            </Link>
          </li>
          <li className="pt-4 m-0 hidden md:block cursor-pointer pb-3">NFL</li>
          <li className="pt-4 m-0 hidden md:block cursor-pointer pb-3">NBA</li>
          <li className="pt-4 m-0 hidden md:block cursor-pointer pb-3">Matches</li>
        </ul>
      </div>
      <div className=" flex-1 flex items-center  ">
        <ul
          className=" justify-start items-center p-0 m-0 px-1 pt-1 pb-1 gap-5 text-sm hidden md:flex"
          style={{ fontSize: "15px", fontWeight: "500" }}
        >
          <li className="pt-1 m-0 border-l border-color_border_70 pl-4">
            Other Sports
          </li>
        </ul>
      </div>
      <div className=" flex items-center">
        <ul
          className="flex justify-start content-center pt-0 items-center p-0 m-0 gap-3 text-sm"
          style={{ fontSize: "15px", fontWeight: "500" }}
        >
          <li
            className="pt-0 m-0 text-xl cursor-pointer"
            onClick={themeMode.toggleLoginMode}
          >
            <MdDarkMode />
          </li>
          <li className="pt-0 m-0 text-xl cursor-pointer">
            <IoIosNotifications />
          </li>
          <li className="pt-0 m-0">
            <Link to={"./login"}>
              <button className="w-24 text-center justify-center font-bold rounded-full hidden md:flex border text-[14px] border-color_border_70 px-5 py-1 pt-2">
                Log in
              </button>
            </Link>
          </li>
          <li className="pt-0 m-0">
            <button className="w-24 text-center justify-center font-bold rounded-full hidden md:flex border text-[14px] border-color_border_70 bg-theme_200 text-white px-5 py-1 pt-2">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
