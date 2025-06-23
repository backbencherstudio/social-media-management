"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import FilesIcon from "@/public/incons/files";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "sonner";
import { useCreateSchedulePostMutation } from "@/src/redux/features/reseller/compose/compose";
import { useGetAllTasksQuery } from "@/src/redux/features/admin/task-management/task-management";
import { GalleryHorizontal } from "lucide-react";
import ScheduleGalleryIcon from "@/public/incons/schedule-gallery";

type FormValues = {
  platforms: string[];
  hashtags: string[];
  scheduleDate: string;
  timeZone: string;
  media: FileList;
  taskId: string;
};

export default function CreateSchedulePost() {
  const { register, handleSubmit, setValue, watch } = useForm<FormValues>({
    defaultValues: {
      platforms: [],
      hashtags: [],
      timeZone: "UTC+06:00",
    },
  });

  const watchedValues = watch();
  const editorRef = useRef<any>(null);
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [createSchedulePost, { isLoading }] = useCreateSchedulePostMutation();
  const { data: tasks } = useGetAllTasksQuery();

  // Handle hashtag input
  const handleHashtagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.length > 1) {
      e.preventDefault();
      const updated = [...hashtags, inputValue];
      setHashtags(updated);
      setInputValue("");
    }
  };

  const removeHashtag = (index: number) => {
    const updated = hashtags.filter((_, i) => i !== index);
    setHashtags(updated);
    setValue("hashtags", updated);
  };

  // Submit handler
  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();

    // Append content from TinyMCE
    const editorContent = editorRef.current?.getContent();

    const jsonData = {
      post_channels: [{ channel_id: "cmb1v8v5x0019reh4vqt7mxgp" }],
      hashtags: hashtags,
      scheduleDate: data.scheduleDate + data.timeZone,
      content: editorContent || "",
      task_id: data.taskId,
    };

    formData.append("data", JSON.stringify(jsonData));

    // Append files
    if (data.media && data.media.length > 0) {
      Array.from(data.media).forEach((file) => {
        formData.append("files", file);
      });
    }

    if (formData.get("data") && formData.getAll("files")) {
      await createSchedulePost(formData);
      toast.success("Post scheduled successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        <div className="col-span-1 lg:col-span-8 space-y-5">
          {/* Platforms */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-xl font-semibold mb-4">Select Platforms</h1>
            <div className="flex flex-wrap gap-4">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map(
                (platform) => (
                  <label
                    key={platform}
                    className="flex items-center gap-2 cursor-pointer border px-6 py-2 rounded-lg"
                  >
                    <input
                      type="checkbox"
                      value={platform}
                      {...register("platforms")}
                      className="w-5 h-5 rounded border-gray-300"
                    />
                    <p className="text-gray-700">{platform}</p>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Content */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Content</h2>
            <Editor
              apiKey="v165paum3r2kwvwl9yfg9md27pv69hd11c2bjcu6yjaxgye9"
              onInit={(_evt, editor) => (editorRef.current = editor)}
              init={{
                plugins: ["emoticons", "image", "link", "lists"],
                toolbar:
                  "undo redo | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                height: 300,
                menubar: false,
              }}
            />
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
                multiple
              />
              <label
                htmlFor="media-upload"
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FilesIcon />
                </div>
                <p className="text-base text-gray-600 mb-1">
                  Drag and drop files here or click to upload
                </p>
                <p className="text-sm text-gray-500">Supports: JPG, PNG, MP4</p>
              </label>
            </div>
          </div>

          {/* All Task */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="font-semibold mb-3 md:mb-4">All Task</h1>
            {tasks?.data?.tasks && (
              <select
                {...register("taskId")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="TASK_pcqeaufvvkh8viuiff07rmek">
                  facebook post default
                </option>
                {tasks.data.tasks.map((task: any) => (
                  <option key={task.task_id} value={task.task_id}>
                    {task.post_type}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Hashtags */}
          <div className="bg-white p-4 rounded-lg shadow">
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
          </div>

          {/* Schedule */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="text-xl font-semibold mb-4">Schedule</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="col-span-1 md:col-span-8">
                <input
                  type="date"
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
          <div className="sticky top-6 rounded-md border border-gray-200 bg-white p-3 space-y-6">
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
                  <p className="text-xs text-gray-500">
                    {watchedValues.platforms?.join(", ") ||
                      "No platform selected"}
                  </p>
                </div>
              </div>

              {watchedValues.media && watchedValues.media.length > 0 ? (
                <div className="flex h-40 items-center justify-center rounded-md bg-gray-100">
                  <Image
                    src={URL.createObjectURL(watchedValues.media[0])}
                    alt="Preview"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
              ) : (
                <div className="flex h-40 items-center justify-center rounded-md bg-gray-100">
                  <ScheduleGalleryIcon className="w-8 h-8" />
                </div>
              )}

              <div
                className="mt-4 prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: editorRef.current?.getContent(),
                }}
              ></div>

              <p className="mt-2">
                {hashtags.map((tag) => `#${tag}`).join(" ")}
              </p>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-3 rounded-lg disabled:bg-gray-400 cursor-pointer"
            >
              {isLoading ? "Scheduling..." : "Schedule Post"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
