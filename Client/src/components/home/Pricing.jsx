import React from "react";

const Pricing = () => {
  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center mt-24 py-5 px-8 gap-16 overflow-x-hidden">
      <div className="h-50 max-w-[450px] p-4">
        <h1 className="text-3xl font-semibold mb-7">Unbeatable pricing</h1>
        <p className="mt-7 mb-4">
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>
        <a className="text-blue-700" href="/">
          See pricing &nbsp;{" "}
          <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
        </a>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="border border-black h-48 max-w-[18rem] text-center flex flex-col items-center px-10 gap-6">
          <h1 className="text-4xl font-semibold mt-7">&#8377;0</h1>
          <p>Free equity delivery and direct mutual funds</p>
        </div>
        <div className="border border-black h-48 max-w-[18rem] text-center flex flex-col items-center px-10 gap-6">
          <h1 className="text-4xl font-semibold mt-7">&#8377;20</h1>
          <p>Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
