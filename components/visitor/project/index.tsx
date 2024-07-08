"use client";

import React, { useState, useEffect } from "react";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import axios from "axios";
import { config } from "@/config";
import Link from "next/link";

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
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-medium text-center capitalize ">
          My Projects
        </h2>
        <Link href="/projects" className="text-sm underline">
          See All
        </Link>
      </div>
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
