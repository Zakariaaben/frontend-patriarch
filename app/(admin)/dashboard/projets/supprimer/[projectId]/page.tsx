import DeleteProject from "@/components/Admin Components/DeleteProject";
import { ArrowLeft, TriangleAlert } from "lucide-react";
import { revalidatePath } from "next/cache";
import Link from "next/link";

const Page = async ({ params }: { params: { projectId: number } }) => {
  revalidatePath("/dashboard/projets/supprimer/[projectId]", "page");
  const response = await fetch(
    `http://localhost:3000/api/projects/${params.projectId}`
  );
  const exists = response.status;
  if (exists === 404) {
    return (
      <div className="flex justify-center items-center flex-col gap-8  h-[calc(100vh-5rem)] relative">
        <TriangleAlert size={80} className=" text-red-400" />
        <h1 className="text-4xl text-slate-600 text-center font-medium p-4 ">
          Oops! Le projet que vous recherchez n'éxiste pas.
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
  const project = await response.json();
  return (
    <>
      <DeleteProject project={project} />
    </>
  );
};

export default Page;
