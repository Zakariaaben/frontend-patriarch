import DisplayProjects from "@/utils/DisplayProjects";
import { getUser } from "./getUser";
import { ChangeAdmin } from "@/components/changeAdmin";
import Logout from "@/components/Logout";

const Dashboard = async () => {
  const user = await getUser();

  return (
    <>
      <h2 className="text-3xl font-bold">Bienvenue {user?.username} !</h2>
      <ChangeAdmin />
      <DisplayProjects />
      <Logout />
    </>
  );
};

export default Dashboard;
