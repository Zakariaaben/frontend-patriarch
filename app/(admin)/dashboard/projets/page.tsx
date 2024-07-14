import ProjectsTable from "@/components/Admin Components/ProjectsTable";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusCircle } from "lucide-react";
import { revalidatePath } from "next/cache";
import Link from "next/link";

const Page = async () => {
  revalidatePath("/dashboard/projets");
  const response = await fetch(`${process.env.HOST_URL}/api/projects`, {
    method: "GET",
  });
  const Projects: Project[] = await response.json();

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
          <Link href="/dashboard/projets/ajouter">
            <PlusCircle className="m-2 " size={28} />
          </Link>
        </div>
      </CardHeader>
      <ScrollArea className="h-[calc(100vh-12rem)] w-full border-t-2 border-slate-400">
        <ProjectsTable projects={Projects} />
      </ScrollArea>
    </>
  );
};

export default Page;
