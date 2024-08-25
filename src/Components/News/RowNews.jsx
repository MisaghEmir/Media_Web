import React from "react";

function RowNews() {
  return (
    <div className=" grid grid-cols-9 mt-2 hover:bg-color_bg_29 p-1 cursor-pointer rounded-md">
      <div className="col-span-3">
        <img
          src="./image/test/1.avif"
          className="w-full h-28 object-cover rounded-md"
          alt=""
        />
      </div>
      <div className="col-span-6 flex flex-col justify-between px-2">
        <small className="text-color_text_23 text-[11px]">SAUDI ARABIA</small>
        <h3 className="text-xl font-AcuminProBold">
          All that glitters in the
        </h3>
        <p className="text-color_text_16 mt-1 text-sm">
          Lorem ipsum dolor sit amet consectetur fugiat!
        </p>
        <div className="flex mt-1">
          <small className="text-color_text_23  w-full">22/08/2024</small>
        </div>
      </div>
    </div>
  );
}

export default RowNews;
