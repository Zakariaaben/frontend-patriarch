"use client";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { HtmlEditor } from "./HtmlEditor";
import { DatePicker } from "../DatePicker";

import { ScrollArea, ScrollBar } from "../ui/scroll-area";

import DragNdrop from "./DragNdrop";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { client } from "@/utils/api/client";

export const NewProject = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [htmlInput, setHtmlInput] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState(0);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [alert, setAlert] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await client.get("/api/projects/categories");
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
      setAlert("Name is required");
      return;
    }
    if (type === 0) {
      setAlert("Type is required");
      return;
    }
    if (htmlInput === "") {
      setAlert("Description is required");
      return;
    }
    if (!date) {
      setAlert("Date is required");
      return;
    }
    if (files.length === 0) {
      setAlert("Images are required");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", htmlInput);
    formData.append("category", type.toString());
    formData.append("date", date?.toISOString());
    files.forEach((file) => formData.append("images", file));

    try {
      const response = await client.post("/api/projects", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        console.log("Project added successfully !");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card className="mx-12 ">
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

            <div className=" flex items-center gap-6">
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
                htmlInput={htmlInput}
                setHtmlInput={setHtmlInput}
              />
            </div>

            <CardFooter className="flex justify-end p-0">
              {alert && (
                <div className="text-red-500 text-sm font-semibold">
                  {alert}
                </div>
              )}
              <Button className="text-white rounded-lg p-4 m-2 " type="submit">
                Ajouter Le Projet
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
