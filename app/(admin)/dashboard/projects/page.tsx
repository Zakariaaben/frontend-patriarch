import MobileSideNav from "@/components/Admin Components/MobileSideNav";
import ProjectsTable from "@/components/Admin Components/ProjectsTable";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Page = () => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg">Projets</CardTitle>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <ScrollArea className="h-[calc(100vh-12rem)] w-full border-t-2 border-slate-400">
        <ProjectsTable />
      </ScrollArea>
      <ScrollArea />
    </>
  );
};

export default Page;
