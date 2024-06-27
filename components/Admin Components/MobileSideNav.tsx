import Link from "next/link";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { AppWindowIcon, Package2, Wind } from "lucide-react";

const MobileSideNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base sm:hidden"
          >
            <AppWindowIcon className="h-4 w-4 transition-all group-hover:scale-110 " />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </SheetTrigger>
      </Sheet>
    </>
  );
};

export default MobileSideNav;
