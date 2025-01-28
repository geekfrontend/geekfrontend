import React from "react";
import PageTitle from "@/components/layout/page-title";

const UsesPage = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto animate-fadeIn">
      <PageTitle
        title="Uses"
        description="🛠️ The tools and technologies I use in my daily development workflow."
      />
      <div className="mt-6 text-gray-600">
        <p>
          Here’s a list of the tools and technologies I rely on to build amazing
          web experiences.
        </p>
        <ul className="pl-6 mt-4 list-disc">
          <li>Visual Studio Code</li>
          <li>Git & GitHub</li>
          <li>Figma</li>
          <li>Tailwind CSS</li>
          <li>Next.js</li>
        </ul>
      </div>
    </section>
  );
};

export default UsesPage;
