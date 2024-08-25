import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-color_bg_00 opacity-70 text-white">
      <div className="flex justify-between pl-32 border-b border-color_border_70">
        <div className="flex items-end pb-2">
            <h1 className=" text-4xl font-SourceSansProBold pl-2">
                Football
            </h1>
        </div>
        <div className="flex justify-end ">
            <img src="http://localhost:8080/image/football/football.png" className="h-20"  alt="" />
        </div>
      </div>
      <div className="flex px-32 pt-3 sticky top-0 gap-8">
        <Link href="/football" className="border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav">All</Link>
        <Link href="./" className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav">Laliga</Link>
        <Link href="./" className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1">Laliga</Link>
        <Link href="./" className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1">Laliga</Link>
        <Link href="./" className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1">Laliga</Link>
        <Link href="./" className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1">Laliga</Link>
        <Link href="./" className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1">Laliga</Link>
      </div>
    </div>
  );
}

export default Navigation;
