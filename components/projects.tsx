"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import axios from "axios";
import { config } from "@/config";

type ProjectType = {
  title: string;
  description: string;
  tags: string[];
};
export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [projects, setProject] = useState<ProjectType[]>([]);

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get(`${config.API_URL}/projects`);
      setProject(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
