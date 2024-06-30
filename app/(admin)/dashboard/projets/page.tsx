import MobileSideNav from "@/components/Admin Components/MobileSideNav";
import ProjectsTable from "@/components/Admin Components/ProjectsTable";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, PlusCircle, PlusSquare } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">Projets</CardTitle>
            <CardDescription>
              Manage your Projects and view their performance.
            </CardDescription>
          </div>
          <Link href="/dashboard/projets/nouveau">
            <PlusCircle className="m-2 " size={28} />
          </Link>
        </div>
      </CardHeader>
      <ScrollArea className="h-[calc(100vh-12rem)] w-full border-t-2 border-slate-400">
        <ProjectsTable />
      </ScrollArea>
    </>
  );
};

export default Page;
