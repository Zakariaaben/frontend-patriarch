import { MotionDiv } from "@/components/User Components/motionComponents";
import { ProjectsWrapper } from "@/components/User Components/ProjectsWrapper";
import { SelectCategoryMenu } from "@/components/User Components/selectMenu";
import { revalidatePath } from "next/cache";

import { Suspense } from "react";

export default async function NosProjets({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const { categoryId } = searchParams || {};
  const response = await fetch(process.env.API_url + "/categories");
  const categories: Category[] = await response.json();
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

      <Suspense
        key={categoryId}
        fallback={
          <MotionDiv
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full  p-4  justify-center items-center grid gap-x-8 gap-y-8 grid-cols-1 xl:grid-cols-3 md:grid-cols-2  "
          >
            <MotionDiv
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{
                delay: 0,
                repeat: Infinity,
                duration: 0.3,
                repeatType: "loop",
              }}
              className="w-full h-72 bg-slate-800 rounded-lg"
              initial={{ opacity: 0.2 }}
            ></MotionDiv>
            <MotionDiv
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                delay: 0.5,
                repeat: Infinity,
                duration: 0.3,
                repeatType: "loop",
              }}
              className="w-full h-72 bg-slate-800 rounded-lg"
            ></MotionDiv>
            <MotionDiv
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                delay: 0.75,
                repeat: Infinity,
                duration: 0.3,
                repeatType: "loop",
              }}
              className="w-full h-72 bg-slate-800 rounded-lg"
            ></MotionDiv>
          </MotionDiv>
        }
      >
        <ProjectsWrapper categoryId={categoryId} />
      </Suspense>
    </div>
  );
}
