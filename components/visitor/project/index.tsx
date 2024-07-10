"use client";

import React, { useState, useEffect } from "react";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { useProjectStore } from "@/stores/useProjectStore";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { projects, isLoading, isError, fetchProjects } = useProjectStore();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-medium text-center capitalize ">
          My Projects
        </h2>
        {isError && projects?.length === 0 ? (
          <div className="w-24 h-4 bg-gray-200 rounded-full"></div>
        ) : (
          <Link href="/projects" className="text-sm underline">
            See All
          </Link>
        )}
      </div>
      <div>
        {isLoading || isError ? (
          <>
            <div className="flex flex-col animate-pulse spacey-3">
              <div className="flex justify-center p-8 bg-gray-100 rounded-lg dark:bg-gray-800 ring-1 ring-inset ring-gray-100 dark:ring-gray-700">
                <div className="w-full">
                  <div className="relative isolate flex space-x-5 overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-gray-100 dark:before:border-gray-700 before:bg-gradient-to-r before:from-transparent before:via-gray-100 dark:before:via-gray-700 before:to-transparent">
                    <div className="w-56 h-56 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                    <div className="flex-1 space-y-3">
                      <div className="w-3/5 h-5 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                      <div className="flex flex-col space-y-2">
                        <div className="w-11/12 h-3 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                        <div className="w-10/12 h-3 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                        <div className="w-11/12 h-3 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                        <div className="w-8/12 h-3 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                        <div className="w-8/12 h-3 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-24 h-8 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                        <div className="w-24 h-8 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                        <div className="w-24 bg-gray-100 rounded-lg h- dark:bg-gray-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center p-8 mt-4 bg-gray-100 rounded-lg dark:bg-gray-800 ring-1 ring-inset ring-gray-100 dark:ring-gray-700">
                <div className="w-full">
                  <div className="relative isolate flex space-x-5 overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-gray-100 dark:before:border-gray-700 before:bg-gradient-to-r before:from-transparent before:via-gray-100 dark:before:via-gray-700 before:to-transparent">
                    <div className="w-56 h-56 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                    <div className="flex-1 space-y-3">
                      <div className="w-3/5 h-5 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                      <div className="flex flex-col space-y-2">
                        <div className="w-11/12 h-3 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                        <div className="w-10/12 h-3 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                        <div className="w-11/12 h-3 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                        <div className="w-8/12 h-3 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                        <div className="w-8/12 h-3 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-24 h-8 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                        <div className="w-24 h-8 bg-gray-100 rounded-lg dark:bg-gray-700"></div>
                        <div className="w-24 bg-gray-100 rounded-lg h- dark:bg-gray-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {projects?.map((project, index) => (
              <React.Fragment key={index}>
                <Project
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              </React.Fragment>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
