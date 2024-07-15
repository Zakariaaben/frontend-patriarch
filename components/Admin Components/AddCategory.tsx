"use client";
import { client } from "@/utils/api/client";
import { PlusSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";

export const AddCategory = () => {
  const router = useRouter();
  const [category, setCategory] = useState("" as string);
  const [message, setMessage] = useState("" as string);
  const handleAddCategory = async () => {
    setMessage("");
    if (category === "")
      return setMessage("Veuillez entrer un nom de catégorie");
    const response = await client.post("/api/categories", { name: category });
    if (response.status === 201) {
      setCategory("");
      router.refresh();
      return toast({
        variant: "default",
        description: "Nouvelle catégorie ajoutée avec succès",
      });
    }
  };
  return (
    <>
      <div className="flex items-start gap-3">
        <div className="flex flex-col max-w-3xl flex-1">
          <Input
            placeholder="Nom de la catégorie"
            className="focus-visible:ring-1 "
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setMessage("");
            }}
          />

          <div className="text-red-500 text-sm p-2">{message}</div>
        </div>

        <PlusSquare
          size={35}
          className="text-slate-500  hover:text-slate-900 duration-200 cursor-pointer transition"
          onClick={handleAddCategory}
        />
      </div>
    </>
  );
};
