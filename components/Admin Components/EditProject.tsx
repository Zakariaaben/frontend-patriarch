"use client";
import { DatePicker } from "../DatePicker";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { HtmlEditor } from "./HtmlEditor";

import { ScrollArea } from "../ui/scroll-area";

import { client } from "@/utils/api/client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import DragNdrop from "./DragNdrop";

import { Scrollbar } from "@radix-ui/react-scroll-area";
import { CheckIcon } from "lucide-react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { MoonLoader } from "react-spinners";
import { Checkbox } from "../ui/checkbox";
import { useToast } from "../ui/use-toast";

export const EditProject = ({ project }: { project: Project }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [htmlInput, setHtmlInput] = useState(project.description);
  const [name, setName] = useState(project.name);
  const [date, setDate] = useState<Date | undefined>(new Date(project.date));
  const [type, setType] = useState(project.category.id || 0);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");
  const { toast } = useToast();
  const router = useRouter();
  const [modifyImages, setModifyImages] = useState(false);

  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await client.get("/api/categories");
        if (response.status === 200) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlert("");

    if (name === "") {
      setAlert("Veuillez entrer un nom de projet");
      return;
    }
    if (type == 0) {
      setAlert("Veuillez entrer un type de projet");
      return;
    }
    if (htmlInput === "") {
      setAlert("Veuillez entrer une description de projet");
      return;
    }
    if (!date) {
      setAlert("Veuillez entrer la date du projet");
      return;
    }
    if (modifyImages && files.length === 0) {
      setAlert("Veuillez entrer les images du projet");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", htmlInput);
    formData.append("categoryId", type.toString());
    formData.append("date", moment(date).format());
    files.forEach((file) => formData.append("images", file));

    const response = await client.put("/api/projects/" + project.id, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      toast({
        action: (
          <div className="flex flex-col w-full gap-2">
            <div className="w-full flex items-center gap-2">
              <span className="first-letter:capitalize font-semibold text-md">
                Projet modifié avec succés
              </span>
              <CheckIcon className="mr-2 text-green-500" />
            </div>

            <pre className="bg-black w-full text-green-500 p-4 rounded-lg text-sm">
              {JSON.stringify(
                {
                  nom: name,
                  categorie: categories.find((c) => c.id === type)?.name,
                  date: date?.toDateString(),
                },
                null,
                2
              )}
            </pre>
          </div>
        ),
        className: "p-4 pl-2",
      });
      router.push("/dashboard/projets");
      router.refresh();
      return setLoading(false);
    }

    setAlert("Erreur: " + response.data.message);
    setLoading(false);
  };

  return (
    <>
      <Card className="mx-2 md:mx-12">
        <CardHeader>
          <CardTitle>Modifier le projet</CardTitle>
          <CardDescription className="font-semibold  ">
            Ajouter des modifications a votre projet en un clic.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="flex flex-row gap-8">
              <div className="flex-[2]">
                <Label>Nom</Label>
                <Input
                  placeholder="Nom du projet"
                  className="text-[16px] focus-visible:ring-transparent focus:border-black border-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex-[1]">
                <Label>Categorie</Label>
                <Select
                  onValueChange={(key) => setType(Number(key))}
                  value={type.toString()}
                >
                  <SelectTrigger id="framework" className="border-2">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {categories.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id.toString()}
                        className="cursor-pointer"
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className=" flex flex-col sm:flex-row items-center gap-6">
              <div className="flex  items-center gap-4">
                <div
                  className={
                    !modifyImages
                      ? " blur-[1px] pointer-events-none opacity-70"
                      : ""
                  }
                >
                  <ScrollArea>
                    <DragNdrop fileGetter={setFiles} />
                    <Scrollbar orientation="horizontal" />
                  </ScrollArea>
                </div>
                <Checkbox
                  className="w-6 h-6 border-2 transition border-slate-800"
                  checked={modifyImages}
                  onCheckedChange={() => setModifyImages(!modifyImages)}
                />
              </div>
              <div className="ml-auto">
                <DatePicker dateGetter={setDate} initialDate={date} />
              </div>
            </div>
            <div className="w-100% ">
              <h2 className="text-xl py-2 font-semibold">Description</h2>
              <HtmlEditor
                className="p-2"
                contentGetter={setHtmlInput}
                initialContent={htmlInput}
              />
            </div>

            <CardFooter className="flex justify-end p-0 gap-2">
              {alert && (
                <div className="text-red-500 text-lg font-semibold">
                  {alert}
                </div>
              )}
              <Button
                type="submit"
                className={`flex gap-4 items-center justify-center transition-all duration-200 ease-in-out m-2 ${
                  loading ? "px-4" : "px-2"
                }`}
              >
                <div>Ajouter le projet</div>
                {loading && (
                  <MoonLoader
                    color={"#ffffff"}
                    speedMultiplier={0.5}
                    size={20}
                  />
                )}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
