"use client";
import Image from "next/image";
import React from "react";
import Button from "../miniComponents/Button";
import image from "@/public/images/banner/maritime-2.jpg";
import SlideInFromBottom from "../animations/SlideInFromBottom";
import SimpleFadeIn from "../animations/SimpleFadeIn";

function HeroSection() {
  return (
    <div className="max-w-[100vw] overflow-hidden w-full text-white">
      <div className="relative pt-20 md:mt-0  w-full bg-black">
        <SimpleFadeIn sequence={2}>
          <div className="hidden relative md:block object-cover h-[50vh] xl:h-[100vh] w-full ">
            <Image
              src={image}
              priority={true}
              objectFit="cover"
              fill={true}
              alt="background image"
            />
          </div>
        </SimpleFadeIn>
        <SimpleFadeIn sequence={2}>
          <div className="relative md:hidden object-cover h-[85vh] w-full">
            <Image
              src={image}
              priority={true}
              alt="background image"
              objectFit="cover"
              fill={true}
            />
          </div>
        </SimpleFadeIn>
        <div className="absolute top-0 left-0 z-10 flex flex-col h-full w-full">
          <div className="w-full  h-full bg-black/60 flex flex-col items-center  gap-3 md:gap-6 pl-8 md:p-20 justify-end pb-16 ">
            <div className="w-full xl:max-w-[1200px]   h-full  flex flex-col gap-3 md:gap-6 pl-8 md:p-20 xl:px-0 justify-end pb-16 ">
              <SlideInFromBottom sequence={0}>
                <div className="w-[80%]  md:w-[50%]">
                  <span className="text-4xl  md:text-7xl font-semibold tracking-tight">
                    {"WE PROVIDE HIGHEST QUALITY IMPORT-EXPORT SERVICES"}
                  </span>
                </div>
              </SlideInFromBottom>
              <SlideInFromBottom sequence={2}>
                <div className="w-[80%]  md:w-[40%]">
                  <span className="text-xl md:text-2xl pr-[30%] md:p-0 md:-mt-4 md:mb-4 xl:mb-2">
                    With a deep understanding of global markets and a commitment
                    to excellence, we facilitate seamless and efficient export
                    and import services across various industries.
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
              <SimpleFadeIn sequence={12}>
                <Button
                  link="/#contact-us"
                  title=" GET IN TOUCH"
                  className="bg-bright-red   fill-white hover:bg-white hover:text-bright-red  w-[180px] md:w-[280px] text-base md:text-xl"
                ></Button>
              </SimpleFadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
