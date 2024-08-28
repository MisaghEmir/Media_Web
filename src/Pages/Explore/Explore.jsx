import React, { useEffect } from "react";
import { gsap } from "gsap";
import ExploreSwiper from "../../Components/Elements/ExploreSwiper";
import BigNews from "../../Components/News/BigNews";
import SmNews from "../../Components/News/SmNews";
import Label from "../../Components/News/Label";
import RowNews from "../../Components/News/RowNews";

function Explore() {
  useEffect(() => {
    gsap.to(".head", 0.0, { opacity: 0 });
    gsap.to(".head", 0.4, { y: 60 });
    setTimeout(() => {
        gsap.to(".head", 0.4, { y: 0, opacity: 1 });
      }, 200);
  }, []);
  return (
    <div>
      <ExploreSwiper />
        {/* // HEAD ------------------------------------------
      //--------------------------------------------------- */}
      <div className="flex-1 flex flex-col head items-center px-20  pb-7 mt-16">
        <div className=" text-5xl">
          <h1
            className="text11 text-color_text_11 m-0 dark:text-color_text_29 text-center text-[70px] font-AcuminProBold"
            style={{ lineHeight: "63px" }}
          >
           Best of Behance
          </h1>
        </div>
        <p
          className=" text-[23px] text-color_text_20 text-center mt-1"
          style={{ lineHeight: "29px" }}
        >
       Projects featured today by our curators
        </p>
        <div className="flex mt-16 gap-3">
        
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

export default Explore;
