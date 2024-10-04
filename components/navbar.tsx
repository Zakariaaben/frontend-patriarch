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
  { name: "Nos Projets", url: "/nosprojets" },
  { name: "Nos Prestations", url: "/nosprestations" },
  { name: "Contact", url: "/contact" },
];

import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

const monserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 50) {
        setBgColor("shadow-[0_8px_30px_rgb(0,0,0,0.12)]");
      } else {
        setBgColor("");
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
      <div
        className={`${monserrat.className} sticky z-[50] w-full  bg-customcolors-background top-0 min-w-full container flex h-12 items-center justify-between px-4 md:px-12 lg:px-16 transition duration-300  ${bgColor}`}
      >
        <Link href="/" className="flex items-center gap-2">
          <h1
            className="text-2xl font-extrabold text-[#2E2D4D]"
            aria-label="Logo Patriarch"
          >
            Patri-Arch-Plus
          </h1>
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden md:flex ">
          <ul className="flex items-center gap-10">
            {links.map((link, key) => (
              <Link
                href={link.url}
                className="text-lg font-bold   hover:text-heavy-metal-800"
                key={key}
              >
                {link.name}
              </Link>
            ))}
          </ul>
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
            className={"w-[300px] bg-[#4B5043] border-[#4B5043] opacity-95 "}
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
                    scroll={false}
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
    </>
  );
};
export default Navbar;

const LinkStyle: string =
  "flex items-center rounded-md py-2 px-4 text-2xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 text-slate-300";
