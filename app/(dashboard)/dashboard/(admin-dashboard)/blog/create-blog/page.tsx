"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Quill from "quill";
import "quill/dist/quill.snow.css";

type FormData = {
  hashtags: string[];
  [key: `content_${number}`]: string;
  [key: `media_${number}`]: FileList;
};

export default function CreateBlog() {
  const { register, handleSubmit, setValue, getValues } = useForm<FormData>();
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const [textBlocks, setTextBlocks] = useState<number[]>([]);
  const [mediaBlocks, setMediaBlocks] = useState<number[]>([]);
  const editorRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [editors, setEditors] = useState<Record<number, Quill>>({});

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

  // Initialize Quill editors
  useEffect(() => {
    textBlocks.forEach((id) => {
      const container = editorRefs.current[id];
      if (container && !container.querySelector(".ql-editor")) {
        const quill = new Quill(container, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link"],
              ["clean"],
            ],
          },
        });

        // Capture text change and update form state
        quill.on("text-change", () => {
          const content = quill.root.innerHTML;
          setValue(`content_${id}`, content as any);
        });

        setEditors((prev) => ({ ...prev, [id]: quill }));
      }
    });
  }, [textBlocks, setValue]);

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

  // Form submit handler
  const onSubmit = (data: FormData) => {
    const contents = Object.entries(data)
      .filter(([key]) => key.startsWith("content_"))
      .map(([key, value]) => ({ id: key, content: value }));

    const mediaFiles = Object.entries(data)
      .filter(([key]) => key.startsWith("media_"))
      .map(([key, value]) => ({
        id: key,
        file: (value as FileList)[0],
      }));

    // Log dynamic form data
    console.log("📦 Full Form Data:", data);

    // Here you can send the data to your API or save it as needed
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-12 gap-5">
      {/* Left Column - Main Content */}
      <div className="col-span-8 space-y-6">
        {/* Title Input */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h1 className="text-xl font-semibold mb-4">Post Title</h1>
          <input
            type="text"
            placeholder="Enter your post title"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Dynamic Text Editors */}
        {textBlocks.map((id, index) => (
          <div
            key={`text-${id}`}
            className="bg-white p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]"
          >
            <h1 className="text-gray-500 font-semibold mb-4">
              Text Content - {index + 1}
            </h1>
            <div className="w-full">
              <div
                ref={(el) => (editorRefs.current[id] = el)}
                className="rounded-lg border border-gray-200"
                style={{ height: 200 }}
              />
            </div>
          </div>
        ))}

        {/* Dynamic Media Uploads */}
        {mediaBlocks.map((id, index) => (
          <div
            key={`media-${id}`}
            className="bg-white p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]"
          >
            <h1 className="text-gray-500 font-semibold mb-4">
              Image - {index + 1}
            </h1>
            <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                id={`media_${id}`}
                {...register(`media_${id}`)}
                accept="image/*,video/*"
                className="hidden"
              />
              <label
                htmlFor={`media_${id}`}
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <p className="px-5 py-3 rounded-lg bg-gray-50 border-2 border-dashed border-gray-300">
                  Upload Image/Video
                </p>
              </label>
            </div>
          </div>
        ))}

        {/* Add Content Buttons */}
        <div className="bg-white p-4 rounded-lg shadow space-y-4">
          <h1 className="text-xl font-semibold mb-4">Add Content</h1>
          <div className="flex justify-center gap-5">
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={addTextBlock}
            >
              <p className="px-5 py-3 rounded-lg bg-gray-50 border-2 border-dashed border-gray-300">
                Text Content +
              </p>
            </div>
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={addMediaBlock}
            >
              <p className="px-5 py-3 rounded-lg bg-gray-50 border-2 border-dashed border-gray-300">
                Image/Video +
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Sidebar */}
      <div className="col-span-4">
        <div className="bg-white p-4 rounded-lg shadow space-y-6">
          {/* Category Selector */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-semibold">Select Category</h1>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
              >
                + Add New
              </button>
              {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-6 w-[460px]">
                    <div className="flex justify-between items-center mb-10">
                      <h2 className="text-xl font-semibold">Add New Category</h2>
                      <button
                        onClick={() => {
                          setIsModalOpen(false);
                          setNewCategory("");
                        }}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                      >
                        X
                      </button>
                    </div>
                    <label className="text-gray-500">Create New</label>
                    <div className="flex gap-3 mt-2">
                      <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="Enter category name"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                      <button
                        onClick={() => {
                          console.log("New category:", newCategory);
                          setIsModalOpen(false);
                          setNewCategory("");
                        }}
                        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
              <option value="">Select a category</option>
              <option value="social-media-marketing">Social Media Marketing</option>
              <option value="content-marketing">Content Marketing</option>
              <option value="influencer-marketing">Influencer Marketing</option>
              <option value="digital-advertising">Digital Advertising</option>
              <option value="social-analytics">Social Analytics</option>
            </select>
          </div>

          {/* Hashtags */}
          <div className="border-t border-gray-200 pt-5">
            <h1 className="font-semibold mb-4">Hashtags</h1>
            <input
              type="text"
              placeholder="Type # to add hashtag"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2"
                >
                  <span className="text-sm">{tag}</span>
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
          <div className="flex gap-6 border-t border-gray-200 pt-5">
            <Button type="button" className="bg-gray-100 px-10 py-6">
              Save Draft
            </Button>
            <Button type="submit" className="bg-black text-white px-10 py-6">
              Post Publish
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
