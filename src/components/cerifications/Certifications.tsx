import React from "react";
import SlideInFromBottom from "../animations/SlideInFromBottom";
import certification1 from "@/public/certificates/01.jpeg";
import certification2 from "@/public/certificates/02.jpeg";
import certification3 from "@/public/certificates/03.jpeg";
import certification4 from "@/public/certificates/04.png";
import certification5 from "@/public/certificates/05.jpeg";
import certification6 from "@/public/certificates/06.jpeg";
import certification7 from "@/public/clients-logos/client1.jpg";
import certification8 from "@/public/clients-logos/client2.jpg";
import certification9 from "@/public/clients-logos/client3.png";
import certification10 from "@/public/clients-logos/client4.png";
import certification11 from "@/public/clients-logos/client5.png";
import certification12 from "@/public/clients-logos/client6.jpg";
import certification13 from "@/public/clients-logos/client7.png";
import certification14 from "@/public/clients-logos/client8.png";
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
    {
      title: "SUPPLY CHAIN MANAGEMENT",
      imgSrc: certification7,
    },
    {
      title: "IMPORT",
      imgSrc: certification8,
    },
    {
      title: "EXPORT",
      imgSrc: certification9,
    },
    {
      title: "SUPPLY CHAIN MANAGEMENT",
      imgSrc: certification10,
    },
    {
      title: "IMPORT",
      imgSrc: certification11,
    },
    {
      title: "EXPORT",
      imgSrc: certification12,
    },
    {
      title: "IMPORT",
      imgSrc: certification13,
    },
    {
      title: "EXPORT",
      imgSrc: certification14,
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
