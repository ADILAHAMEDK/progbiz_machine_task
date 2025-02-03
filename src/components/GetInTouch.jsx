import React from "react";
import ac from "../assets/images/ac.png";
import b from "../assets/images/b.png";
import icon from "../assets/images/icon.png";
import bb from "../assets/images/bb.png";

const GetInTouch = () => {
  return (
    <div className="mt-5 md:mt-20">
      <div className="relative">
        <img src={ac} alt="img" className="w-full h-[750.86px] object-cover" />
        <div className=" px-3 md:pl-10 md:pr-30 absolute top-5 md:top-40 w-full flex flex-col lg:flex-row gap-2">
          {/* Left Column */}
          <div className="lg:w-[50%] border px-5 lg:px-0">
            <h4 className="font-sans font-medium text-[12px] leading-[26px] text-white">
              Get in touch now
            </h4>
            <h1 className="font-sans font-[600] text-[30px] leading-[26px] sm:text-[60px] sm:leading-[76px] text-white">
              Ready to Upgrade{" "}
              <span className="block md:inline">Your Cooling?</span>
            </h1>
            <p className="mt-2 md:mt-0 w-full max-w-[441px] font-sans font-normal text-[16px] leading-[26px] text-white">
              Tellus rutrum tellus pellentesque eu. Sagittis purus sit amet
              volutpat. Sed ullamcorper tellus rutrum tellus pellentesque eu.
              Sagittis purus sit
            </p>
            <img
              src={b}
              alt="img"
              className="mt-2 md:mt-0 w-[120px] md:w-[198.78px] h-[40px] md:h-[63.33px]"
            />
          </div>

          {/* Right Column */}
          <div className="mt-3 md:mt-0 px-5 py-2 md:py-7 lg:px-25 lg:py-10 w-full lg:w-[50%] border bg-[#f9f9f9] rounded-[10px]">
            <div className="flex items-center gap-2">
              <img src={icon} alt="icon" className=" w-[13px] md:w-[18px]" />
              <h4 className="font-sans font-normal text-[18px] md:text-[24px] leading-[34px] text-[#171717]">
                Let’s Connect
              </h4>
            </div>
            <div className="mt-1 flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="px-2 py-2 md:py-0 w-full lg:w-[206px]  md:h-[60px] rounded-[10px] bg-[#bdc4cb33] placeholder:text-[#878787]"
              />
              <input
                type="email"
                placeholder="Enter your mail"
                className="px-2 py-2 md:py-0 w-full lg:w-[206px] md:h-[60px] rounded-[10px] bg-[#bdc4cb33] placeholder:text-[#878787]"
              />
            </div>
            <input
              type="text"
              placeholder="Enter your Phone Number"
              className="mt-5 px-2 py-2 md:py-0 w-full lg:w-[206px] md:h-[60px] rounded-[10px] bg-[#bdc4cb33] placeholder:text-[#878787]"
            />
            <div className="mt-3 md:mt-5 flex flex-wrap gap-6">
              <div className="flex items-center gap-1">
                <input type="checkbox" />
                <span>Purchase</span>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" />
                <span>Installation</span>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" />
                <span>Services</span>
              </div>
            </div>
            <textarea
              placeholder="Enquiry"
              className="mt-5 px-2 py-5 w-full lg:w-[447px] md:h-[152px] rounded-[10px] bg-[#bdc4cb33] placeholder:text-[#878787]"
            />
            <img
              src={bb}
              alt="img"
              className="mt-3 md:mt-5 w-[150px] md:w-[234.75px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
