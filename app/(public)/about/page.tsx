import React from "react";
import PageTitle from "@/components/layout/page-title";

const AboutPage = () => {
  return (
    <>
      <PageTitle
        title="About Me"
        description="👋 Hi there! I am Harke, a Frontend Developer passionate about building beautiful and performant web applications."
      />
      <p className="mt-4 text-gray-600">
        I specialize in creating modern and user-friendly interfaces using the
        latest web technologies. With a keen eye for design and attention to
        detail, I strive to craft seamless experiences for users worldwide.
      </p>
    </>
  );
};

export default AboutPage;
