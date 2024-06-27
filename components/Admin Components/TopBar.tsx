import { getUser } from "@/app/(admin)/dashboard/getUser";
import SearchProfile from "./SearchProfile";
import { Box } from "lucide-react";
import MobileSideNav from "./MobileSideNav";

const TopBar = async () => {
  const user = await getUser();
  return (
    <div className="flex items-center justify-between">
      <MobileSideNav />
      <SearchProfile user={user} />
    </div>
  );
};
export default TopBar;
