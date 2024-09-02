import React from "react";
import Navigation from "../../Components/Football/Navigation";
import Label from "../../Components/News/Label";
import BigNews from "../../Components/News/BigNews";
import SmNews from "../../Components/News/SmNews";
import RowNews from "../../Components/News/RowNews";

function Football() {
  return (
    <div>
      <Navigation title={'Football'} image={'http://localhost:8080/image/football/football.png'} />
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

export default Football;
