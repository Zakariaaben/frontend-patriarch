"use client";
import { TriangleAlert } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { client } from "@/utils/api/client";
import { useRouter } from "next/navigation";

const DeleteProject = ({ project }: { project: Project }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const response = await client.delete("/api/projects/" + project.id);
    console.log(response.data);
    if (response.status === 200) {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-8  h-[calc(100vh-5rem)] relative">
        <TriangleAlert size={80} className=" text-red-400" />
        <h1 className="text-4xl text-slate-600 text-center font-medium px-2 max-sm:text-3xl  ">
          Êtes-vous sûr de vouloir supprimer le projet
          <span className="font-bold"> "{project.name}" </span> ?
        </h1>

        <div className="flex gap-8">
          <Link href="/dashboard ">
            <Button
              variant={"default"}
              size={"lg"}
              className="h-12 w-36 rounded-lg text-lg"
            >
              Retour
            </Button>
          </Link>
          <Button
            variant={"destructive"}
            size={"lg"}
            className="h-12 w-36 rounded-lg"
            onClick={handleDelete}
          >
            <span className="text-lg">Supprimer</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default DeleteProject;
