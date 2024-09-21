import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-color_bg_00 opacity-70 text-white md:px-36 pt-5">
      <div className="flex justify-between">
        <div className="flex justify-between items-center gap-10">
          <div className="w-24 h-24">
            <img
              src="http://localhost:8080/image/teams/Barcelona.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className=" text-center flex items-center text-2xl font-bold">Barcelona</div>
        </div>
        <div className="flex flex-col justify-center items-center ">
            <small>20/09/2024</small>
            <p className=" text-5xl">20:30</p>
        </div>
        <div className="flex justify-between items-center gap-10">
              <div className=" text-center flex justify-center items-center text-2xl font-bold">Real Madrid</div>
          <div className="w-24 h-24">
            <img
              src="http://localhost:8080/image/teams/Real Madrid.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 pr-24 pt-3">
        <div className="flex  sticky top-0 gap-8 font-SourceSansProBold">
          <NavLink
            to="/football"
            className="border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav"
          >
            All
          </NavLink>
          <NavLink
            to="./Champions"
            className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav"
          >
            UEFA Champions League
          </NavLink>
          <NavLink
            to="./laliga"
            className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav"
          >
            Laliga
          </NavLink>
          <Link
            href="./"
            className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1"
          >
            Premier League
          </Link>
        
         
        </div>
      
      </div>
    </div>
  );
}

export default Navigation;
