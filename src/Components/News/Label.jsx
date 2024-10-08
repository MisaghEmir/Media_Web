import React from "react";

function Label({ title, rounded }) {
  return (
    <div
      className={`${
        rounded && "rotate-[270deg]"
      } flex m-1 items-center h-full w-full justify-center`}
    >
      <p
        className="text-[9px] font-AcuminPro text-theme_100"
        style={{ letterSpacing: "1px" }}
      >
        {title}
      </p>
    </div>
  );
}

export default Label;
