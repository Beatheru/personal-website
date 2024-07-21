"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent
} from "framer-motion";
import Link from "next/link";

export const FloatingNav = ({
  navItems
}: {
  navItems: {
    name: string;
    link: string;
  }[];
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className="fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center gap-2 rounded-full border-2 border-white bg-black px-2 py-2 hover:border-yellow-400 md:gap-7 md:px-4"
      >
        {navItems.map((navItem: any, index: number) => (
          <Link
            key={`link=${index}`}
            href={navItem.link}
            className="relative flex items-center font-medium text-white hover:text-yellow-400"
          >
            <h1 className="md:text-base">
              <span className="mr-1 hover:text-yellow-400">{index}.</span>
              <span>{navItem.name}</span>
            </h1>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
