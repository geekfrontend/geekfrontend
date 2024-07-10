"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../admin/Sidebar";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import BottomNavigation from "@/components/admin/Navigation/BottomNavigation";
import toast from "react-hot-toast";
import ThemeSwitch from "@/components/common/theme/theme-switch";
import LanguageSwitch from "@/components/common/language/language-switch";
import ScrollToTop from "@/components/common/scroll/scroll-to-top";
import Footer from "../visitor/footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        toast.error("Please use mobile device for better experience");
        router.push("/");
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [router]);

  return (
    <div className="relative flex flex-col min-h-screen mb-32">
      <ScrollToTop />
      {/* <ProtectedRoute> */}
      <div className="flex-1">{children}</div>
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation />
      </div>
      {/* </ProtectedRoute> */}
      <div className="fixed flex items-center space-x-4 top-4 right-4">
        <ThemeSwitch />
        <LanguageSwitch />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
