"use client";
import { Dispatch, useEffect, useState } from "react";

import "ace-builds";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import AceEditor from "react-ace";
import DOMPurify from "isomorphic-dompurify";
import { SetStateAction } from "jotai";

export const HtmlEditor = ({
  className,
  contentGetter,
  initialContent,
}: {
  className?: string;
  contentGetter?: Dispatch<SetStateAction<string>>;
  initialContent?: string;
}) => {
  const [htmlInput, setHtmlInput] = useState(initialContent || "");
  if (contentGetter) useEffect(() => contentGetter(htmlInput), [htmlInput]);

  const cleanHTML = DOMPurify.sanitize(htmlInput);

  return (
    <>
      <div className={"flex flex-col justify-center items-center " + className}>
        <AceEditor
          mode="html"
          theme="monokai"
          onChange={(value) => {
            setHtmlInput(value);
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
