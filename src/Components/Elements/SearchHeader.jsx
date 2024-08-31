import React, { useEffect } from "react";
import { PiSlidersLight } from "react-icons/pi";
import { CiSearch, CiImageOn } from "react-icons/ci";
import { gsap } from "gsap";

function SearchHeader({ filterHandle, filter }) {
  useEffect(() => {
    if (filter) {
      
      gsap.to(".btn", 0.0, { width: 0 });
      gsap.to(".btn", 0.0, { opacity: 0 });

      setTimeout(() => {
        gsap.to(".btn", 0.0, { display: "none" });
      }, 100);
    } else {
      gsap.to(".btn", 0.0, { width: 'auto'});
      gsap.to(".btn", 0.0, { opacity: 1 });

      setTimeout(() => {
        gsap.to(".btn", 0.0, { display: "block" });
      }, 100);
    }
  }, [filter]);
  return (
    <div className="flex border-b border-color_border_70 transition-all delay-100 font-SourceSansProBold justify-between items-center px-6">
      <div className={`py-4 px-2 btn transition-all delay-200`}>
        <button
          className="flex  text-[16px] rounded-full p-[8px] border px-6 items-center gap-2 hover:bg-color_bg_28"
          onClick={filterHandle}
        >
          <span className=" text-xl rotate-90">
            <PiSlidersLight />
          </span>
          <b className="text-lg">Filter</b>
        </button>
      </div>
      <div className="flex-1 flex items-center px-2 py-4 transition-all delay-100">
        <div className="flex rounded-full items-center w-full transition-all delay-100 relative border  px-8 pr-1 py-1 bg-color_bg_28">
          <div className="flex w-full items-center gap-3 transition-all delay-100 ">
            <span className=" text-2xl transition-all delay-100">
              <CiSearch />
            </span>
            <div className="flex-1 py-1">
              <input
                type="text"
                placeholder="Search the sports world"
                className="w-full z-30 bg-transparent transition-all delay-100 text-color_text_00 outline-none border-none"
              />
            </div>
          </div>
          <div>
            <button className="bg-background_body hover:bg-color_bg_27 font-bold text-sm gap-1 py-[9px] px-4 flex w-40 justify-center items-center rounded-full">
              <span className="text-xl text-color_text_20">
                <CiImageOn />
              </span>
              Search by Image
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center px-2">
        <div className="flex items-center p-[10px] border px-7 font-bold rounded-full border-color_border_70 hover:border-black cursor-pointer">
          Recommended
        </div>
        <span className="top-[-10px] px-2 left-8 absolute bg-background_body text-sm font-bold">
          Sort
        </span>
      </div>
    </div>
  );
}

export default SearchHeader;
