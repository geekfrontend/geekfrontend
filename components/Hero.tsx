"use client";

import React, { useState, useEffect } from "react";
import UnderlineToBackground from "@/fancy/components/text/underline-to-background";
import { BoxReveal } from "@/components/magicui/box-reveal";

const Hero: React.FC = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight;
      const newScale = 1 + (scrollPosition / maxScroll) * 0.2;
      setScale(newScale > 1.2 ? 1.2 : newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div
        className="relative flex flex-col items-center text-center transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl">
          Hey, I&apos;m{" "}
          <span className="underline">
            <UnderlineToBackground
              label="Harke"
              targetTextColor="#f0f0f0"
              className="cursor-pointer"
            />
          </span>
        </h1>

        <BoxReveal boxColor={"#000"} duration={0.5}>
          <p className="mb-8 text-5xl font-bold sm:text-7xl md:text-9xl">
            Frontend Developer
          </p>
        </BoxReveal>
      </div>
    </div>
  );
};

export default Hero;
