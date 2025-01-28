"use client";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

import Link from "next/link";

import {
  HomeIcon,
  BarChartIcon,
  FlameIcon,
  MonitorIcon,
  PencilIcon,
  UserCircleIcon,
} from "lucide-react";

export const HEADER_LINKS = [
  {
    icon: <HomeIcon className="size-3.5" />,
    href: "/",
    key: "Home",
  },
  {
    icon: <PencilIcon className="size-3.5" />,
    href: "/blog",
    key: "blog",
  },
  {
    icon: <BarChartIcon className="size-3.5" />,
    href: "/statistics",
    key: "Statistics",
  },
  {
    icon: <FlameIcon className="size-3.5" />,
    href: "/projects",
    key: "projects",
  },
  {
    icon: <UserCircleIcon className="size-3.5" />,
    href: "/about",
    key: "about",
  },
  {
    icon: <MonitorIcon className="size-3.5" />,
    href: "/uses",
    key: "uses",
  },
] as const;

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex items-center justify-center p-0 size-9 md:hidden"
          aria-label={`Toggle-Menu`}
          variant="ghost"
        >
          <MenuIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        {HEADER_LINKS.map((link) => (
          <DropdownMenuItem key={link.key} asChild>
            <Link href={link.href} className="flex items-center gap-4">
              {link.icon}
              <div>{link.key}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
