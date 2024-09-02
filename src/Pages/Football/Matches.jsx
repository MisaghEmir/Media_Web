import React from "react";
import Header from "../../Components/Header/Header";

function Matches() {
  return (
    <div>
      <Header styk={true} />
      <div className="w-full top-0 relative mt-[-60px]">
        <img
          src="/image/test/8.jpg"
          className="w-full h-[291px] object-cover "
          alt=""
        />
        <div className=" absolute w-full h-full top-0 left-0 z-10 bg-black opacity-45 flex justify-center items-center">
          
        </div>
        <div className=" absolute w-full h-full top-0 left-0 z-20 flex flex-col justify-center items-center">
            <p className="text-white text-7xl opacity-100 font-SourceSansProBold mt-10">

            Browse Matches
            </p>
            <p className=" text-[27px] mt-3 text-color_text_27 opacity-100 font-SourceSansProBold">

            Find the perfect asset for your next project
            </p>
        </div>
      </div>
      <main className="grid grid-cols-12">
        <div className="col-span-4 border-r border-color_border_70"></div>
        <div className="col-span-8"></div>
      </main>
    </div>
  );
}

export default Matches;
