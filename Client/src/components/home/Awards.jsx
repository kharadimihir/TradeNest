import React from "react";
import largestBroker from "../../assets/largestBroker.svg";
import pressLogo from "../../assets/pressLogos.png";
const Awards = () => {
  return (
    <div className="flex items-center justify-center mx-auto p-5 gap-48 mt-24 w-full h-full">
      <div>
        <img src={largestBroker} alt="" />
      </div>
      <div className="flex flex-col p-3 py-4 items-center justify-between w-[35%] h-[359px]">
        <div>
          <h1 className="text-4xl font-semibold mb-4">
            Largest stock broker in India
          </h1>
          <p className="text-black text-md">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
        </div>
        <div className="flex gap-16">
          <div>
            <ul className="list-disc list-inside space-y-3">
              <li>Futures and options</li>
              <li>Commodity and derivatives</li>
              <li>Currency derivatives</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-3">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>
        </div>
        <div>
          <img src={pressLogo} alt="pressLogos" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
