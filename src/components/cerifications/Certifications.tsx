import React from "react";
import SlideInFromBottom from "../animations/SlideInFromBottom";
import certification1 from "@/public/certificates/01.jpeg";
import certification2 from "@/public/certificates/02.jpeg";
import certification3 from "@/public/certificates/03.jpeg";
import certification4 from "@/public/certificates/04.png";
import certification5 from "@/public/certificates/05.jpeg";
import certification6 from "@/public/certificates/06.jpeg";
import Image from "next/image";

function Certifications() {
  return (
    <div
      id="certifications"
      className=" max-w-[100vw] overflow-hidden text-dark-blue py-16 px-16 xl:p-0 xl:py-16 flex flex-col  w-full justify-center items-center bg-white h-auto "
    >
      <div className="relative w-full xl:max-w-[1200px] flex flex-col gap-4 xl:pb-16">
        <div className="w-full  h-full ">
          <SlideInFromBottom sequence={0}>
            <div className="w-[100%] text-center xl:text-left flex flex-col">
              <span
                className="text-3xl 
                 md:text-5xl font-medium tracking-tight"
              >
                {"CERTIFIED GLOBAL TRADERS"}
              </span>
              {/* <span
                className="text-3xl
                 md:text-5xl font-medium tracking-tight"
              >
                {"INCLUDING OUR OFFICIAL PARTNERS."}
              </span> */}
            </div>
          </SlideInFromBottom>
          <CertificationLogos />
        </div>
      </div>
    </div>
  );
}

export default Certifications;

function CertificationLogos() {
  const certificationsList = [
    {
      title: "SUPPLY CHAIN MANAGEMENT",
      imgSrc: certification1,
    },
    {
      title: "IMPORT",
      imgSrc: certification2,
    },
    {
      title: "EXPORT",
      imgSrc: certification3,
    },
    {
      title: "SUPPLY CHAIN MANAGEMENT",
      imgSrc: certification4,
    },
    {
      title: "IMPORT",
      imgSrc: certification5,
    },
    {
      title: "EXPORT",
      imgSrc: certification6,
    },
  ];
  return (
    <div className="w-full flex justify-center items-center bg-white py-16 ">
      <div className="w-full  flex items-center justify-center">
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-8 ">
          {certificationsList.map((certification: any, index: any) => {
            return (
              <SlideInFromBottom key={index} sequence={index + 2}>
                <CertificationCard certification={certification} />
              </SlideInFromBottom>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CertificationCard({ certification }: any) {
  return (
    <div className="relative flex justify-center items-center ">
      <div className="relative w-[250px] flex justify-center items-center ">
        <Image
          src={certification.imgSrc}
          alt="img"
          className="object-contain flex justify-center items-center h-[250px] w-[250px]"
        />
      </div>
    </div>
  );
}
