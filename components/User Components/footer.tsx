import {
  SiGooglemaps,
  SiFacebook,
  SiGmail,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { PhoneCallIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full min-h-fit gap-4 text-sm font-medium text-customcolors-accent-700 items-center p-4  mt-12  bg-customcolors-secondary-100  md:items-center  flex flex-col md:justify-between ">
      <div className="  min-w-fit  w-full  h-full flex-[1]">
        <ul className="grid grid-cols-2   md:grid-cols-4 lg:flex  gap-4  items-center justify-between h-full  [&>li]:flex px-4  [&>li]:items-center [&>li]:md:justify-center [&_a]:flex [&_a]:items-center [&_li]:gap-2 [&_a]:gap-2  ">
          <li>
            <Link href="tel:0661539701" target="_blank">
              <PhoneCallIcon className="w-6" />
              <span>0661539701</span>
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href={"https://maps.app.goo.gl/fY9d4gXNqHJdgwYt5"}
            >
              <SiGooglemaps className="w-6" />
              <span>08 Rue Hamidi Said, Birkhadem</span>
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://facebook.com/p/PATRI-ARCH-PLUS-100063101627356"
            >
              <SiFacebook className="w-6" />
              <span>Patri-Arch-Plus</span>
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/youcef-benhamiche-77177423"}
            >
              <SiLinkedin className="w-6" />
              <span>Patri-Arch-Plus</span>
            </Link>
          </li>
          <li className="max-lg:col-span-full flex justify-center">
            <Link target="_blank" href={"mailto:contact@patriarchplus.com"}>
              <SiGmail className="w-6" />
              <span>contact@patriarchplus.com</span>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        &copy; {new Date().getFullYear()} Patri-Arch-Plus. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
