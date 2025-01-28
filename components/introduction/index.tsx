"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section id="home" className="mb-28 text-center sm:mb-0 scroll-mt-[100rem]">
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="font-bold">Helo,</span>
        <span className="font-light"> I'm Harke.</span>
        <br />
        <span className="font-medium">
          <span className="font-bold">Frontend Developer</span>
        </span>
      </motion.h1>
    </section>
  );
}
