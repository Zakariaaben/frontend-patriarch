import { EditProject } from "@/components/Admin Components/EditProject";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, LucidePanelsTopBottom, TriangleAlert } from "lucide-react";
import { revalidatePath } from "next/cache";
import Link from "next/link";

const Page = async ({ params }: { params: { projectId: number } }) => {
  revalidatePath("/dashboard/projets/editer/[projectId]", "page");
  const response = await fetch(
    `https://api.patriarchplus.com/projects/${params.projectId}`
  );
  const exists = response.status;
  if (exists === 404) {
    return (
      <div className="flex justify-center items-center flex-col gap-8  h-[calc(100vh-5rem)] relative">
        <TriangleAlert size={80} className=" text-red-400" />
        <h1 className="text-4xl text-slate-600 text-center font-medium p-4 ">
          Oops! Le projet que vous recherchez n&apos;éxiste pas.
        </h1>
        <Link href="/dashboard" className="flex items-center gap-2">
          <ArrowLeft size={24} />
          <span className="text-xl font-medium">
            Retourner au tableau de bord
          </span>
        </Link>
      </div>
    );
  }
  const project: Project = await response.json();

  return (
    <>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">Projets</CardTitle>
            <CardDescription>
              Gerez vos projets comme bon vous semble !
            </CardDescription>
          </div>
          <Link href="/dashboard/projets">
            <LucidePanelsTopBottom className="m-2 " size={28} />
          </Link>
        </div>
      </CardHeader>
      <EditProject project={project} />
    </>
  );
};

export default Page;
