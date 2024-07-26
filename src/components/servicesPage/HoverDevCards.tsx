import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import SimpleReveal from "../utils/SimpleReveal";
import Image from "next/image";
import Link from "next/link";
// links to svg
import socialmediamarketing from "@/public/images/services/socialmediamarketing.svg";
import packagingandlabelling from "@/public/images/services/packagingandlabelling.svg";
import logodesigning from "@/public/images/services/logodesigning.svg";
import contentcreation from "@/public/images/services/contentcreation.svg";
import paidadvertising from "@/public/images/services/paidadvertising.svg";
import brandstorytelling from "@/public/images/services/brandstorytelling.svg";
import ecommercemanagement from "@/public/images/services/ecommercemanagement.svg";
import searchengineoptimization from "@/public/images/services/searchengineoptimization.svg";
import webdesignanddevelopment from "@/public/images/services/webdesignanddevelopment.svg";
import emailmarketing from "@/public/images/services/emailMarketing.svg";

// code
const HoverDevCards = ({ service, Icon }: any) => {
  const serviceObjects = [
    { title: "contentcreation", icon: contentcreation },
    { title: "socialmediamarketing", icon: socialmediamarketing },
    { title: "emailmarketing", icon: emailmarketing },
    { title: "paidadvertising", icon: paidadvertising },
    { title: "logodesigning", icon: logodesigning },
    { title: "brandstorytelling", icon: brandstorytelling },
    { title: "ecommercemanagement", icon: ecommercemanagement },
    { title: "searchengineoptimization", icon: searchengineoptimization },
    { title: "webdesignanddevelopment", icon: webdesignanddevelopment },
    { title: "packagingandlabelling", icon: packagingandlabelling },
  ];

  const imgSrc = serviceObjects.find(
    (obj) => service.title.replace(/\s/g, "").toLowerCase() === obj.title
  );
  return (
    <Link href={`/services/${service.title.replace(/\s/g, "").toLowerCase()}`}>
      <SimpleReveal sequence={2}>
        <div className="cursor-pointer w-[70vw] h-[60vh] xl:w-[40vw]  xl:h-[70vh]  rounded-xl border-[1px] border-slate-300  overflow-hidden group bg-white  flex flex-col justify-end relative">
          <Image
            src={imgSrc?.icon}
            // src={socialmediamanagement}
            alt="Description of your image"
            fill
            style={{ objectFit: "cover" }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 p-4">
            <p className="text-sm xl:text-base lg:text-lg text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
              {service.desc}
            </p>
          </div>

          {/* <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" /> */}
          <div className="absolute w-full hover:relative flex flex-col items-start  bg-gradient-to-t from-black/70 group-hover:from-transparent via-black/50 group-hover:via-white/30 to-transparent p-4 ">
            <h3 className=" text-xl xl:text-2xl mb-2 font-bold text-white relative z-10 duration-300 group-hover:-translate-y-2  xl:group-hover:-translate-y-10 w-full">
              {service.title}
            </h3>
          </div>
        </div>
      </SimpleReveal>
    </Link>
  );
};

export default HoverDevCards;
