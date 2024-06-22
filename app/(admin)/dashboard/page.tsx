import DisplayProjects from "@/components/DisplayProjects";
import { getUser } from "./getUser";
import { ChangeAdmin } from "@/components/changeAdmin";

const Dashboard = async () => {
  const user = await getUser();

  return (
    <>
      <h2 className="text-3xl font-bold">Bienvenue {user?.username} !</h2>
      <ChangeAdmin />
      <DisplayProjects />
    </>
  );
};

export default Dashboard;
