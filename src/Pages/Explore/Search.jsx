import React, { useState } from "react";
import SearchHeader from "../../Components/Elements/SearchHeader";
import BigNews from "../../Components/News/BigNews";
import SmNews from "../../Components/News/SmNews";
import Label from "../../Components/News/Label";
import RowNews from "../../Components/News/RowNews";
import FilterBox from "../../Components/Elements/FilterBox";
import Match from '../../Components/Match/Match'

function Search() {
  const [filter, setFilter] = useState(false);
  return (
    <div>
      <div className="flex">
        <div
          className={`${
            filter ? "" : "overflow-hidden"
          } wrapper w-96 flex-1 border-r mr-3 border-color_border_70 `}
        >
          <FilterBox closeHandle={() => setFilter(false)} />
        </div>
        <div>
          <SearchHeader filterHandle={() => setFilter(true)} filter={filter} />
          {/* // MAIN ------------------------------------------
      //--------------------------------------------------- */}
          <div className="md:px-16 mt-20 flex">
            <div className=" mt-20">
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
                    <div className="mt-20">
                      <Match match={"id1"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
