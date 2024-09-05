import React, { useState } from "react";
import { CiSearch, CiImageOn } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import MyCombobox from '../Elements/Combobox'
import { Calendar } from "@nextui-org/react";

const countryCombobox = [
    { id: 1, name: "Iran" },
    { id: 2, name: "Turkish" },
    { id: 3, name: "Iraq" },
  ];

function FilterMatches() {
  return (
    <div className="pb-40">
      <div>
        <div className="flex w-full items-center gap-3 transition-all delay-100 rounded-full border border-color_border_70 bg-color_bg_29 px-5 py-1">
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
      </div>
      <div className="border-t border-color_border_70 mt-5 py-6">
        <MyCombobox
          handle={() => {}}
          arr={countryCombobox}
          label={"League"}
           />
      </div>
      <div className="border-t border-color_border_70 mt-3">
        <ItemSlide title={"Date"} />
      </div>
      <div className="border-t border-color_border_70 mt-5">
        <ItemSlide title={"Date"} />
      </div>
      <div className="border-t border-color_border_70 mt-5">
        <ItemSlide title={"Date"} />
      </div>
      <div className="border-t border-color_border_70 mt-5">
        <Calendar />
      </div>
      <div className="border-t border-color_border_70 mt-5">
        <ItemSlide title={"Date"} />
      </div>
    </div>
  );
}

function ItemSlide({ title, icon }) {
  const [openDiv, setOpenDiv] = useState(true);

  const clickHandle = (e) => {
    e.target.classList.add("btn");
    e.target.classList.remove("hover:bg-bg_secend_400");
    // listLyrics.scrollTo({
    //   top: findPosition(document.getElementById(`section${index}`)) - 145,
    //   behavior: "smooth",
    // });
    setOpenDiv(!openDiv);
    setTimeout(() => {
      e.target.classList.remove("btn");
      e.target.classList.add("hover:bg-bg_secend_400");
    }, 400);
  };
  return (
    <div
      className={`flex flex-col mt-1 
                      w-full 
                      rounded-lg 
                          text-left  justify-between 
                      text-textSecond_300
                      focus:outline-none 
                      font-Libre
                      bg-none  
                      overflow-hidden
                      transition ease-in-out duration-300
                    `}
    >
      <button
        onClick={(e) => clickHandle(e)}
        className={`w-full h-full flex items-center text-sm rounded-lg
            right
            
                  px-4 text-left  justify-between flex-row gap-3 
                py-3 relative`}
      >
        <span
          className={`flex items-center gap-3 w-full h-full pointer-events-none flex-row
               
           `}
        >
          <i
            className={`
               text-lg " 
              pointer-events-none`}
          >
            <BsCalendarDate />
          </i>
          <p className="mt-[6px]">

          {title}
          </p>
        </span>
        <i
          className={`${
            openDiv ? "rotate-90" : "rotate-0"
          } pointer-events-none`}
        >
          <MdKeyboardArrowRight />
        </i>
      </button>
      <div
        className={`pt-1 pb-2 text-sm text-gray-500 ${
          openDiv ? "" : "opendiv"
        }`}
      >
        <ul className="px-6">
          <li>amir</li>
          <li>amir</li>
          <li>amir</li>
        </ul>
      </div>
    </div>
  );
}

export default FilterMatches;
