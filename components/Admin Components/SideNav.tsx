import {
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users2,
} from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Links = [
  { link: "Dashboard", icon: <Home className="h-5 w-5" /> },
  { link: "Orders", icon: <ShoppingCart className="h-5 w-5" /> },
  { link: "Products", icon: <Package className="h-5 w-5" /> },
  { link: "Customers", icon: <Users2 className="h-5 w-5" /> },
  { link: "Analytics", icon: <LineChart className="h-5 w-5" /> },
];

const SideNav = () => {
  return (
    <nav className="flex flex-col items-center gap-4 px-2 py-4 border-r-2 h-screen max-sm:hidden overflow-hidden">
      <Link
        href="#"
        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
      >
        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <TooltipProvider>
        {Links.map((link) => {
          return (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  {link.icon}
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
