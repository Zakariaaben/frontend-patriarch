import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon, MountainIcon, XIcon } from "lucide-react";

interface link {
  name: string;
  url: string;
}
const links: link[] = [
  { name: "Acceuil", url: "/" },
  { name: "Nos Projets", url: "#" },
  { name: "Services", url: "#" },
  { name: "Contact", url: "#" },
];

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950">
        <div className="container flex h-16 items-center justify-between px-4 md:px-16  ">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <p className="text-2xl font-bold">PatriArch</p>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-12">
            {links.map((link, key) => (
              <Link
                key={key}
                href={link.url}
                className="text-lg font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-50"
                prefetch={false}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px]">
              <div className="flex h-16 items-center justify-between px-4 ">
                <Link
                  href="#"
                  className="flex items-center gap-2"
                  prefetch={false}
                >
                  <MountainIcon className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <XIcon className="h-8 w-8 " />
                    <span className="sr-only">Close navigation menu</span>
                  </Button>
                </SheetClose>
              </div>
              <div className="grid gap-3 py-8 px-4">
                <Link href="#" className={LinkStyle} prefetch={false}>
                  Home
                </Link>
                <Link href="#" className={LinkStyle} prefetch={false}>
                  Features
                </Link>
                <Link href="#" className={LinkStyle} prefetch={false}>
                  Pricing
                </Link>
                <Link href="#" className={LinkStyle} prefetch={false}>
                  Contact
                </Link>
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
  "flex items-center rounded-md py-2 px-4 text-lg font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50";
