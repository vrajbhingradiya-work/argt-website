"use client";
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const CountUpStats = ({ statistics }: any) => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
      <div className="flex flex-col gap-12  items-center justify-center sm:flex-row">
        <Stat num={60} suffix="+" subheading="Years of Experience" />
        <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
        <Stat
          num={30}
          decimals={1}
          suffix="mln+"
          subheading="Tons of cargo transported"
        />
        <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
        <Stat num={200} suffix="+" subheading="Partners worldwide" />
      </div>
    </div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-72  flex-col items-center py-8 sm:py-0">
      <p className="text-bright-red mb-2 text-center text-7xl font-semibold sm:text-6xl">
        <span className="text-8xl" ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-xl text-black">{subheading}</p>
    </div>
  );
};
