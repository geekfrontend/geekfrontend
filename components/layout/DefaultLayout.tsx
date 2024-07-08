import React, { ReactNode } from "react";
import Link from "next/link";
import Sidebar from "../admin/Sidebar";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
