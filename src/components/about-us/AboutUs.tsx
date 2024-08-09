"use client";
import Image from "next/image";
import React from "react";
import image1 from "@/public/images/aboutus/01.jpg";
import image2 from "@/public/images/aboutus/02.jpg";
import image3 from "@/public/images/aboutus/03.jpg";
import SlideInFromBottom from "../animations/SlideInFromBottom";

function AboutUs() {
  return (
    <div id="about-us" className="max-w-[100vw] w-full overflow-hidden">
      <div className="py-16 px-6 md:px-28 xl:p-0 xl:py-32 flex gap-4 w-full justify-center items-center bg-white h-auto ">
        <div className="w-full xl:max-w-[1200px] flex md:flex-row flex-col justify-center md:gap-12 xl:gap-32 items-center">
          <div className="flex h-full justify-center items-center">
            <div className="w-full  h-full text-black  flex flex-col  gap-3 md:gap-6 pl-8 md:p-20 xl:p-0 justify-center pb-16 xl:pb-40">
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
                    Our company is dedicated to facilitating seamless and
                    efficient export and import services across various
                    industries. With a deep understanding of global markets and
                    a commitment to excellence, we ensure that our clients
                    receive the highest quality products and services.
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
              {/* <SimpleFadeIn sequence={12}>
                <Link
                  href="/#contactus"
                  className=" text-base md:text-xl tracking-wider hover:text-bright-red transition ease-in-out duration-300"
                >
                  LEARN MORE
                </Link>
              </SimpleFadeIn> */}
            </div>
          </div>
          <div className=" flex w-full  h-full text-black  flex-col gap-3 md:gap-6 pl-8 md:p-20 justify-end pb-16 xl:pb-40">
            <div className="relative iamge-section-about-us h-[80%]">
              <div className="">
                <Image src={image3} alt="img-1" objectFit="contain" />
              </div>
              <div className="absolute hidden md:block lg:-top-20 lg:-right-10 img-2 w-[45%]">
                <Image src={image2} alt="img-1" objectFit="contain" />
              </div>
              <div className="absolute hidden md:block lg:-bottom-20 lg:-left-20 img-3 w-[45%]">
                <Image src={image1} alt="img-1" objectFit="contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
