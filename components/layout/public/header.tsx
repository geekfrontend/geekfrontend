"use client";

import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/common/Logo";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import MobileNav from "../mobile-nav";
import Navbar from "../navbar";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", changeBackground);

    return () => {
      document.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <motion.header
      className={cn(
        "bg-background/30 fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 shadow-sm saturate-100 backdrop-blur-[10px] transition-colors",
        isScrolled && "bg-background/80"
      )}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <a
        href="#skipMain"
        className="fixed p-2 font-medium transition-transform -translate-y-20 border rounded-sm shadow-sm bg-background focus-visible:ring-ring left-4 top-4 focus-visible:translate-y-0 focus-visible:ring focus-visible:ring-offset-2"
      >
        <span>Skip to main</span>
      </a>
      <Link
        href="/"
        className="flex items-center justify-center gap-1"
        aria-label="Home"
      >
        <Logo width={28} height={28} aria-hidden="true" />
      </Link>
      <div className="flex items-center gap-2">
        <Navbar />
        <Separator orientation="vertical" className="h-6" />
        {/* <ThemeSwitcher />
        <LocaleSwitcher /> */}
        <MobileNav />
      </div>
    </motion.header>
  );
};

export default Header;
