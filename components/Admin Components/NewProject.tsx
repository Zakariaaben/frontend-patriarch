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
import { useState } from "react";
import { client } from "@/utils/api/client";

const types = [
  { name: "next", id: 1 },
  { name: "sveltekit", id: 2 },
  { name: "astro", id: 3 },
  { name: "nuxt", id: 4 },
];

export const NewProject = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [htmlInput, setHtmlInput] = useState(``);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", htmlInput);
    formData.append("type", type);
    formData.append("date", date?.toISOString() || "");
    files.forEach((file) => formData.append("images", file));

    console.log(formData.get("name"));
    console.log(formData.get("description"));
    console.log(formData.get("type"));
    console.log(formData.get("images"));
    client.post("/api/projects", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
                <Select>
                  <SelectTrigger id="framework" className="border-2">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {types.map((type) => (
                      <SelectItem
                        key={type.id}
                        value={type.name}
                        className="cursor-pointer"
                        onClick={() => setType(type.name)}
                      >
                        {type.name}
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
