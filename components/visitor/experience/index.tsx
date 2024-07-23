"use client";

import React from "react";
import {
  TimelineItem,
  Timeline,
} from "@/components/visitor/experience/timeline";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experiences");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <h2 className="mb-8 text-3xl font-medium text-center capitalize">
        My Experiences
      </h2>
      <Timeline>
        {experiencesData.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            description={item.description}
            date={item.date}
            side={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </Timeline>
    </section>
  );
}
