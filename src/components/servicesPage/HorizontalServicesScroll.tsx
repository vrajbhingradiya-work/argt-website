import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { servicesCardsInfo } from "../Data/ServicesInfo";
import HoverDevCards from "./HoverDevCards";

const HorizontalServicesScroll = () => {
  const serviceData = servicesCardsInfo;
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0.5%", "-88%"]);
  return (
    <section ref={targetRef} className=" relative h-[700vh] w-full ">
      <div className="sticky top-28 md:top-40 h-[60vh] md:h-[80vh] flex items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-32 absolute p-6 ">
          {serviceData.map((service) => {
            return <HoverDevCards service={service} key={service.title} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalServicesScroll;
