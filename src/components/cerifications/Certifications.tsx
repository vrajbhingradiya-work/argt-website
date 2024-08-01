import React from "react";
import SlideInFromBottom from "../animations/SlideInFromBottom";
import client1 from "@/public/clients-logos/client1.jpg";
import client2 from "@/public/clients-logos/client2.jpg";
import client3 from "@/public/clients-logos/client3.png";
import client4 from "@/public/clients-logos/client4.png";
import client5 from "@/public/clients-logos/client5.png";
import client6 from "@/public/clients-logos/client6.jpg";
import client7 from "@/public/clients-logos/client7.png";
import client8 from "@/public/clients-logos/client8.png";
import Image from "next/image";

function Certifications() {
  return (
    <div className=" text-dark-blue py-16 px-16 xl:p-0 xl:py-16 flex flex-col  w-full justify-center items-center bg-white h-auto ">
      <div className="relative w-full xl:max-w-[1200px] flex flex-col gap-4 xl:pb-16">
        <div className="w-full  h-full ">
          <SlideInFromBottom sequence={0}>
            <div className="w-[100%] text-left flex flex-col">
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
  const clientsList = [
    {
      title: "SUPPLY CHAIN MANAGEMENT",
      imgSrc: client1,
    },
    {
      title: "IMPORT",
      imgSrc: client2,
    },
    {
      title: "EXPORT",
      imgSrc: client3,
    },
    {
      title: "SUPPLY CHAIN MANAGEMENT",
      imgSrc: client4,
    },
    {
      title: "IMPORT",
      imgSrc: client5,
    },
    {
      title: "EXPORT",
      imgSrc: client6,
    },
    {
      title: "SUPPLY CHAIN MANAGEMENT",
      imgSrc: client7,
    },
    {
      title: "IMPORT",
      imgSrc: client8,
    },
  ];
  return (
    <div className="w-full flex justify-center items-center bg-white py-16 ">
      <div className="w-full  flex items-center justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientsList.map((client: any, index: any) => {
            return (
              <SlideInFromBottom key={index} sequence={index + 2}>
                <CertificationCard client={client} />
              </SlideInFromBottom>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CertificationCard({ client }: any) {
  return (
    <div className="relative flex justify-center items-center ">
      <div className="relative w-[150px] ">
        <Image src={client.imgSrc} alt="img" className="object-cover" />
      </div>
    </div>
  );
}
