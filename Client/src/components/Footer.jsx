import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="mt-24 bg-gray-50 p-4 pt-20 border-t-[1px] border-gray-100 overflow-hidden">
      <div className="flex flex-wrap justify-center gap-24">
        <div className="space-y-6">
          <img src={logo} alt="logo" className="h-5" />
          <div>
            <p>&copy; 2010-2025, Not Zerodha Broking Ltd.</p>
            <p>All rights reserved.</p>
          </div>
          <div className="flex space-x-4 text-gray-600 mt-10">
            <i className="fab fa-twitter fa-lg cursor-pointer" aria-hidden="true"></i>
            <i className="fab fa-facebook-square fa-lg cursor-pointer" aria-hidden="true"></i>
            <i className="fab fa-instagram fa-lg cursor-pointer" aria-hidden="true"></i>
            <i className="fab fa-linkedin fa-lg cursor-pointer" aria-hidden="true"></i>
            <i className="fab fa-telegram fa-lg cursor-pointer" aria-hidden="true"></i>
          </div>
        </div>
        <div className="flex gap-48">
          <div>
            <ul className="text-gray-700 space-y-4">
              <li className="text-black font-medium">Company</li>
              <li>
                <a href="#" className="cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  Referral Programme
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  Zerodha.tech
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  Zerodha Cares (CSR)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-700 space-y-4">
              <li className="text-black font-medium">Support</li>
              <li>
                <a href="#" className="cursor-pointer">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  Support Portal
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  Z-Connect Blog
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  List of Charges
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  Downloads & Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-700 space-y-4">
              <li className="text-black font-medium">Account</li>
              <li>
                <a href="#" className="cursor-pointer">
                  Open an Account
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  Fund Transfer
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  60 Day Challenge
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-4 mt-12 mx-28 ml-32 text-justify">
        <p className="text-gray-500">
          Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
          INZ000031633 CDSL: Depository services through Zerodha Securities Pvt.
          Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through
          Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
          INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
          Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>

        <p className="text-gray-500">
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p className="text-gray-500">
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p className="text-gray-500">
          &quot;Prevent unauthorised transactions in your account. Update your
          mobile numbers/email IDs with your stock brokers. Receive information
          of your transactions directly from Exchange on your mobile/email at
          the end of the day. Issued in the interest of investors. KYC is one
          time exercise while dealing in securities markets - once KYC is done
          through a SEBI registered intermediary (broker, DP, Mutual Fund etc.),
          you need not undergo the same process again when you approach another
          intermediary.&quot; Dear Investor, if you are subscribing to an IPO,
          there is no need to issue a cheque. Please write the Bank account
          number and sign the IPO application form to authorize your bank to
          make payment in case of allotment. In case of non allotment the funds
          will remain in your bank account. As a business we don&apos;t give
          stock tips, and have not authorized anyone to trade on behalf of
          others. If you find anyone claiming to be part of Zerodha and offering
          such services, please create a ticket here.
        </p>
        <div className="text-center space-x-10 text-gray-500 font-medium">
          <a href="/">NSE</a>
          <a href="/">BSE</a>
          <a href="/">MCX</a>
          <a href="/">Terms & conditions</a>
          <a href="/">Policies & procedures</a>
          <a href="/">Privacy & policy</a>
          <a href="/">Disclosure</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
