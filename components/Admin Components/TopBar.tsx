import { cookies } from "next/headers";
import MobileSideNav from "./MobileSideNav";
import SearchProfile from "./SearchProfile";

const TopBar = async () => {
  const user = await fetch("https://api.patriarchplus.com/auth/check-auth", {
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
