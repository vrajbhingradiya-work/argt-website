import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  sequence: number;
}

const RevealRight = ({ children, width = "fit-content", sequence }: Props) => {
  const textRevealRight = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: [0, 0.3, 0.6, 0.9, 1],
      x: 0,
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
        variants={textRevealRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealRight;
