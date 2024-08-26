import React from "react";

function Footer() {
  return (
    <div className="text-color_text_20 font-bold bg-background_body dark:bg-background_body_dark text410  dark:text-white fixed bottom-0 left-0 w-full h-[33px] text-[11px] ">
      <div className="border-color_border_80 border-t dark:border-color_border_40 w-full h-full flex items-center">
        <div className="flex">
          <div className="flex justify-center px-7 border-l border-color_border_60">
            More Victory City
          </div>
          <div className="flex justify-center px-7 border-l border-color_border_60">
            English
          </div>
          <div className="flex justify-center px-7 border-l border-color_border_60">
            Try Victory City Pro
          </div>
          <div className="flex justify-center px-7 border-l border-color_border_60">
            More Victory City
          </div>
        </div>
        <div className="flex gap-5">
          <div>TOU</div>
          <div>Privacy</div>
          <div>Community</div>
          <div>Help</div>
          <div>Cookie preferences</div>
          <div>Do not sell or share my personal information</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
