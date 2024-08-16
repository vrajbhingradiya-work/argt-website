"use client";
import React from "react";
import SlideInFromBottom from "../animations/SlideInFromBottom";
import { CountUpStats } from "../miniComponents/CountUpStats";

function VideoSection() {
  return (
    <div className="w-full max-w-[100vw] overflow-hidden">
      <div className="text-white py-16 px-6 sm:px-28 xl:p-0 xl:py-32 flex flex-col gap-4 w-full justify-center items-center bg-dark-blue h-auto ">
        <div className="relative w-full xl:max-w-[1200px] flex flex-col gap-4 xl:pb-16">
          <div className="w-full  h-full ">
            <SlideInFromBottom sequence={0}>
              <div className="w-[100%] text-center flex flex-col">
                <span
                  className="text-3xl
                     md:text-5xl font-medium tracking-tight text-secondary"
                >
                  {"WE OPEN UNLIMITED OPPURTUNITIES FOR THE"}
                </span>
                <span
                  className="text-3xl
                     md:text-5xl font-medium tracking-tight text-secondary"
                >
                  {"DEVELOPMENT OF YOUR BUSINESS! "}
                </span>
              </div>
            </SlideInFromBottom>
            <SlideInFromBottom sequence={2}>
              <div className="w-[100%] flex justify-center items-center py-8">
                <span className="text-xl xl:max-w-[650px] text-center ">
                  With ARGT, your business gets extra opportunities for faster
                  business development worldwide. Watch the video below to find
                  out more about our partnership program!
                </span>
              </div>
            </SlideInFromBottom>
            {/* <label htmlFor="input">
              {" "}
              Input
              <input
                id="input"
                className="bg-none border-bottom border-2 w-[150px] border-white"
                type="text"
              />
            </label> */}
            {/* <div className="absolute w-full xl:max-w-[1200px] top-0 flex items-center justify-center">
              <video width="720" height="440" preload="none">
                <source src="/video/main-video.mp4" type="video/mp4" />
              </video>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
