import { CardSkeleton } from "@/components/User Components/CardSkeleton";
import { SelectCategoryMenu } from "@/components/User Components/selectMenu";
import { revalidatePath } from "next/cache";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ProjectsView = dynamic(
  () => import("../../../components/User Components/ProjectsWrapper"),
  {
    ssr: true,
    loading: () => <CardSkeleton />,
  }
);

export default async function NosProjets({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const { categoryId } = searchParams || {};
  let categories: Category[] = [];
  try {
    const response = await fetch(process.env.API_URL + "/categories");
    categories = await response.json();
  } catch (e) {
    console.error(e);
    categories = [];
  }
  revalidatePath("/nosprojets");
  return (
    <div className={"text-slate-800 min-h-screen  "}>
      <div className="flex items-center w-full  p-4 gap-4">
        <span className="font-semibold text-xl ">Filtrer:</span>
        <SelectCategoryMenu
          options={categories}
          defaultValue={
            categories.find((cat) => cat.id === Number(categoryId))?.name ||
            "Tous les Projets"
          }
        />
      </div>

      <Suspense key={categoryId} fallback={<CardSkeleton />}>
        <ProjectsView categoryId={categoryId} key={categoryId} />
      </Suspense>
    </div>
  );
}
