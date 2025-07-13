"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { useGetBlogCategoriesQuery } from "@/src/redux/features/admin/blog/blog_category";
import { useCreateBlogMutation } from "@/src/redux/features/admin/blog/blog";
import CategorModal from "../_components/categor-modal";
import { getToken } from "@/app/(auth)/auth/_components/set-and-get-token";

type FormData = {
  title: string;
  categoryIds: string;
  hashtags: string[];
  [key: `content_${number}`]: string;
  [key: `media_${number}`]: FileList;
};

export default function CreateBlog() {
  const { data } = useGetBlogCategoriesQuery();
  const [createBlog] = useCreateBlogMutation();

  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setToken(token as string);
    };
    fetchToken();
  }, []);

  const { register, handleSubmit, setValue, reset, watch } =
    useForm<FormData>();
  const [contentBlocks, setContentBlocks] = useState<any[]>([
    { type: "text", content: "" },
    { type: "media", content: null },
  ]);
  const categoryValue = watch("categoryIds");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Set default category when data is loaded
  React.useEffect(() => {
    if (data && data.length > 0 && !categoryValue) {
      setValue("categoryIds", data[0].id);
    }
  }, [data, categoryValue, setValue]);

  // Add new text block
  const addTextBlock = () => {
    setContentBlocks((prev) => [...prev, { type: "text", content: "" }]);
  };

  // Add new media block
  const addMediaBlock = () => {
    setContentBlocks((prev) => [...prev, { type: "media", content: null }]);
  };

  // Handle text editor input
  const handleEditorChange = (value: string, index: number) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].content = value;
    setContentBlocks(updatedBlocks);
  };

  // Handle file input for image/video preview
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedBlocks = [...contentBlocks];
        updatedBlocks[index].content = file;
        updatedBlocks[index].preview = reader.result;
        setContentBlocks(updatedBlocks);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle category selection
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue("categoryIds", e.target.value);
  };

  // Handle hashtag input
  const handleHashtagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.length > 1) {
      e.preventDefault();
      const updated = [...hashtags, inputValue];
      setHashtags(updated);
      setInputValue("");
    }
  };

  // Handle removing hashtag
  const removeHashtag = (index: number) => {
    const updatedHashtags = hashtags.filter((_, i) => i !== index);
    setHashtags(updatedHashtags);
  };

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    const contents: any[] = [];

    // Loop through contentBlocks to build contents array and append files
    contentBlocks.forEach((block, idx) => {
      if (block.type === "text") {
        contents.push({
          contentType: "text",
          content: block.content,
        });
      } else if (block.type === "media") {
        // If block.content is a File, append it to formData
        if (block.content instanceof File) {
          formData.append("img", block.content);
          contents.push({
            contentType: "media",
            content: block.content.name, // Reference the file name
          });
        } else if (typeof block.content === "string") {
          // If it's a base64 string or URL, just add it directly
          contents.push({
            contentType: "media",
            content: block.content,
          });
        }
      }
    });

    formData.append("title", data.title);
    formData.append("categoryIds", JSON.stringify([data.categoryIds]));
    formData.append("hashtags", JSON.stringify(hashtags));
    formData.append("contents", JSON.stringify(contents));

    const blgoData = {
      formData,
      token,
    };

    const res = await createBlog(blgoData);
    if(res?.data?.blog_id){
      toast.success("Blog created successfully");
    }
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-12 gap-3 md:gap-5 p-2 md:p-4"
    >
      {/* Left Column - Main Content */}
      <div className="col-span-12 lg:col-span-8 space-y-4 md:space-y-6">
        {/* Title Input */}
        <div className="bg-white p-3 md:p-4 rounded-lg shadow">
          <h1 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
            Post Title
          </h1>
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            placeholder="Enter your post title"
            className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Dynamic Content Blocks */}
        {contentBlocks.map((block, index) => (
          <div
            key={index}
            className="bg-white p-3 md:p-4 rounded-lg shadow-md space-y-4"
          >
            {block.type === "text" ? (
              <div>
                <h2 className="text-gray-600 font-semibold">
                  Text Content - {index + 1}
                </h2>
                <Editor
                  apiKey="v165paum3r2kwvwl9yfg9md27pv69hd11c2bjcu6yjaxgye9"
                  value={block.content}
                  onEditorChange={(value) => handleEditorChange(value, index)}
                  init={{
                    plugins: ["emoticons", "image", "link", "lists"],
                    toolbar:
                      "undo redo | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                    height: 300,
                    menubar: false,
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>
            ) : (
              <MediaBlock
                index={index}
                preview={block.preview}
                onFileChange={(e: any) => handleFileChange(e, index)}
                onDelete={() => {
                  const updatedBlocks = [...contentBlocks];
                  updatedBlocks[index].content = null;
                  updatedBlocks[index].preview = null;
                  setContentBlocks(updatedBlocks);
                }}
              />
            )}
          </div>
        ))}

        {/* Add Content Buttons */}
        <div className="bg-white p-3 md:p-4 rounded-lg shadow space-y-3 md:space-y-4">
          <h1 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
            Add Content
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-5">
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={addTextBlock}
            >
              <p className="w-full sm:w-auto px-4 md:px-5 py-2 md:py-3 rounded-lg bg-gray-50 border-2 border-dashed border-gray-300 text-sm md:text-base">
                Text Content +
              </p>
            </div>
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={addMediaBlock}
            >
              <p className="w-full sm:w-auto px-4 md:px-5 py-2 md:py-3 rounded-lg bg-gray-50 border-2 border-dashed border-gray-300 text-sm md:text-base">
                Image/Video +
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Sidebar */}
      <div className="col-span-12 lg:col-span-4">
        <div className="bg-white p-3 md:p-4 rounded-lg shadow space-y-4 md:space-y-6">
          <div className="mb-3 md:mb-4 flex items-center justify-between">
            <p className="font-semibold text-gray-600">Select Category</p>
            <CategorModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          {/* Category Selector */}
          <div>
            <select
              {...register("categoryIds", { required: "Category is required" })}
              value={categoryValue || ""}
              onChange={handleCategoryChange}
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
            >
              {data?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Hashtags */}
          <div className="border-t border-gray-200 pt-4 md:pt-5">
            <h1 className="font-semibold mb-3 md:mb-4">Hashtags</h1>
            <input
              type="text"
              placeholder="Type # to add hashtag"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleHashtagKeyDown}
              className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg mb-3 md:mb-4 text-sm md:text-base"
            />
            <div className="flex flex-wrap gap-2">
              {hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-2 md:px-3 py-1 rounded-full flex items-center gap-2 text-sm"
                >
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => removeHashtag(index)}
                    className="text-gray-400 hover:text-black  cursor-pointer"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 border-t border-gray-200 pt-4 md:pt-5">
            <Button
              type="button"
              className="w-full sm:w-auto bg-gray-100 px-6 md:px-10 py-4 md:py-6 text-sm md:text-base cursor-pointer"
            >
              Save Draft
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-black text-white px-6 md:px-10 py-4 md:py-6 text-sm md:text-base cursor-pointer"
            >
              Post Publish
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

function MediaBlock({ index, preview, onFileChange, onDelete }:any) {
  const fileInputRef = useRef(null);

  return (
    <div className=" relative">
      <div className="flex justify-between items-center mb-3 md:mb-4">
        <h1 className="text-gray-500 font-semibold">Image - {index + 1}</h1>
        <button
          type="button"
          onClick={onDelete}
          className="text-red-500 hover:bg-red-100 rounded-full p-1"
        >
          <Trash2 size={18} />
        </button>
      </div>
      <div
        className="w-full border-2 border-dashed border-gray-300 rounded-lg overflow-hidden relative flex items-center justify-center h-[180px] md:h-[220px] bg-gray-50"
        style={
          preview
            ? {
                backgroundImage: `url(${preview})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        <input
          type="file"
          id={`media_${index}`}
          accept="image/*,video/*"
          className="hidden"
          ref={fileInputRef}
          onChange={onFileChange}
        />
        <label
          htmlFor={`media_${index}`}
          className="flex flex-col items-center justify-center cursor-pointer z-10"
        >
          <p className="px-3 md:px-5 py-2 md:py-3 rounded-lg text-sm md:text-base bg-white border border-gray-200 shadow hover:bg-gray-100 transition">
            Upload Image <span className="ml-1">+</span>
          </p>
        </label>
      </div>
    </div>
  );
}

// export async function createBlog({
//   formData,
//   token,
// }: {
//   formData: FormDataType;
//   token: string;
// }) {
//   // ...
// }
