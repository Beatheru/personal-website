"use client";

import Section from "@/components/Section";
import { LampContainer } from "@/components/ui/lamp";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";

const words = [
  {
    text: "Fullstack"
  },
  {
    text: "Software"
  },
  {
    text: "Engineer"
  },
  {
    text: "&"
  },
  {
    text: "DevOps"
  }
];

const Hero = () => {
  return (
    <Section id="hero" className="z-0">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="py-4 text-center font-medium text-white"
        >
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Hi, I&apos;m
          </div>
          <div className="text-4xl font-bold text-yellow-400 sm:text-5xl md:text-6xl lg:text-7xl">
            Andrew Chen
          </div>
          <TypewriterEffectSmooth
            words={words}
            className="text-normal sm:text-lg md:text-xl lg:text-2xl"
          />
        </motion.h1>
      </LampContainer>
    </Section>
  );
};

export default Hero;
