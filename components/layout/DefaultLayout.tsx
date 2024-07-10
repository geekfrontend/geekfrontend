"use client";

import React, { useState, ReactNode } from "react";
import Sidebar from "../admin/Sidebar";
import ProtectedRoute from "@/components/layout/ProtectedRoute";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);

  return (
    <ProtectedRoute>
      <div className="relative min-h-screen md:flex">
        <div>
          <Sidebar setExpand={setSideMenuIsExpand} />
        </div>
        <div
          className={`flex-1 min-h-screen mx-0 bg-slate-100 transition-all duration-300 ease-in-out ${
            sideMenuIsExpand ? "md:ml-72" : "md:ml-20"
          }`}
        >
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DefaultLayout;
