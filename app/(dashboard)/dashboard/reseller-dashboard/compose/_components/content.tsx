"use client"; // Required for Next.js App Router

import React from "react";
import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default function Content() {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && !editorRef.current.querySelector(".ql-editor")) {
      new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });
    }
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <h1 className="text-xl font-semibold mb-4">Content</h1>
      <div className="w-full">
        <div className="rounded-b-lg" ref={editorRef} style={{ height: 200 }} />
      </div>
    </div>
  );
}
