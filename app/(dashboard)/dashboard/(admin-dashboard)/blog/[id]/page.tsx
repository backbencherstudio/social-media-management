"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useGetBlogCategoriesQuery } from "@/src/redux/features/admin/blog/blog_category";
import { useCreateBlogMutation } from "@/src/redux/features/admin/blog/blog";
import CategorModal from "../_components/categor-modal";
import { Editor } from "@tinymce/tinymce-react";

type FormData = {
  title: string;
  // categoryIds: string[];
  hashtags: string[];
  [key: `content_${number}`]: string;
  [key: `media_${number}`]: FileList;
};

export default function EditBlog() {
  const { data } = useGetBlogCategoriesQuery();
  const [createBlog, { isError, isLoading }] = useCreateBlogMutation();

  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const [textBlocks, setTextBlocks] = useState<number[]>([Date.now()]);
  const [mediaBlocks, setMediaBlocks] = useState<number[]>([Date.now()]);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null); // State for image preview
  const editorRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  // Add new text block
  const addTextBlock = () => {
    const id = Date.now() + Math.floor(Math.random() * 100);
    setTextBlocks((prev) => [...prev, id]);
  };

  // Add new media block
  const addMediaBlock = () => {
    const id = Date.now() + Math.floor(Math.random() * 100);
    setMediaBlocks((prev) => [...prev, id]);
  };

  // Handle hashtag input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      inputValue.startsWith("#") &&
      inputValue.length > 1
    ) {
      e.preventDefault();
      const updated = [...hashtags, inputValue];
      setHashtags(updated);
      setInputValue("");
      setValue("hashtags", updated);
    }
  };

  // Remove hashtag
  const removeHashtag = (index: number) => {
    const updated = hashtags.filter((_, i) => i !== index);
    setHashtags(updated);
    setValue("hashtags", updated);
  };

  // Handle file input for image/video preview
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMediaPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setValue(`media_${id}`, e.target.files);
    }
  };

  // Form submit handler
  const onSubmit = async (data: FormData) => {
    const mediaFiles = Object.entries(data)
      .filter(([key]) => key.startsWith("media_"))
      .map(([key, value]) => ({
        id: key,
        content: (value as FileList)[0]?.name || "image.jpg",
      }));

    const editorContent = editorRef.current?.getContent();

    const formData = {
      title: data.title,
      // categoryIds: [data.categoryIds],
      hashtags: data.hashtags,
      contents: [
        { contentType: "text", content: editorContent },
        {
          contentType: "media",
          content: mediaFiles[0]?.content || "image.jpg",
        },
      ],
    };
    console.log(formData);

    // const result = await createBlog(formData);
    // console.log(result);
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

        {/* Dynamic Text Editors */}
        {textBlocks.map((id, index) => (
          <div
            key={`text-${id}`}
            className="bg-white p-3 md:p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]"
          >
            <h1 className="text-gray-500 font-semibold mb-3 md:mb-4">
              Text Content - {index + 1}
            </h1>
            <div className="w-full">
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
          </div>
        ))}

        {/* Dynamic Media Uploads */}
        {mediaBlocks.map((id, index) => (
          <div
            key={`media-${id}`}
            className="bg-white p-3 md:p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]"
          >
            <h1 className="text-gray-500 font-semibold mb-3 md:mb-4">
              Image - {index + 1}
            </h1>
            <div
              className={`w-full border-2 border-dashed border-gray-300 rounded-lg overflow-hidden relative ${
                mediaPreview ? "h-[200px] md:h-[300px]" : "p-4 md:p-8"
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
                id={`media_${id}`}
                accept="image/*,video/*"
                className="hidden"
                onChange={(e) => handleFileChange(e, id)}
              />
              <label
                htmlFor={`media_${id}`}
                className={`flex flex-col items-center justify-center cursor-pointer ${
                  mediaPreview
                    ? "absolute inset-0 bg-black/30 hover:bg-black/40 transition-all duration-300"
                    : ""
                }`}
              >
                <p
                  className={`px-3 md:px-5 py-2 md:py-3 rounded-lg text-sm md:text-base ${
                    mediaPreview
                      ? "text-white border-2 border-white hover:bg-white/10 transition-all duration-300"
                      : "bg-gray-50 border-2 border-dashed border-gray-300"
                  }`}
                >
                  {mediaPreview ? "Change Image +" : "Upload Image/Video"}
                </p>
              </label>
            </div>
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
          {/* <div>
            <select
              {...register("categoryIds", { required: "Category is required" })}
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
            >
              {data?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div> */}

          {/* Hashtags */}
          <div className="border-t border-gray-200 pt-4 md:pt-5">
            <h1 className="font-semibold mb-3 md:mb-4">Hashtags</h1>
            <input
              type="text"
              placeholder="Type # to add hashtag"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
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
                    className="text-gray-400 hover:text-black"
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
              className="w-full sm:w-auto bg-gray-100 px-6 md:px-10 py-4 md:py-6 text-sm md:text-base"
            >
              Save Draft
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-black text-white px-6 md:px-10 py-4 md:py-6 text-sm md:text-base"
            >
              Post Publish
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
