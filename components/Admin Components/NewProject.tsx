"use client";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
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
import { ImageDown, X } from "lucide-react";
import { ChangeEvent, MouseEventHandler, useRef, useState } from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from "@hello-pangea/dnd";

const types = [
  { name: "next", id: 1 },
  { name: "sveltekit", id: 2 },
  { name: "astro", id: 3 },
  { name: "nuxt", id: 4 },
];

export const NewProject = () => {
  const selectImagesRef = useRef<HTMLInputElement>(null);
  const [cashedImages, setCashedImages] = useState<string[]>([]);
  const [finalFiles, setFinalFiles] = useState<File[]>([]);

  const handleSelectImages: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    selectImagesRef.current?.click();
  };

  const handleImageChanges = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    setFinalFiles((prev) => [...prev, ...files]);

    for (let i = 0; i < files.length; i++) {
      setCashedImages((prev) => [...prev, URL.createObjectURL(files[i])]);
    }
  };

  const handleDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) return;

    const reorderedImages = Array.from(cashedImages);
    const [movedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, movedImage);

    const reorderedFiles = Array.from(finalFiles);
    const [movedFile] = reorderedFiles.splice(result.source.index, 1);
    reorderedFiles.splice(result.destination.index, 0, movedFile);

    setCashedImages(reorderedImages);
    setFinalFiles(reorderedFiles);
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
          <form encType="multipart/form-data">
            <div className="flex flex-row gap-8">
              <div className="flex-[2]">
                <Label>Nom</Label>
                <Input
                  placeholder="Nom du projet"
                  className="text-[16px] focus-visible:ring-transparent focus:border-black border-2"
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
                      >
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
          <div className=" flex items-center gap-6">
            <ScrollArea>
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="images" direction="horizontal">
                  {(provided) => (
                    <div
                      className={
                        "h-[150px] bg-slate-100 flex items-center min-w-[400px] rounded-lg  p-4 "
                      }
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {cashedImages.map((img, index) => (
                        <Draggable key={img} draggableId={img} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="relative mx-2"
                            >
                              <Image
                                src={img}
                                alt="images"
                                height={120}
                                className="w-[auto]  h-[120px] rounded-lg"
                                width={80}
                              />
                              <X
                                size={30}
                                onClick={() => {
                                  setCashedImages((prev) =>
                                    prev.filter((_, i) => i !== index)
                                  );
                                  setFinalFiles((prev) =>
                                    prev.filter((_, i) => i !== index)
                                  );
                                }}
                                className="p-1 font-extrabold absolute top-[-0.5rem] right-[-0.5rem] cursor-pointer bg-slate-200 opacity-70 hover:opacity-100 rounded-full transition"
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      <div
                        onClick={handleSelectImages}
                        className="min-w-[70px] h-[70px]  text-slate-200  bg-slate-500 rounded-lg flex items-center justify-center hover:bg-slate-300 transition cursor-pointer hover:text-slate-700 ml-auto"
                        style={{ order: 9999 }}
                      >
                        <ImageDown size={32} />
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              <ScrollBar orientation="horizontal" />
              <input
                type="file"
                className="hidden"
                accept="image/png, image/jpeg, image/jpg"
                ref={selectImagesRef}
                onChange={handleImageChanges}
                multiple
              />
            </ScrollArea>
            <div className="ml-auto">
              <DatePicker />
            </div>
          </div>

          <div className="w-100% ">
            <h2 className="text-xl py-2 font-semibold">Description</h2>
            <HtmlEditor className="p-2" />
          </div>
        </CardContent>
      </Card>
    </>
  );
};
