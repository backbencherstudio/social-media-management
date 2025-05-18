import Image from "next/image";
import React from "react";

export default function Preview() {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-3 space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Preview</h1>
      <div className="rounded-md border border-gray-200 bg-white p-3">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200">
            <Image
              src={
                "https://img.freepik.com/premium-photo/medium-shot-woman-posing-commercial_23-2150559882.jpg"
              }
              alt="User Logo"
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
        {/* <p className="mb-3 text-sm text-gray-800">{data.content}</p>
        <p className="text-xs text-gray-500 my-2 flex flex-wrap gap-1">
          {data.hashtags.map((tag) => (
            <span>{tag}</span>
          ))}
        </p> */}
        <div className="flex h-40 items-center justify-center rounded-md bg-gray-100">
          <Image
            src={
              "https://img.freepik.com/free-photo/close-up-woman-front-clothing-pile_23-2150951085.jpg"
            }
            alt="User Logo"
            width={300}
            height={200}
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <p className="mt-4">Your post content will appear here...</p>
        <p>#socialmedia #marketing #digital</p>
      </div>
      <button className="w-full bg-black text-white py-3 rounded-lg">Schedule Post</button>
    </div>
  );
}
