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
    <Section id="hero" className="z-0 p-0">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="py-4 text-center font-medium text-white"
        >
          <h1>Hi, I&apos;m</h1>
          <h6 className="font-bold text-yellow-400">Andrew Chen</h6>
          <TypewriterEffectSmooth words={words} />
        </motion.div>
      </LampContainer>
    </Section>
  );
};

export default Hero;
