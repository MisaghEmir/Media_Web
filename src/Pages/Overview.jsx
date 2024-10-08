import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import AboatHeader from "../Components/Header/AboatHeader";
import { IoIosArrowRoundForward } from "react-icons/io";

function Overview() {
  const [sticky, setSticky] = useState(false);

  return (
    <div className=" " style={{ scrollBehavior: "smooth" }}>
      <AboatHeader styk={true} />
      <div className=" ">
        <div className=" fixed bg-theme_00 z-10 flex flex-col justify-between pt-40 items-center px-64 h-screen w-screen top-0 left-0 ">
          <div className="pt-16 flex flex-col items-center gap-10">
            <h1 className="text-6xl text-white text-center element font-SourceSansPro">
              Beautiful portfolio websites. Free with Creative Cloud.
            </h1>
            <button
              className={` text-theme_100 cursor-pointer hover:bg-theme_800 items-center text-center dark:border-color_border_40 font-SourceSansProBold bg-background_body justify-center gap-1 rounded-full flex border px-9 text-lg py-3  border-color_border_70 `}
            >
              Scroll
              <span className="text-2xl pt-[2px]">
                <IoIosArrowRoundForward />
              </span>
            </button>
          </div>
          <div className="flex">
            <div>
              <img src="/image/tools/overview3.png"  alt="" />
            </div>
          </div>
        </div>
        <div
          id={"scroll"}
          className=" fixed  h-screen w-screen overflow-y-scroll overflow-x-hidden bg-transparent z-20  top-0"
        >
          <div className="h-screen w-screen "></div>
          <div className="h-screen w-screen bg-white">amir</div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
