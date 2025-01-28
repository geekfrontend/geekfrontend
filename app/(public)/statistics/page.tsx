import React from "react";
import PageTitle from "@/components/layout/page-title";

const StatisticsPage = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto animate-fadeIn">
      <PageTitle
        title="Statistics"
        description="📊 Explore detailed statistics and analytics here."
      />
      <div className="mt-6 text-gray-600">
        <p>Stay tuned for the latest stats and insights! 🚀</p>
      </div>
    </section>
  );
};

export default StatisticsPage;
