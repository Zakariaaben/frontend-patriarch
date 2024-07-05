"use client";
import {
  ChangeEvent,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from "@hello-pangea/dnd";
import Image from "next/image";
import { ImageDown, X } from "lucide-react";

export default function DragNdrop({
  fileGetter,
}: {
  fileGetter?: (theFiles: File[]) => void;
}) {
  const [cashedImages, setCashedImages] = useState<string[]>([]);
  const [finalFiles, setFinalFiles] = useState<File[]>([]);

  const selectImagesRef = useRef<HTMLInputElement>(null);
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

  useEffect(() => {
    if (fileGetter) fileGetter(finalFiles);
  }, [finalFiles, fileGetter]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="images" direction="horizontal">
        {(provided) => (
          <div
            className={
              "h-[150px] bg-slate-100 flex items-center min-w-[400px] rounded-lg  p-4 my-4 "
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
      <input
        type="file"
        className="hidden"
        accept="image/png, image/jpeg, image/jpg"
        ref={selectImagesRef}
        onChange={handleImageChanges}
        multiple
      />
    </DragDropContext>
  );
}
