import { AddCategory } from "@/components/Admin Components/AddCategory";
import { ViewCategory } from "@/components/Admin Components/ViewCategory";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const Page = async () => {
  const response = await fetch(process.env.API_URL + "/categories", {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });
  const Categories: Category[] = await response.json();
  return (
    <>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">Catégories</CardTitle>
            <CardDescription>
              Ajoutez modifiez et supprimez des catégories.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="gap-4 flex flex-col">
          <AddCategory />
          <ScrollArea className="h-[calc(100vh-12rem)] w-full border-t-2 border-slate-400">
            <div>
              {Categories.map((category, key) => {
                return <ViewCategory key={key} category={category} />;
              })}
            </div>
          </ScrollArea>
        </div>
      </CardContent>
    </>
  );
};
export default Page;
