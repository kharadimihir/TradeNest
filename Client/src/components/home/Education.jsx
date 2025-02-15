import React from "react";
import education from "../../assets/education.svg";

const Education = () => {
  return (
    <div className="flex items-center justify-center mx-auto p-5 gap-48 mt-24 w-full h-full">
      <div>
        <img src={education} alt="Education.img" />
      </div>
      <div className="flex flex-col py-5 px-4 justify-between w-[35%] h-[359px]">
        <div>
          <h1 className="text-2xl font-semibold">
            Free and open market education
          </h1>
        </div>
        <div>
          <p className="text-black mb-4">
            Versity, the largest online market eduation book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a className="text-blue-700" href="/">
            Versity &nbsp;{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div>
          <p className="text-black mb-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a className="text-blue-700" href="/">
            TradingQ&A &nbsp;{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Education;
