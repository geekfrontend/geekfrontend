import React from "react";
import Link from "next/link";
import Sidebar from "../admin/Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
