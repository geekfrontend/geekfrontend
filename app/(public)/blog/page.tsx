import React from "react";
import PageTitle from "@/components/layout/page-title";

const BlogPage = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto animate-fadeIn">
      <PageTitle
        title="Blog"
        description="📖 Explore my latest thoughts and insights on web development and technology."
      />
      <div className="mt-6 text-gray-600">
        <p>Stay tuned for upcoming blog posts! 🚀</p>
      </div>
    </section>
  );
};

export default BlogPage;
