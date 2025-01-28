import React from "react";
import PageTitle from "@/components/layout/page-title";

const ProjectsPage = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto animate-fadeIn">
      <PageTitle
        title="Projects"
        description="🚀 Discover my recent projects and the technologies I’ve worked with."
      />
      <div className="mt-6 text-gray-600">
        <p>
          Check out the exciting projects I’ve been working on! More coming
          soon. 🌟
        </p>
      </div>
    </section>
  );
};

export default ProjectsPage;
