"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Quill from "quill";
import "quill/dist/quill.snow.css";

type FormData = {
  content: string;
  media: FileList;
};

export default function SendDesignFile() {
  const { register, handleSubmit, setValue, watch, getValues } = useForm<FormData>();
  const editorRef = useRef<HTMLDivElement>(null);
  const [file, setFile] = useState<File | null>(null);

  // Initialize Quill editor
  useEffect(() => {
    if (editorRef.current && !editorRef.current.querySelector(".ql-editor")) {
      const quill = new Quill(editorRef.current, {
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

      // Update content state when the editor's content changes
      quill.on("text-change", () => {
        setValue("content", quill.root.innerHTML);
      });
    }
  }, [setValue]);

  // Handle media file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFile(file);
    if (file) {
      setValue("media", e.target.files);
    }
  };

  // Handle form submission
  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    // console.log("Editor Content:", getValues("content"));
    // console.log("Selected Media File:", file);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Content */}
      <div className="bg-white p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <h1 className="text-xl font-semibold mb-4">Content</h1>
        <div className="w-full">
          <div
            className="rounded-b-lg"
            ref={editorRef}
            style={{ height: 200 }}
          />
        </div>
      </div>

      {/* Media */}
      <div className="bg-white p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <h1 className="text-xl font-semibold mb-4">Media</h1>
        <div className="w-full">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              id="media-upload"
              {...register("media")}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*,video/*"
            />
            <label
              htmlFor="media-upload"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <p className="text-base text-gray-600 mb-1">
                Drag and drop files here or click to upload
              </p>
              <p className="text-sm text-gray-500">
                Support JPG, PNG, MP4 (max 10MB)
              </p>
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button type="submit" className="bg-black text-white px-8 py-6">
        Send File
      </Button>
    </form>
  );
}
