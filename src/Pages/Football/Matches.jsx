import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import FilterMatches from "../../Components/Match/FilterMatches";
import BigNews from "../../Components/News/BigNews";
import SmNews from "../../Components/News/SmNews";
import Label from "../../Components/News/Label";
import RowNews from "../../Components/News/RowNews";
import { StickyContainer, Sticky } from "react-sticky";
import { useSelector } from "react-redux";
import Match from "../../Components/Match/Match";

function Matches() {
  const [sticky, setSticky] = useState(false);
  const scroll = useSelector((state) => state.toolsReducer.scroll);

  useEffect(() => {
    scroll > 200 ? setSticky(true) : setSticky(false);
  }, [scroll]);

  return (
    <div className="relative ">
      <Header styk={true} />
      <div className="w-full top-0 relative mt-[-60px]">
        <img
          src="/image/test/8.jpg"
          className="w-full h-[291px] object-cover "
          alt=""
        />
        <div className=" absolute w-full h-full top-0 left-0 z-10 bg-black opacity-45 flex justify-center items-center"></div>
        <div className=" absolute w-full h-full top-0 left-0 z-20 flex flex-col justify-center items-center">
          <p className="text-white text-7xl opacity-100 font-SourceSansProBold mt-10">
            Browse Matches
          </p>
          <p className=" text-[27px] mt-3 text-color_text_27 opacity-100 font-SourceSansProBold">
            Find the perfect asset for your next project
          </p>
        </div>
      </div>
      <main className="grid grid-cols-12 px-2 mt-5 top-0  ">
        <div
          className={`col-span-3 border-r border-color_border_70  overflow-hidden `}
        >
          <div className={`${sticky && "sahar mt-20"} mt-10  px-4 notscroll`}>
            <FilterMatches />
          </div>
        </div>
        <div className="col-span-9 px-4">
          <div
           
          >
          </div>
          {/* // MAIN ------------------------------------------
          //--------------------------------------------------- */}
          <div className="grid grid-cols-12">
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id1"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id2"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id3"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id1"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id2"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id3"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id1"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id2"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id3"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id1"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id2"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id3"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id1"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id2"} />
            </div>
            <div className="col-span-6 w-full px-2 my-5">
              <Match match={"id3"} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Matches;
