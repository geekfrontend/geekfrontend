import React from "react";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Studi Independen Bersertifikat",
    location: "Online",
    description:
      "I learned how to code and how to build websites using HTML, CSS, and JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "February 2022 - August 2022",
  },
  {
    title: "Machine Learning Developer",
    location: "Online",
    description:
      "I learned how to code and how to build model machine learning using Python.",
    icon: React.createElement(LuGraduationCap),
    date: "October 2022 - December 2022",
  },
  {
    title: "Mobile Developer",
    location: "Online",
    description:
      "I learned how to code and how to build mobile apps using Kotlin.",
    icon: React.createElement(LuGraduationCap),
    date: "February 2023 August 2023",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
] as const;
