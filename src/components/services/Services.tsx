import Image from "next/image";
import React from "react";
import image1 from "@/public/images/services/services-1.jpeg";
import image2 from "@/public/images/services//services-2.jpeg";
import image3 from "@/public/images/services/services-3.jpg";
import SlideInFromBottom from "../animations/SlideInFromBottom";

function Services() {
  const servicesList = [
    {
      title: "SUPPLY CHAIN MANAGEMENT",
      imgSrc: image2,
      description:
        "Absolutio teres hippotoxota est. Ubi est alter lapsus? Ubi est placidus elogium? Velox, superbus fiscinas absolute fallere de salvus, albus coordinatae.",
    },
    {
      title: "IMPORT",
      imgSrc: image2,
      description:
        "Absolutio teres hippotoxota est. Ubi est alter lapsus? Ubi est placidus elogium? Velox, superbus fiscinas absolute fallere de salvus, albus coordinatae.",
    },
    {
      title: "EXPORT",
      imgSrc: image3,
      description:
        "Absolutio teres hippotoxota est. Ubi est alter lapsus? Ubi est placidus elogium? Velox, superbus fiscinas absolute fallere de salvus, albus coordinatae.",
    },
    {
      title: "SUPPLY CHAIN MANAGEMENT",
      imgSrc: image2,
      description:
        "Absolutio teres hippotoxota est. Ubi est alter lapsus? Ubi est placidus elogium? Velox, superbus fiscinas absolute fallere de salvus, albus coordinatae.",
    },
    {
      title: "IMPORT",
      imgSrc: image2,
      description:
        "Absolutio teres hippotoxota est. Ubi est alter lapsus? Ubi est placidus elogium? Velox, superbus fiscinas absolute fallere de salvus, albus coordinatae.",
    },
    {
      title: "EXPORT",
      imgSrc: image3,
      description:
        "Absolutio teres hippotoxota est. Ubi est alter lapsus? Ubi est placidus elogium? Velox, superbus fiscinas absolute fallere de salvus, albus coordinatae.",
    },
  ];
  return (
    <div
      id="services"
      className="max-w-[100vw] overflow-hidden w-full flex justify-center items-center bg-[#F5F6F7] py-16"
    >
      <div className="w-full xl:max-w-[1050px] overflow-hidden flex flex-col gap-8 py-12 items-center justify-center">
        <p className="text-center font-medium text-dark-blue text-3xl md:text-6xl pb-12 ">
          GLOBAL SERVICES
        </p>
        <div className="w-full grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service: any, index: any) => {
            return (
              <SlideInFromBottom key={index} sequence={index + 2}>
                <ServiceCard service={service} />
              </SlideInFromBottom>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;

function ServiceCard({ service }: any) {
  return (
    <div className="relative mx-auto w-[320px] sm:w-[250px] lg:w-[350px]  ">
      <div className="relative mx-auto w-[320px] sm:w-[250px] lg:w-[350px] ">
        <Image src={service.imgSrc} alt="img" className="object-cover" />
      </div>
      <div className="absolute group flex flex-col items-center justify-center bg-black/50 mx-auto w-[320px] sm:w-[250px] lg:w-[350px] h-full top-0 left-0">
        <span className="text-2xl font-semibold px-[20%] text-center group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300 ">
          {service.title}
        </span>

        <span className="text-base text-center w-[80%] group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300">
          {service.description}
        </span>
      </div>
    </div>
  );
}
