import React from "react";
import BigNews from "../Components/News/BigNews";
import SmNews from "../Components/News/SmNews";
import Label from "../Components/News/Label";
import RowNews from "../Components/News/RowNews";

function Home() {
  return (
    <div className="mt-32 overflow-x-hidden">
      {/* // HEAD ------------------------------------------
      //--------------------------------------------------- */}
      <div className=" relative flex ">
        <div className="  w-40 pt-16">
          <div className=" relative">
            <img
              className=" left-[-6.1rem] border object-cover rounded-xl  border-color_border_40 mt-3 top-0 absolute opacity-40"
              src="./image/random/random3.webp"
              alt=""
            />
          </div>
          <div className=" relative mt-56">
            <img
              className=" left-[-3.1rem] border h-36 object-cover rounded-xl     w-52 border-color_border_40 top-0 absolute opacity-40"
              src="./image/random/random4.webp"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center px-20 border-b border-color_border_60 pb-72">
          <div className=" text-5xl">
            <h1
              className="text11 text-color_text_11 m-0 dark:text-color_text_29 text-center text-[90px] font-AcuminProBold"
              style={{ lineHeight: "83px" }}
            >
              The World’s <br />
              <span className="  text-theme_100 m-0">Best Creators</span>
              <br />
              Are On Behance
            </h1>
          </div>
          <p
            className=" text-[22px] text-color_text_20 text-center mt-10"
            style={{ lineHeight: "30px" }}
          >
            A comprehensive platform to help hirers and creators navigate the
            creative world from discovering inspiration, to connecting with one
            another
          </p>
          <div className="flex mt-16 gap-3">
            <button className="w-48 py-[7px] pt-[10px] bg-theme_200 text-[18px] hover:bg-theme_100 font-bold rounded-full text-color_text_30">
              Hire a Freelancer
            </button>
            <button className="w-48 py-[7px] pt-[10px] bg-theme_900 border border-color_border_80 text-[18px]  font-bold rounded-full text-theme_100">
              Hire Freelancers
            </button>
          </div>
        </div>
        <div className="  w-40 pt-10">
          <div className=" relative">
            <img
              className=" right-[-6.1rem] border object-cover rounded-xl h-28 w-52 border-color_border_40 mt-3 top-0 absolute opacity-40"
              src="./image/random/peakpx.jpg"
              alt=""
            />
          </div>
          <div className=" relative mt-40">
            <img
              className=" right-[-3.1rem] border h-52 object-cover rounded-xl w-52 border-color_border_40 top-0 absolute opacity-40"
              src="./image/random/7.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* // MAIN ------------------------------------------
      //--------------------------------------------------- */}
      <div className="md:px-16 mt-20">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 ">
            <div className="flex px-4">
              <div>
                <Label title={"Football"} rounded={true} />
              </div>
              <BigNews />
            </div>
            <div className="px-4 flex mt-20">
              <div>
                <Label title={"Football"} rounded={true} />
              </div>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6">
                  <SmNews />
                </div>
                <div className="col-span-6">
                  <SmNews />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 px-4">
            <div>
              <div>
                <Label title={"Football"} rounded={false} />
              </div>
              <SmNews />
              <div className="mt-20">
                <RowNews />
                <RowNews />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12"></div>
      </div>
    </div>
  );
}

export default Home;
