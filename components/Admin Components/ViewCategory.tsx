"use client";
import { client } from "@/utils/api/client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

export const ViewCategory = ({ category }: { category: Category }) => {
  const router = useRouter();
  const handleDeleteCategory = async () => {
    try {
      const response = await client.delete("/api/categories/" + category.id);
      if (response.status === 200) {
        router.refresh();
        return toast({
          variant: "default",
          description: "Catégorie supprimée avec succès",
        });
      }
    } catch (e) {
      toast({
        variant: "destructive",
        description: (
          <div className="font-semibold">
            La suppression de la catégorie a échoué, des projets sont associés à
            cette catégorie
          </div>
        ),
      });
    }
  };

  return (
    <div className="flex items-center justify-between w-full p-4 border-b-2 border-slate-400 gap-4">
      <span className="font-medium text-md">
        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
      </span>
      <div className="flex gap-2 flex-col sm:flex-row items-center">
        <Button
          size={"lg"}
          variant="destructive"
          className="sm:w-24 p-3 rounded-md h-10 font-semibold"
          onClick={handleDeleteCategory}
        >
          Supprimer
        </Button>
      </div>
    </div>
  );
};
