import React from "react";
import { useDispatch } from "react-redux";


function ProfileBox() {
  const dispatch = useDispatch()
  return (
    <div className=" font-SourceSansProBold py-2">
      <div className="flex-col px-12 py-5 flex items-center w-full justify-center  font-bold  font-SourceSansProBold border-b border-color_border_70">
        <div>
          <img
            src="/image/tools/zoom-230.png"
            className="w-[89px] h-[89px] border-4 rounded-full"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-color_text_00 font-bold text-[20px]">
            Emir Misagh
          </h1>
          <p className="text-color_text_19 text-[14px]">
            misagh.amir@yahoo.com
          </p>
          <button className="w-[285px] mt-3 py-1 rounded-full bg-theme_200 text-[14px] text-white font-bold">
            Upgrade to Pro
          </button>
        </div>
      </div>
      <div className="p-1 text-sm">
        <ul className="px-1 py-1">
          <li className="px-6 pr-2 py-2 hover:bg-color_bg_28 rounded-md">
            <a
              role="menuitem"
              class=" "
              href="https://www.behance.net/emirmisagh/availability"
            >
              <p class="font-bold">
                Edit My Availability
              </p>
              <p class="text-color_text_20 text-[13px]">
                Fulltime • Freelance (Within the next few weeks)
              </p>
            </a>
          </li>
          <li>
            <hr className="my-2" />
          </li>
          <li className="px-6 pr-2 py-2 hover:bg-color_bg_28 rounded-md">
            <a
              role="menuitem"
              class=" "
              href="https://www.behance.net/emirmisagh/availability"
            >
              <p class="font-bold">
                Victory City Profile
              </p>
             
            </a>
          </li>
          <li className="px-6 pr-2 py-2 hover:bg-color_bg_28 rounded-md">
            <a
              role="menuitem"
              class=" "
              href="https://www.behance.net/emirmisagh/availability"
            >
              <p class="font-bold">
                Victory City Profile
              </p>
             
            </a>
          </li>
          <li className="px-6 pr-2 py-2 hover:bg-color_bg_28 rounded-md">
            <a
              role="menuitem"
              class=" "
              href="https://www.behance.net/emirmisagh/availability"
            >
              <p class="font-bold">
                Victory City Profile
              </p>
             
            </a>
          </li>
          <li className="px-6 pr-2 py-2 hover:bg-color_bg_28 rounded-md">
            <a
              role="menuitem"
              class=" "
              href="https://www.behance.net/emirmisagh/availability"
            >
              <p class="font-bold">
                Victory City Profile
              </p>
             
            </a>
          </li>
          <li className="px-6 pr-2 py-2 hover:bg-color_bg_28 rounded-md">
            <a
              role="menuitem"
              class=" "
              href="https://www.behance.net/emirmisagh/availability"
            >
              <p class="font-bold">
                Victory City Profile
              </p>
             
            </a>
          </li>
          <li>
            <hr className="my-2" />
          </li>
          <li className="px-6 pr-2 py-2 hover:bg-color_bg_28 rounded-md">
            <a
              role="menuitem"
              class=" "
              href="https://www.behance.net/emirmisagh/availability"
            >
              <p class="font-bold">
                Victory City Profile
              </p>
             
            </a>
          </li>
          <li className="px-6 pr-2 py-2 hover:bg-color_bg_28 rounded-md">
            <a
              role="menuitem"
              class=" "
              href="https://www.behance.net/emirmisagh/availability"
            >
              <p class="font-bold">
                Victory City Profile
              </p>
             
            </a>
          </li>
          <li>
            <hr className="my-2" />
          </li>
          <li className="px-6 pr-2 py-2 hover:bg-color_bg_28 rounded-md" onClick={() =>{
            dispatch({
              type: 'logout'
            })
          }}>
         
              <p class="font-bold">
              Sign out
              </p>
             
          
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileBox;
