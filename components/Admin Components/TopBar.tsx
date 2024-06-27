import { getUser } from "@/app/(admin)/dashboard/getUser";
import SearchProfile from "./SearchProfile";

const TopBar = async () => {
  const user = await getUser();
  return <SearchProfile user={user} />;
};
export default TopBar;
