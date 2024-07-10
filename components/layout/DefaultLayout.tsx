"use client";

import React, { useState, ReactNode } from "react";
import Sidebar from "../admin/Sidebar";
import ProtectedRoute from "@/components/layout/ProtectedRoute";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <ProtectedRoute>
      <div className="relative min-h-screen md:flex">
        <div>
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
    </ProtectedRoute>
  );
};

export default DefaultLayout;
