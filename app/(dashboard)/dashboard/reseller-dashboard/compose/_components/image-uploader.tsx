"use client";

import React, { useRef, useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

interface ImageUploaderProps {
  index: number;
  file: File | null;
  onFileChange: (index: number, file: File | null) => void;
  onDelete: (index: number) => void;
}

export default function ImageUploader({
  index,
  file,
  onFileChange,
  onDelete,
}: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(index, e.target.files[0]);
    }
  };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-3 md:mb-4">
        <h1 className="text-gray-500 font-semibold">Image - {index + 1}</h1>
        <button
          type="button"
          onClick={handleDelete}
          className="text-red-500 hover:bg-red-100 rounded-full p-1"
        >
          <Trash2 size={18} />
        </button>
      </div>

      <div className="w-full border-2 border-dashed border-gray-300 rounded-lg overflow-hidden relative flex items-center justify-center h-[180px] md:h-[220px] bg-gray-50">
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
        )}

        <input
          type="file"
          id={`media_${index}`}
          accept="image/*,video/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        <label
          htmlFor={`media_${index}`}
          className="flex flex-col items-center justify-center cursor-pointer z-10"
        >
          <p className="px-3 md:px-5 py-2 md:py-3 rounded-lg text-sm md:text-base bg-white border border-gray-200 shadow hover:bg-gray-100 transition">
            {preview ? "Change Image" : "Upload Image"}{" "}
            <span className="ml-1">+</span>
          </p>
        </label>
      </div>
    </div>
  );
}
