import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { useTheme } from "@/context/theme-context";

interface TimelineProps {
  children: React.ReactNode;
}

interface TimelineItemProps {
  side?: "left" | "right";
  title: string;
  description: string;
  date: string;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="container w-full h-full mx-auto">
      <div className="relative h-full p-10 overflow-hidden wrap">
        <div className="absolute hidden h-full border border-gray-700 md:block lg:block left-1/2 border-2-2 border-opacity-20"></div>
        {children}
      </div>
    </div>
  );
}

export function TimelineItem({
  side = "right",
  title,
  description,
  date,
}: TimelineItemProps) {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between  mb-8 ${
        side === "left" ? "sm:flex-row-reverse" : ""
      }`}
    >
      <div className="order-1 w-full sm:w-5/12"></div>
      <div className="z-20 flex items-center order-1 w-16 h-16 transition rounded-full shadow-xl hover:bg-gray-200 sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <h1 className="mx-auto text-lg font-semibold text-white">
          <LuGraduationCap
            size={40}
            color={`${theme === "dark" ? "#fff" : "#334155"}`}
          />
        </h1>
      </div>
      <div className="order-1 px-6 py-4 mt-3 transition rounded-lg shadow-xl lg:mt-0 w-96 sm:w-5/12 hover:bg-gray-200 sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-base leading-snug tracking-wide text-gray-700 dark:text-white/70">
          {description}
        </p>
        <p className="mt-4 text-lg font-medium leading-snug tracking-wide text-gray-700 dark:text-white/70">
          {date}
        </p>
      </div>
    </div>
  );
}
