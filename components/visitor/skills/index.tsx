"use client";

import React, { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useSkillStore } from "@/stores/useSkillStore";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const { skills, fetchSkills, isLoading, isError } = useSkillStore();

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <h2 className="mb-8 text-3xl font-medium text-center capitalize">
        My Skills
      </h2>
      {isLoading || isError || skills?.length === 0 ? (
        <>
          <div className="animate-pulse">
            <ul className="flex flex-wrap justify-center gap-4 text-lg">
              <li className="py-6 bg-gray-200 px-14 rounded-xl dark:bg-gray-700"></li>
              <li className="px-10 py-6 bg-gray-200 rounded-xl dark:bg-gray-700"></li>
              <li className="px-10 py-6 bg-gray-200 rounded-xl dark:bg-gray-700"></li>
              <li className="px-10 py-6 bg-gray-200 rounded-xl dark:bg-gray-700"></li>
            </ul>
            <ul className="flex flex-wrap justify-center gap-4 mt-4 text-lg">
              <li className="py-6 bg-gray-200 px-11 rounded-xl dark:bg-gray-700"></li>
              <li className="px-12 py-6 bg-gray-200 rounded-xl dark:bg-gray-700"></li>
              <li className="py-6 bg-gray-200 px-14 rounded-xl dark:bg-gray-700"></li>
              <li className="px-12 py-6 bg-gray-200 rounded-xl dark:bg-gray-700"></li>
              <li className="px-10 py-6 bg-gray-200 rounded-xl dark:bg-gray-700"></li>
              <li className="py-6 bg-gray-200 px-11 rounded-xl dark:bg-gray-700"></li>
            </ul>
            <ul className="flex flex-wrap justify-center gap-4 mt-4 text-lg">
              <li className="px-10 py-6 bg-gray-200 rounded-xl dark:bg-gray-700"></li>
              <li className="px-12 py-6 bg-gray-200 rounded-xl dark:bg-gray-700"></li>
              <li className="px-16 py-6 bg-gray-200 rounded-xl dark:bg-gray-700"></li>
              <li className="py-6 bg-gray-200 px-11 rounded-xl dark:bg-gray-700"></li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skills?.map((skill, index) => (
              <motion.li
                className="px-5 py-3 bg-white borderBlack rounded-xl dark:bg-white/10 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill.name}
              </motion.li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
