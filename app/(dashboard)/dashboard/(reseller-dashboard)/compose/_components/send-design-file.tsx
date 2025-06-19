"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import FilesIcon from "@/public/incons/files";
import { Editor } from "@tinymce/tinymce-react";

type FormData = {
  content: string;
  media: FileList;
};

export default function SendDesignFile() {
  const { register, handleSubmit, setValue, watch, getValues } =
    useForm<FormData>();
  const editorRef = useRef<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);

  // Handle media file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFile(file);
    if (file) {
      setValue("media", e.target.files);
      // Create preview for image files
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setMediaPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  // Handle form submission
  const onSubmit = (data: FormData) => {
    const editorContent = editorRef.current?.getContent();
    const formData = {
      ...data,
      content: editorContent,
      media: file,
    };
    console.log("Complete Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Content */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h1 className="text-xl font-semibold mb-4">Content</h1>
        <Editor
          apiKey="v165paum3r2kwvwl9yfg9md27pv69hd11c2bjcu6yjaxgye9"
          onInit={(_evt, editor) => (editorRef.current = editor)}
          init={{
            plugins: ["emoticons", "image", "link", "lists"],
            toolbar:
              "undo redo | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
            height: 400,
            menubar: false,
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>

      {/* Media */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h1 className="text-xl font-semibold mb-4">Media</h1>
        <div
          className={`w-full border-2 border-dashed border-gray-300 rounded-lg overflow-hidden relative ${
            mediaPreview ? "h-[200px]" : "p-8"
          }`}
          style={
            mediaPreview
              ? {
                  backgroundImage: `url(${mediaPreview})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : {}
          }
        >
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
            className={`flex flex-col items-center justify-center cursor-pointer ${
              mediaPreview
                ? "absolute inset-0 bg-black/30 hover:bg-black/40 transition-all duration-300"
                : ""
            }`}
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FilesIcon />
            </div>
            <p
              className={`text-base text-gray-600 mb-1 ${
                mediaPreview ? "text-white" : ""
              }`}
            >
              {mediaPreview
                ? "Change Image"
                : "Drag and drop files here or click to upload"}
            </p>
            <p
              className={`text-sm ${
                mediaPreview ? "text-white/80" : "text-gray-500"
              }`}
            >
              Supports: JPG, PNG, MP4
            </p>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <Button type="submit" className="bg-black text-white px-8 py-6">
        Send File
      </Button>
    </form>
  );
}
