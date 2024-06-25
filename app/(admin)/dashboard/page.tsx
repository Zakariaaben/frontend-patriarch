import DisplayProjects from "@/utils/DisplayProjects";
import { getUser } from "./getUser";
import { ChangeAdmin } from "@/components/changeAdmin";
import Logout from "@/components/Logout";
import ProjectsTable from "@/components/Admin Components/ProjectsTable";

const Dashboard = async () => {
  const user = await getUser();

  return (
    <>
      <div className="bg-muted/40">
        <h2 className="text-3xl font-bold">Bienvenue {user?.username} !</h2>
        <ChangeAdmin />
        <Logout />

        <div className=" ">
          <ProjectsTable />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
