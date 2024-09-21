import React from "react";
import { gsap } from "gsap/gsap-core";

function Match({match}) {

    const hoverHandle = () =>{
        gsap.to(`.${match}`, 0.5, { bottom: 0 });
    }
    const leaveHandle = () =>{
        gsap.to(`.${match}`, 0.5, { bottom: '-100%' });
    }
  return (
    <div className="w-full overflow-hidden hover:bg-color_bg_28 text-[94%] cursor-pointer px-5 transition-all delay-100 rounded-md"
    onMouseEnter={hoverHandle}
    onMouseLeave={leaveHandle}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col justify-center items-center flex-1">
          <div className="w-16 h-16">
            <img
              src="http://localhost:8080/image/teams/Barcelona.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="mt-4 text-center">Barcelona</div>
        </div>
        <div className="flex flex-col justify-between items-center py-6  px-8 relative">
          <p>Laliga</p>
          <h1 className="text-4xl font-bold">19:30</h1>
          <p>9 dec</p>
          <div className={`w-full overflow-hidden h-full ${match} absolute bg-theme_300 bottom-[-100%] flex items-center justify-center`}>
            <p className="text-2xl text-white font-SourceSansProBold">Betting</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center flex-1">
          <div className="w-16 h-16">
            <img
              src="http://localhost:8080/image/teams//Real Madrid.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="mt-4 text-center">Real Madrid</div>
        </div>
      </div>
    </div>
  );
}

export default Match;
