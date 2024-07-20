"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
interface link {
  name: string;
  url: string;
}
const links: link[] = [
  { name: "Acceuil", url: "/" },
  { name: "Nos Projets", url: "#" },
  { name: "Services", url: "#" },
  { name: "Contact", url: "/contact" },
];

import { Roboto_Mono } from "next/font/google";
import { useEffect, useState } from "react";
const roboto = Roboto_Mono({ subsets: ["latin"] });
const Navbar = () => {
  const [bgColor, setBgColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 50) {
        setBgColor("shadow-md  bg-primarycolor-950");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={"sticky z-50 h-12 w-full top-0 " + roboto.className}>
        <div
          className={
            "min-w-full container flex h-12 items-center justify-between px-4 md:px-16  opacity-90 transition-colors duration-300 " +
            bgColor
          }
        >
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <p className="text-2xl font-bold text-accentcolor-400">PatriArch</p>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex items-center gap-12">
            {links.map((link, key) => (
              <Link
                key={key}
                href={link.url}
                className="text-lg font-semibold transition-colors text-text-200 hover:text-text-50 dark:hover:text-gray-50"
                prefetch={false}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-slate-600 hover:text-slate-800"
              >
                <MenuIcon className="h-6 w-6 " />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className={
                "w-[300px] bg-[#4B5043] border-[#4B5043] opacity-95 " +
                roboto.className
              }
            >
              <SheetDescription></SheetDescription>
              <SheetTitle></SheetTitle>
              <div className="flex h-16 items-center justify-end px-4 ">
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-300 hover:text-slate-800"
                  >
                    <XIcon className="h-8 w-8  " />
                    <span className="sr-only">Close navigation menu</span>
                  </Button>
                </SheetClose>
              </div>
              <div className="grid gap-8 py-8 px-4">
                {links.map((link, key) => (
                  <SheetClose asChild key={key}>
                    <Link
                      key={key}
                      href={link.url}
                      prefetch={false}
                      className={LinkStyle}
                    >
                      <button>{link.name}</button>
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};
export default Navbar;

const LinkStyle: string =
  "flex items-center rounded-md py-2 px-4 text-2xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 text-slate-300";
