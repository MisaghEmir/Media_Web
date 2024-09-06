import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import AboatHeader from "../Components/Header/AboatHeader";

function Overview() {
  const [sticky, setSticky] = useState(false);
 

  return (
    <div className=" " style={{ scrollBehavior: "smooth" }}>
      <AboatHeader styk={true} />
      <div className=" ">
        <div className=" fixed bg-theme_00 z-10 flex justify-center pt-40 items-center px-64 h-screen w-screen top-0 left-0 py-96">
          <h1 className="text-6xl text-white text-center element font-SourceSansPro">
            Beautiful portfolio websites. Free with Creative Cloud.
          </h1>
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
