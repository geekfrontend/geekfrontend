"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function About() {
  const { ref } = useSectionInView("About");
  const { t } = useLanguage();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="mb-8 text-3xl font-medium text-center capitalize">
        About Me
      </h2>
      <p className="mb-3">
        As a frontend developer, I have acquired one year of experience in
        website development. My skill set encompasses a deep understanding of
        JavaScript, CSS, HTML, Node.js, along with substantial proficiency in
        utilizing popular libraries and frameworks such as React, Next, Express,
        and Tailwind.
      </p>
    </motion.section>
  );
}
