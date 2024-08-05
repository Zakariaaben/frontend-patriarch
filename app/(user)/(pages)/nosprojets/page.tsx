import { CardSkeleton } from "@/components/User Components/CardSkeleton";
import { SelectCategoryMenu } from "@/components/User Components/selectMenu";
import { unstable_noStore as noStore } from "next/cache";
import getConfig from "next/config";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ProjectsView = dynamic(
  () => import("../../../../components/User Components/ProjectsWrapper"),
  {
    ssr: true,
    loading: () => <CardSkeleton />,
  }
);

const { publicRuntimeConfig } = getConfig();

export default async function NosProjets({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  noStore();
  const { categoryId } = searchParams || {};
  let categories: Category[] = [];
  try {
    const response = await fetch(publicRuntimeConfig.API_URL + "/categories");
    categories = await response.json();
  } catch (e) {
    console.error(e);
    categories = [];
  }
  return (
    <div className={"text-slate-800 min-h-[100dvh]  "}>
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

      <Suspense
        key={categoryId}
        fallback={
          <div className="min-h-[100dvh]">
            <CardSkeleton />
          </div>
        }
      >
        <ProjectsView categoryId={categoryId} key={categoryId} />
      </Suspense>
    </div>
  );
}
