"use client";

import { motion, useAnimationControls } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Open_Sans } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MotionButton } from "./motionComponents";

const os = Open_Sans({ subsets: ["latin"] });

export function SelectCategoryMenu({
  options,
  defaultValue,
}: {
  options: Category[];
  defaultValue: string;
}) {
  const pathname = usePathname();
  const Router = useRouter();
  const menu = useRef<HTMLDivElement>(null);
  const [currentOption, setoption] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const [initialMount, setInitialMount] = useState(true);

  useEffect(() => {
    if (initialMount) {
      setInitialMount(false);
      return;
    }
  }, [pathname]);

  const handleOpenMenu = async () => {
    setOpen(!open);
    if (open) {
      controls.start({ opacity: 0, x: -20 }).then(() => {
        setShouldDisplay(false);
      });
    } else {
      await new Promise((resolve) => resolve(setShouldDisplay(true)));
      controls.start({ opacity: 1, x: 0 });
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menu.current && !menu.current.contains(event.target as HTMLElement)) {
        setOpen(false);
        controls.start({ opacity: 0, x: -10 });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }),
    [menu];
  const controls = useAnimationControls();

  return (
    <div
      className={"size-fit  relative z-10 text-base " + os.className}
      ref={menu}
    >
      <MotionButton
        className="text-slate-300 text-left text-nowrap flex w-56 justify-between "
        onClick={handleOpenMenu}
        animate={{ opacity: [0, 1] }}
        initial={initialMount ? false : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={currentOption}
      >
        {currentOption}{" "}
        <ChevronDown
          className={`transform transition duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </MotionButton>

      <div
        className={`${
          shouldDisplay ? " absolute rounded-sm " : " hidden "
        } grid grid-cols-1 absolute top-[150%] gap-1 w-full text-sm`}
      >
        <motion.button
          className={`text-slate-200 text-left text-nowrap   w-full p-3 rounded-md font-semibold ${
            currentOption == "Tous les Projets"
              ? " bg-[#cad4f0] text-slate-900"
              : " bg-primarycolor-900 "
          }`}
          whileHover={{ scale: 1.02 }}
          onClick={() => {
            setoption("Tous les Projets");

            handleOpenMenu();
            Router.push(pathname);
            Router.refresh();
          }}
          animate={controls}
          initial={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.1, scale: { duration: 0.1 } }}
        >
          Tous les Projets
        </motion.button>
        {options.map((option, index) => (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={controls}
            className={`text-slate-200 text-left text-nowrap   w-full p-3 rounded-md font-semibold ${
              currentOption == option.name
                ? " bg-[#cad4f0] text-slate-900"
                : " bg-primarycolor-900 "
            }`}
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              setoption(option.name);
              handleOpenMenu();
              Router.push(pathname + "?categoryId=" + option.id);
            }}
            transition={{
              delay: (index + 1) * 0.05,
              duration: 0.1,
              scale: { duration: 0.1 },
            }}
            key={index}
          >
            {option.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
