"use client";
import { Dispatch, useState } from "react";

import "ace-builds";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import AceEditor from "react-ace";
import DOMPurify from "isomorphic-dompurify";
import { SetStateAction } from "jotai";

export const HtmlEditor = ({
  className,
  contentGetter,
}: {
  className?: string;
  contentGetter?: Dispatch<SetStateAction<string>>;
}) => {
  const [htmlInput, setHtmlInput] = useState(`
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
        `);

  const cleanHTML = DOMPurify.sanitize(htmlInput);

  return (
    <>
      <div className={"flex flex-col justify-center items-center " + className}>
        <AceEditor
          mode="html"
          theme="monokai"
          onChange={(value) => {
            setHtmlInput(value);
            if (contentGetter) contentGetter(value);
          }}
          name="html-editor"
          editorProps={{ $blockScrolling: true }}
          height="400px"
          width="100%"
          style={{
            fontFamily: "Consolas, sans-serif",
            fontWeight: "medium",
          }}
          value={htmlInput}
          fontSize={18}
          wrapEnabled={true}
          showPrintMargin={false}
          setOptions={{ useWorker: false }}
        />
        <h2 className="mt-4 text-xl font-semibold">Apercu</h2>
        <div
          dangerouslySetInnerHTML={{ __html: cleanHTML }}
          className="border-2 border-slate-400 w-full min-h-[50px]"
        />
      </div>
    </>
  );
};
