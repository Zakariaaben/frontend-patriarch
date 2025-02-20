"use client";
import { ListTodo, Package2, SquareStackIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Links = [
  { link: "Projets", icon: <ListTodo /> },
  { link: "Categories", icon: <SquareStackIcon /> },
];

const SideNav = () => {
  const path = usePathname();

  return (
    <nav className="flex flex-col items-center gap-4 px-2 py-4 w-16 border-r-2 h-screen max-sm:hidden overflow-hidden">
      <Link
        href="#"
        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
      >
        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <TooltipProvider>
        {Links.map((link, key) => {
          return (
            <Tooltip key={key}>
              <TooltipTrigger asChild>
                <Link
                  href={`/dashboard/${link.link.toLowerCase()}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <div
                    className={
                      "h-8 w-8 flex items-center justify-center rounded-xl bg-transparent transition-color " +
                      (path.includes(link.link.toLowerCase())
                        ? "bg-gray-100"
                        : "")
                    }
                  >
                    {React.cloneElement(link.icon, {
                      className:
                        "h-6 w-6 " +
                        (path.includes(link.link.toLowerCase())
                          ? "text-black"
                          : ""),
                    })}
                  </div>
                  <span className="sr-only">{link.link}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{link.link}</TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </nav>
  );
};

export default SideNav;
