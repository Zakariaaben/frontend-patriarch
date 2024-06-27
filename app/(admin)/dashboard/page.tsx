import ProjectsTable from "@/components/Admin Components/ProjectsTable";
import TopBar from "@/components/Admin Components/TopBar";
import { ScrollArea } from "@/components/ui/scroll-area";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-4 m-4">
        <TopBar />

        <ProjectsTable />
      </div>
    </>
  );
};

export default Dashboard;
