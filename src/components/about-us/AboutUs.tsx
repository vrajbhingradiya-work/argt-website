"use client";
import Image from "next/image";
import React from "react";
import Button from "../miniComponents/Button";
import image from "@/public/images/banner/maritime.jpeg";
import SlideInFromBottom from "../animations/SlideInFromBottom";
import SimpleFadeIn from "../animations/SimpleFadeIn";

function AboutUs() {
  return (
    <div>
      <div className="py-16 px-28 flex gap-4 w-full justify-center items-center bg-white h-screen">
        <div className="flex h-full justify-center items-center">
          <div className="w-full  h-full text-black  flex flex-col  gap-3 md:gap-6 pl-8 md:p-20 justify-center pb-16 xl:pb-40">
            <SlideInFromBottom sequence={0}>
              <div className="w-[100%]">
                <span className="text-3xl  md:text-5xl font-medium tracking-tight">
                  {"About our Company"}
                </span>
              </div>
            </SlideInFromBottom>
            <SlideInFromBottom sequence={2}>
              <div className="w-[100%]">
                <span className="text-xl md:text-xl pr-[30%] font-medium  md:-mt-4 md:mb-4 xl:mb-2">
                  We work for the accurate and brilliant transportation of all
                  your goods. For 60+ years of constant & reliable work, our
                  logistic company has received lots of positive feedback from
                  our satisfied clients.
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
                link="/#contactus"
                title=" GET IN TOUCH"
                className="  fill-white bg-white hover:text-bright-red hover:-translate-x-7 w-[180px] md:w-[280px] text-base text-gray font-medium  md:text-xl"
              ></Button>
            </SimpleFadeIn>
          </div>
        </div>
        <div className="w-full  h-full text-black  flex flex-col gap-3 md:gap-6 pl-8 md:p-20 justify-end pb-16 xl:pb-40">
          <div className="relative iamge-section-about-us h-[80%]">
            <div className="absolute top-0 right-15 img-1 w-[90%]">
              <Image src={image} alt="img-1" objectFit="contain" />
            </div>
            <div className="absolute -top-20 -right-10 img-2 w-[45%]">
              <Image src={image} alt="img-1" objectFit="contain" />
            </div>
            <div className="absolute -bottom-20 -left-20 img-3 w-[45%]">
              <Image src={image} alt="img-1" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
