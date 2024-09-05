import React from "react";

const list = [
    {
        title: "Lorem, ipsum dolor sit amet consectetur",
        descript:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nos deserunt maxime dolore rem molestiae quisquam expedita incidunt ipsum, esse neque!",
        boxTitle:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt",
      },
      {
        title: "Lorem, ipsum dolor sit amet consectetur",
        descript:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nos deserunt maxime dolore rem molestiae quisquam expedita incidunt ipsum, esse neque!",
        boxTitle:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt",
      },
    {
        title: "Lorem, ipsum dolor sit amet consectetur",
        descript:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nos deserunt maxime dolore rem molestiae quisquam expedita incidunt ipsum, esse neque!",
        boxTitle:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt",
      },
      {
        title: "Lorem, ipsum dolor sit amet consectetur",
        descript:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nos deserunt maxime dolore rem molestiae quisquam expedita incidunt ipsum, esse neque!",
        boxTitle:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt",
      },
];

function NotifBox() {
  return (
    <div className="w-[32rem] font-SourceSansProBold">
      <div className="flex justify-center text-[14px] font-bold py-3 font-SourceSansProBold border-b border-color_border_70">
        Your Notifications
      </div>
      {list.length === 0 ? (
        <div className="flex justify-center items-start py-28 text-sm font-SourceSansPro font-bold">
          You have no new Notifications
        </div>
      ) : (
        <div className="p-1">
          {list.map((item, index) => (
            <div key={index} className="flex py-3 hover:bg-color_bg_28">
              <div className=" p-4">
                <span className="p-3 rounded-full bg-theme_200 text-white">
                  VC
                </span>
              </div>
              <div className=" pr-6">
                <div>
                  <h1>{item.title}</h1>
                  <p className="text-sm font-SourceSansProBold text-color_text_20">
                    {item.descript}
                  </p>
                </div>
                <div className="flex gap-2 mt-2 p-4 bg-background_body rounded-xl w-full border border-color_border_60">
                  <div className="w-32 h-16">
                    <img
                      src="/image/random/random4.webp"
                      className="w-36 h-16 rounded-lg"
                      alt=""
                    />
                  </div>
                  <p className="text-sm">{item.boxTitle}</p>
                </div>
                <span className="text-sm text-color_text_19 font-SourceSansPro">
                  24 Days ago
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NotifBox;
