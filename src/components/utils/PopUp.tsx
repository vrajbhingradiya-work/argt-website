import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  sequence: number;
}

const Popup = ({ children, sequence }: Props) => {
  const textReveal = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: -100,
      x: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        delay: 0.2 * (sequence / 2),
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };
  return (
    <div>
      <motion.div
        variants={textReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Popup;
