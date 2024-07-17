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

import { ScrollArea, ScrollBar } from "../ui/scroll-area";

import { client } from "@/utils/api/client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import DragNdrop from "./DragNdrop";

import { CheckIcon } from "lucide-react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { MoonLoader } from "react-spinners";
import { useToast } from "../ui/use-toast";

const initialContent = `
        <div class="px-4 sm:px-8 py-2">
    
        <h2 style="font-size: 28px ;line-height: 1.75rem; font-weight:600;">
        Sous-titre de la section
        </h2>
    
        <p style="font-size:1.25rem ;font-weight:500; margin-top:5px; text-align:justify;" >
        &emsp;Lorem Ipsum <i>CE TEXTE EST EN ITALIQUE</i> of the printing and typesetting industry. Lorem Ipsum has been the industry's <span style="color:red">CE TEXTE EST EN COULEUR</span>  since the 1500s, when an unknown printer took a galley of type and <strong>CE TEXTE EST EN GRAS</strong> it to make a type.
        <br>
        &emsp;Ceci est un saut de ligne
        </p>
    
        </div>
        `;

export const NewProject = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [htmlInput, setHtmlInput] = useState(initialContent);
  const [name, setName] = useState("");
  const [type, setType] = useState(0);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [alert, setAlert] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

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
    if (files.length === 0) {
      setAlert("Veuillez entrer les images du projet");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", htmlInput);
    formData.append("categoryId", type.toString());
    formData.append("date", moment(date).format());

    files.forEach((file) => {
      formData.append("images", file);
    });
    try {
      const response = await client.post("/api/projects", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onDownloadProgress: (progressEvent) => {
          console.log(
            "Upload Progress: " + Math.round(progressEvent.loaded) + "%"
          );
        },
      });

      if (response.status === 201) {
        console.log("Project added successfully !");
        toast({
          action: (
            <div className="flex flex-col w-full gap-2">
              <div className="w-full flex items-center gap-2">
                <span className="first-letter:capitalize font-semibold text-lg">
                  Projet ajouté avec succés
                </span>
                <CheckIcon className="mr-2 text-green-500" />
              </div>

              <pre className="bg-black w-full text-green-500 p-4 rounded-lg">
                {JSON.stringify(
                  {
                    nom: name,
                    categorie: categories.find((cat) => cat.id === type)?.name,
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
    } catch (error) {
      console.error(error);
      setAlert("Erreur: Projet Non ajouté");
      setLoading(false);
    }
  };

  return (
    <>
      <Card className="mx-2 md:mx-12">
        <CardHeader>
          <CardTitle>Creer un nouveau Projet</CardTitle>
          <CardDescription className="font-semibold  ">
            Ajouter votre projet en un clic.
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
                <Select onValueChange={(key) => setType(Number(key))}>
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

            <div className=" flex items-center gap-6 flex-col sm:flex-row">
              <ScrollArea>
                <DragNdrop fileGetter={setFiles} />
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
              <div className="ml-auto">
                <DatePicker dateGetter={setDate} />
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
                className={`flex gap-4 items-center justify-center transition-all duration-200 ease-in-out ${
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
