import React from "react";
import { PiSlidersLight } from "react-icons/pi";
import { TbArrowBarToLeft } from "react-icons/tb";
import {
    BiSolidUserRectangle,
    BiSolidMicrophoneAlt,
    BiSolidCategoryAlt,
    BiSolidColor
  } from "react-icons/bi";

function FilterBox({closeHandle}) {
  return (
    <div className={` p-5 py-7 font-SourceSansProBold`}>
      <div className="flex justify-between items-center">
        <div className="w-32 flex gap-2 items-center">
          <span className=" text-xl rotate-90">
            <PiSlidersLight />
          </span>
          <b className="text-sm">Filter</b>
        </div>
        <div>
            <span className="text-xl cursor-pointer" onClick={closeHandle}>
                <TbArrowBarToLeft />
            </span>
        </div>
      </div>
      <div className="mt-4  gap-2 grid">
        <button className="w-64 text-sm border rounded-full py-2 ">News</button>
        <button className="w-64 text-sm border rounded-full py-2 ">News</button>
        <button className="w-64 text-sm border rounded-full py-2 ">News</button>
        <button className="w-64 text-sm border rounded-full py-2 ">News</button>
      </div>
      <div className="mt-6 font-SourceSansPro">
        <div className="flex items-center border-b border-color_border_70 py-5">
            <div className="flex items-center gap-2">
                <span>
                    <BiSolidCategoryAlt />
                </span>
                <p>
                Creative Field
                </p>
            </div>
        </div>
        <div className="flex items-center border-b border-color_border_70 py-5">
            <div className="flex items-center gap-2">
                <span>
                    <BiSolidCategoryAlt />
                </span>
                <p>
                Creative Field
                </p>
            </div>
        </div>
        <div className="flex items-center border-b border-color_border_70 py-5">
            <div className="flex items-center gap-2">
                <span>
                    <BiSolidCategoryAlt />
                </span>
                <p>
                Creative Field
                </p>
            </div>
        </div>
        <div className="flex items-center border-b border-color_border_70 py-5">
            <div className="flex items-center gap-2">
                <span>
                    <BiSolidCategoryAlt />
                </span>
                <p>
                Creative Field
                </p>
            </div>
        </div>
        <div className="flex items-center border-b border-color_border_70 py-5">
            <div className="flex items-center gap-2">
                <span>
                    <BiSolidColor />
                </span>
                <p>
                Color
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBox;
