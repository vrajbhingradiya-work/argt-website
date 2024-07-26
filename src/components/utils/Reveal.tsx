import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  sequence: number;
}

const Reveal = ({ children, width = "fit-content", sequence }: Props) => {
  const textReveal = {
    hidden: {
      opacity: 0,
      y: 11,
    },
    visible: {
      opacity: [0, 0.3, 0.6, 0.9, 1],
      y: [10, 8, 6, 4, 2, 0],
      transition: {
        delay: 0.2 * (sequence / 2),
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
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

export default Reveal;
