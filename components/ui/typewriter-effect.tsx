"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split("")
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span key={`char-${index}`} className={word.className}>
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("my-6 flex items-center space-x-1", className)}>
      <motion.div
        className="overflow-hidden"
        initial={{
          width: "0%"
        }}
        whileInView={{
          width: "fit-content"
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1
        }}
      >
        <div
          style={{
            whiteSpace: "nowrap"
          }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse"
        }}
        className={cn(
          "block h-6 w-[4px] rounded-sm bg-yellow-400 sm:h-7 md:h-8 lg:h-9",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
