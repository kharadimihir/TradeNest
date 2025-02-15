import React from "react";
import ecosystem from "../../assets/ecosystem.png";

const Stats = () => {
  return (
    <div className="flex w-full h-full gap-48 items-center justify-center mx-auto p-3  mt-24">
      <div className="flex flex-col gap-10 w-[29%] p-3">
        <h2 className="text-4xl font-semibold">Trust with confidence</h2>
        <div>
          <h1 className="text-2xl font-semibold">Customer-first always </h1>
          <p className="text-gray-500 mt-2">
            That&apos;s why 1.3+ crore customers trust Zerodha with 3.5+ lakh
            crores worth of equity investments.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">No spam or gimmicks </h1>
          <p className="text-gray-500 mt-2">
            No gimmicks, spam, &quot;gamification&quot;, or annoying push
            notifications. High quality apps that you use at your pace, the way
            you like.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">The Zerodha universe </h1>
          <p className="text-gray-500 mt-2">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.{" "}
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Do better with money </h1>
          <p className="text-gray-500 mt-2">
            With initiatives like Nudge and Kill Switch, we don&apos;t just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
      </div>
      <div className="p-3 h-full">
        <img className="h-[600px] w-[550px]" src={ecosystem} alt="ecosystem" />
        <a className="text-blue-700 ml-16 pl-10" href="/">
          Explore our products &nbsp;{" "}
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
        <a className="text-blue-700 ml-16 pl-5" href="/">
          Try Kite{" "}
        </a>
      </div>
    </div>
  );
};

export default Stats;
