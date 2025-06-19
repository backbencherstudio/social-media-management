"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useGetBlogCategoriesQuery } from "@/src/redux/features/admin/blog/blog_category";
import CategorModal from "../_components/categor-modal";
import { Editor } from "@tinymce/tinymce-react";
import {
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
} from "@/src/redux/features/admin/blog/blog";
import { useParams } from "next/navigation";

import image from "@/public/img/pricing/resellerLeft.png";

type FormData = {
  title: string;
  categoryIds: string;
  hashtags: string[];
  [key: `content_${number}`]: string;
  [key: `media_${number}`]: FileList;
};

export default function EditBlog() {
  const { data: categoryData } = useGetBlogCategoriesQuery();
  const { id } = useParams();
  const { data: blogData, isLoading } = useGetBlogByIdQuery(id as string);
  console.log(blogData, "blogData");
  const [updateBlog] = useUpdateBlogMutation();

  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [textBlocks, setTextBlocks] = useState([Date.now()]);
  const [mediaBlocks, setMediaBlocks] = useState([Date.now() + 1]);
  const [mediaPreviews, setMediaPreviews] = useState<string[]>([]);
  const [imageDefaults, setimageDefaults] = useState<string>("");

  const imageURL = "http://192.168.4.2:9000/social-media/";

  const editorRefs = useRef<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load initial data into form fields
  useEffect(() => {
    if (blogData) {
      setValue("title", blogData.title);
      setHashtags(blogData.hashtags || []);
      blogData.blog_contents.forEach((content, index) => {
        if (content.contentType === "text") {
          setTextBlocks((prev) => [...prev, Date.now() + index]);
          setValue(`content_${Date.now() + index}`, content.content);
        }
        if (content.contentType === "media") {
          setMediaBlocks((prev) => [...prev, Date.now() + index + 1]);
          setMediaPreviews((prev) => [...prev, content.content]); // Set media content (image URL) from blog data
        }
      });
    }
  }, [blogData, setValue]);

  useEffect(() => {
    if (blogData) {
      blogData.blog_contents.map((content) => {
        if (content.content_type === "media") {
          setimageDefaults(content.content);
        }
      });
    }
  }, [blogData]);

  console.log(imageDefaults, "imageDefaults");

  // Set the category
  useEffect(() => {
    if (categoryData && categoryData.length > 0) {
      // If editing and blogData exists, use its category
      if (blogData && blogData.categoryIds) {
        setValue("categoryIds", blogData.categoryIds);
      } else {
        // Otherwise, use the first category as default
        setValue("categoryIds", categoryData[0].id);
      }
    }
  }, [categoryData, blogData, setValue]);

  // Add new text block
  const addTextBlock = () => {
    setTextBlocks((prev) => [...prev, Date.now()]);
  };

  // Add new media block
  const addMediaBlock = () => {
    setMediaBlocks((prev) => [...prev, Date.now()]);
    setMediaPreviews((prev) => [...prev, ""]); // Add a placeholder for new media preview
  };

  // Handle hashtag input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.length > 1) {
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
        const newPreviews = [...mediaPreviews];
        newPreviews[id] = reader.result as string;
        setMediaPreviews(newPreviews);
      };
      reader.readAsDataURL(file);
      setValue(`media_${id}`, e.target.files);
    }
  };

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    const mediaFiles: File[] = [];

    // Prepare media contents
    const mediaContents = Object.entries(data)
      .filter(([key]) => key.startsWith("media_"))
      .map(([key, value]: [string, any]) => {
        const file = value[0];
        if (file) {
          mediaFiles.push(file);
          return {
            contentType: "media",
            content: file.name,
          };
        }
        return null;
      })
      .filter(Boolean);

    // Prepare text contents
    const editorContent = editorRefs.current.map((editor) => ({
      contentType: "text",
      content: editor?.getContent() || "",
    }));

    // Combine both text and media contents
    const allContents = [...editorContent, ...mediaContents];

    formData.append("title", data.title);
    formData.append("categoryIds", JSON.stringify([data.categoryIds]));
    formData.append("hashtags", JSON.stringify(hashtags));
    formData.append("contents", JSON.stringify(allContents));

    mediaFiles.forEach((file) => {
      formData.append("img", file);
    });

    const result = await updateBlog({ data: formData, id: id as string });
    console.log(result);
  };

  if (isLoading) return <div>Loading...</div>;

  const textContent = blogData?.blog_contents?.filter(
    (content) => content.content_type === "text"
  );
  console.log(textContent.length > 0, "textContent");

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
        {blogData?.blog_contents
          ?.filter((content) => content.content_type === "text")
          .map((content, index) => (
            <div
              key={`text-${content.id}`}
              className="bg-white p-3 md:p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]"
            >
              <h1 className="text-gray-500 font-semibold mb-3 md:mb-4">
                Text Content - {index + 1}
              </h1>
              <div className="w-full">
                <Editor
                  apiKey="v165paum3r2kwvwl9yfg9md27pv69hd11c2bjcu6yjaxgye9"
                  onInit={(_evt, editor) =>
                    (editorRefs.current[index] = editor)
                  }
                  init={{
                    plugins: ["emoticons", "image", "link", "lists"],
                    toolbar:
                      "undo redo | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                    height: 400,
                    menubar: false,
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                  value={content.content}
                />
              </div>
            </div>
          ))}

        {/* Dynamic Media Uploads */}
        {blogData?.blog_contents
          ?.filter((content) => content.content_type === "media")
          .map((contentImage, index) => {
            return (
              <div
                key={`media-${contentImage.id}`}
                className="bg-white p-3 md:p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]"
              >
                <h1 className="text-gray-500 font-semibold mb-3 md:mb-4">
                  Image - {index + 1}
                </h1>
                <div
                  className={`w-full border-2 border-dashed border-gray-300 rounded-lg overflow-hidden relative h-[200px] md:h-[300px] flex items-center justify-center`}
                >
                  {/* Show preview if exists, otherwise show default image from DB */}
                  <img
                    src={mediaPreviews[index] || `${contentImage.content}`}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover absolute inset-0 z-10"
                    style={{ background: "white" }}
                  />
                  <input
                    type="file"
                    id={`media_${id}`}
                    accept="image/*,video/*"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, index)}
                  />
                  <label
                    htmlFor={`media_${id}`}
                    className={`flex flex-col items-center justify-center cursor-pointer absolute inset-0 z-20 ${
                      mediaPreviews[index]
                        ? "bg-black/30 hover:bg-black/40 transition-all duration-300"
                        : ""
                    }`}
                  >
                    <p
                      className={`px-3 md:px-5 py-2 md:py-3 rounded-lg text-sm md:text-base ${
                        mediaPreviews[index]
                          ? "text-white border-2 border-white hover:bg-white/10 transition-all duration-300"
                          : "bg-gray-50 border-2 border-dashed border-gray-300"
                      }`}
                    >
                      {mediaPreviews[index]
                        ? "Change Image +"
                        : "Upload Image/Video"}
                    </p>
                  </label>
                </div>
              </div>
            );
          })}

        {blogData?.blog_contents?.filter(
          (content) => content.content_type === "media"
        ).length > 0 ||
          mediaBlocks.map((id, index) => (
            <div
              key={`media-${id}`}
              className="bg-white p-3 md:p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]"
            >
              <h1 className="text-gray-500 font-semibold mb-3 md:mb-4">
                Image - {index + 1}
              </h1>
              <div
                className={`w-full border-2 border-dashed border-gray-300 rounded-lg overflow-hidden relative ${
                  mediaPreviews[index] ? "h-[200px] md:h-[300px]" : "p-4 md:p-8"
                }`}
                style={
                  mediaPreviews[index]
                    ? {
                        backgroundImage: `url(${mediaPreviews[index]})`,
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
                  onChange={(e) => handleFileChange(e, index)}
                />
                <label
                  htmlFor={`media_${id}`}
                  className={`flex flex-col items-center justify-center cursor-pointer ${
                    mediaPreviews[index]
                      ? "absolute inset-0 bg-black/30 hover:bg-black/40 transition-all duration-300"
                      : ""
                  }`}
                >
                  <p
                    className={`px-3 md:px-5 py-2 md:py-3 rounded-lg text-sm md:text-base ${
                      mediaPreviews[index]
                        ? "text-white border-2 border-white hover:bg-white/10 transition-all duration-300"
                        : "bg-gray-50 border-2 border-dashed border-gray-300"
                    }`}
                  >
                    {mediaPreviews[index]
                      ? "Change Image +"
                      : "Upload Image/Video"}
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
          <div>
            <select
              {...register("categoryIds", { required: "Category is required" })}
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
            >
              {categoryData?.map((category) => (
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
                    className="text-gray-400 hover:text-black cursor-pointer"
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
