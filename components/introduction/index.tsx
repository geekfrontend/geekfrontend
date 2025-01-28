"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ME from "../../../public/me.png";
import { useLanguage } from "@/context/language-context";

export default function Introduction() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="font-bold">{t("greeting")},</span>
        <span className="font-light"> I'm Harke.</span>
        <br />
        <span className="font-medium">
          <span className="font-bold">Frontend Developer</span>
        </span>
      </motion.h1>
    </section>
  );
}
