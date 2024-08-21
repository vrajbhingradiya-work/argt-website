import React from "react";
import SlideInFromBottom from "../animations/SlideInFromBottom";
import service1 from "@/public/whatWeDo/service1.png";
import service2 from "@/public/whatWeDo/service2.jpeg";
import service3 from "@/public/whatWeDo/service3.jpeg";
import service4 from "@/public/whatWeDo/service4.jpeg";

import Image from "next/image";

function WhatWeDo() {
  return (
    <div
      id="clients"
      className=" max-w-[100vw] overflow-hidden text-dark-blue py-16 px-16 xl:p-0 xl:py-12 flex flex-col  w-full justify-center items-center bg-white h-auto "
    >
      <div className="relative w-full xl:max-w-[1200px] flex flex-col gap-4 ">
        <div className="w-full  h-full ">
          <SlideInFromBottom sequence={0}>
            <div className="w-[100%] text-center xl:text-left flex flex-col">
              <span
                className="text-3xl 
                 md:text-5xl font-medium tracking-tight"
              >
                {"WHAT WE DO..."}
              </span>
              <span
                className="text-3xl
                 md:text-5xl font-medium tracking-tight"
              >
                {"OUR SERVICES"}
              </span>
            </div>
          </SlideInFromBottom>
          <ServicesComponent />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;

function ServicesComponent() {
  const servicesList = [
    {
      title: "SOURCING AGENT",
      imgSrc: service1,
    },
    {
      title: "IMPORT",
      imgSrc: service2,
    },
    {
      title: "EXPORT",
      imgSrc: service3,
    },
    {
      title: "CUSTOM PRODUCT PACKAGING",
      imgSrc: service4,
    },
  ];
  return (
    <div className="w-full flex justify-center items-center bg-white py-16 ">
      <div className="w-full  flex items-center justify-center">
        <div className="w-full grid grid-cols-2  lg:gap-16 gap-8">
          {servicesList.map((service: any, index: any) => {
            return (
              <SlideInFromBottom key={index} sequence={index + 2}>
                <ClientCard service={service} />
              </SlideInFromBottom>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ClientCard({ service }: any) {
  return (
    <div className="relative flex gap-4 justify-start items-center group">
      <div className=" group-hover:scale-125 transition-all group-hover:ease-in-out duration-200  relative w-[120px] rounded-full  flex justify-center items-center border-2 border-black overflow-hidden object-center ">
        <Image
          src={service.imgSrc}
          alt="img"
          className="object-cover aspect-square "
        />
      </div>
      <div className="group-hover:scale-125  group-hover:translate-x-8 transition-all group-hover:ease-in-out duration-200 relative flex justify-center items-center ">
        <h2 className="text-center text-2xl font-medium">{service.title}</h2>
      </div>
    </div>
  );
}
