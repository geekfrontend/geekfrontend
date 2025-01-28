"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  BarChartIcon,
  FlameIcon,
  MonitorIcon,
  PencilIcon,
  UserCircleIcon,
} from "lucide-react";
import Link from "next/link";

export const HEADER_LINKS = [
  {
    icon: <HomeIcon className="size-3.5" />,
    href: "/",
    key: "Home",
  },
  {
    icon: <PencilIcon className="size-3.5" />,
    href: "/blog",
    key: "Blog",
  },
  {
    icon: <BarChartIcon className="size-3.5" />,
    href: "/statistics",
    key: "Statistics",
  },
  {
    icon: <FlameIcon className="size-3.5" />,
    href: "/projects",
    key: "Projects",
  },
  {
    icon: <UserCircleIcon className="size-3.5" />,
    href: "/about",
    key: "About",
  },
  {
    icon: <MonitorIcon className="size-3.5" />,
    href: "/uses",
    key: "Uses",
  },
] as const;

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="hidden gap-2 md:flex">
        {HEADER_LINKS.map((link) => {
          const isActive = link.href === pathname;

          return (
            <li
              key={link.key}
              className="relative flex h-[60px] items-center justify-center"
            >
              <Link
                className={cn(
                  "rounded px-3 py-2 text-sm font-medium transition-colors",
                  {
                    ["text-muted-foreground hover:text-foreground"]: !isActive,
                  },
                  {
                    ["text-foreground"]: isActive,
                  }
                )}
                href={link.href}
              >
                {link.key}
              </Link>
              {isActive ? (
                <>
                  <div className="absolute bottom-0 w-12 h-px -translate-x-1/2 bg-nav-link-indicator dark:bg-nav-link-indicator-dark left-1/2" />
                  <div className="absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 rounded-[4px] bg-[rgb(122_151_255)] blur dark:bg-[rgb(29_72_223)]" />
                </>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
