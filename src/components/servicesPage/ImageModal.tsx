import React from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Image from "next/image";
import Icon from "@/public/logo/Icon.png";

const Modal = ({ isOpen, setIsOpen, project }: any) => {
  const backdrop = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  const containerVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", delay: 0.25, duration: 0.5 },
    },
    exit: { y: "-100vh", transition: { ease: easeInOut } },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setIsOpen(false)}
          className="backdrop flex items-center justify-center "
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsOpen(false)}
            className="px-6 py-8 mx-6 grid  grid-cols-1 xl:grid-cols-3  justify-center bg-white rounded-xl   gap-2 max-w-[900px]"
          >
            <div
              className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] h-[45vh] md:h-[60vh] lg:h-[80vh]  w-full  xl:col-span-2"
              data-te-ripple-init=""
              data-te-ripple-color="dark"
            >
              <Image
                src={project?.imgUrl ? project?.imgUrl : Icon}
                priority={true}
                alt="boom"
                layout="fill"
                objectFit="contain"
                className="w-full align-middle transition duration-300 hover:ease-linear"
              />
            </div>
            <div className="flex flex-col h-full  justify-between w-full  p-4 gap-4 xl:col-span-1">
              <p className="text-lg text-[#444]">{project.title}</p>
              <p className="text-xs text-[#444]">{project.content?.company} </p>
              <p className="text-xs text-[#444]">{project.content?.df} </p>
              {/* <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className=" p-2 px-4 border-2 border-[#444] text-[#444] hover:scale-110 transition hover:ease-in-out rounded-xl"
              >
                close!
              </button> */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
