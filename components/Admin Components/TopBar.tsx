import getConfig from "next/config";
import { cookies } from "next/headers";
import MobileSideNav from "./MobileSideNav";
import SearchProfile from "./SearchProfile";

const { publicRuntimeConfig } = getConfig();

const TopBar = async () => {
  const user = await fetch(publicRuntimeConfig.API_URL + "/auth/check-auth", {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: cookies().toString(),
    },
  }).then((res) => res.json());
  return (
    <div className="flex items-center justify-between">
      <MobileSideNav />
      <SearchProfile user={user} />
    </div>
  );
};
export default TopBar;
