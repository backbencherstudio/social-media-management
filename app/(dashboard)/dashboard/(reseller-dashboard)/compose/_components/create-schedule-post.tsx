"use client";

import React, { useRef, useState, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import Image from "next/image";

type FormValues = {
  platforms: string[];
  content: string;
  hashtags: string[];
  scheduleDate: string;
  timeZone: string;
  media: FileList;
};

export default function CreateSchedulePost() {
  const { register, handleSubmit, setValue, getValues, watch } = useForm<FormValues>({
    defaultValues: {
      platforms: [],
      hashtags: [],
      timeZone: "UTC+06:00",
    },
  });

  const editorRef = useRef<HTMLDivElement>(null);
  const quillInstance = useRef<Quill | undefined>(undefined);

  const [hashtags, setHashtags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Initialize Quill
  useEffect(() => {
    if (editorRef.current && !editorRef.current.querySelector(".ql-editor")) {
      quillInstance.current = new Quill(editorRef.current, {
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

  // Add hashtag
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.startsWith("#") && inputValue.length > 1) {
      e.preventDefault();
      const updated = [...hashtags, inputValue];
      setHashtags(updated);
      setInputValue("");
      setValue("hashtags", updated);
    }
  };

  const removeHashtag = (index: number) => {
    const updated = hashtags.filter((_, i) => i !== index);
    setHashtags(updated);
    setValue("hashtags", updated);
  };

  const onSubmit = (data: FormValues) => {
    const content = quillInstance.current?.root.innerHTML || "";
    const fullData = {
      ...data,
      content,
    };

    console.log("Scheduled Post Data:", fullData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        <div className="col-span-1 lg:col-span-8 space-y-5">
          {/* Platforms */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-xl font-semibold mb-4">Select Platforms</h1>
            <div className="flex flex-wrap gap-4">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((platform) => (
                <label key={platform} className="flex items-center gap-2 cursor-pointer border px-6 py-2 rounded-lg">
                  <input
                    type="checkbox"
                    value={platform}
                    {...register("platforms")}
                    className="w-5 h-5 rounded border-gray-300"
                  />
                  <p className="text-gray-700">{platform}</p>
                </label>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="text-xl font-semibold mb-4">Content</h1>
            <div className="w-full rounded-b-lg" ref={editorRef} style={{ height: 200 }} />
          </div>

          {/* Media */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="text-xl font-semibold mb-4">Media</h1>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                id="media-upload"
                {...register("media")}
                className="hidden"
                accept="image/*,video/*"
              />
              <label
                htmlFor="media-upload"
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <p className="text-base text-gray-600 mb-1">
                  Drag and drop files here or click to upload
                </p>
                <p className="text-sm text-gray-500">Support JPG, PNG, MP4 (max 10MB)</p>
              </label>
            </div>
          </div>

          {/* Hashtags */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="text-xl font-semibold mb-4">Hashtags & Mentions</h1>
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
                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2">
                  <span className="text-sm">{tag}</span>
                  <button
                    onClick={() => removeHashtag(index)}
                    className="text-gray-400 hover:text-black"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="text-xl font-semibold mb-4">Schedule</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="col-span-1 md:col-span-8">
                {/* replace below with your real datepicker */}
                <input
                  type="datetime-local"
                  {...register("scheduleDate")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="col-span-1 md:col-span-4">
                <select
                  {...register("timeZone")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="UTC+06:00">(UTC+06:00) Dhaka, Almaty</option>
                  <option value="UTC+05:30">(UTC+05:30) Mumbai, Colombo</option>
                  <option value="UTC+00:00">(UTC+00:00) London</option>
                  <option value="UTC-05:00">(UTC-05:00) New York</option>
                  <option value="UTC+09:00">(UTC+09:00) Tokyo, Seoul</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Preview & Submit */}
        <div className="col-span-1 lg:col-span-4">
          <div className="rounded-md border border-gray-200 bg-white p-3 space-y-6">
            <h1 className="text-2xl font-semibold mb-4">Preview</h1>
            <div className="rounded-md border border-gray-200 bg-white p-3">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gray-200">
                  <Image
                    src="https://img.freepik.com/premium-photo/medium-shot-woman-posing-commercial_23-2150559882.jpg"
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">your_account</p>
                  <p className="text-xs text-gray-500">Instagram</p>
                </div>
              </div>
              <div className="flex h-40 items-center justify-center rounded-md bg-gray-100">
                <Image
                  src="https://img.freepik.com/free-photo/close-up-woman-front-clothing-pile_23-2150951085.jpg"
                  alt="Preview"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <p className="mt-4">Your post content will appear here...</p>
              <p>#socialmedia #marketing #digital</p>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg"
            >
              Schedule Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
