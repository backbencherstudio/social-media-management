import Image from "next/image";
import React from "react";

export default function PostData({ post }) {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-3 space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Preview</h1>
      <div className="rounded-md border border-gray-200 bg-white p-3">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
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
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-gray-600"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                <path d="m15 5 4 4"/>
              </svg>
            </button>
          </div>
        </div>
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
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-2">Post Create</h2>
          <p>{post.postCreate}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Stutus</h2>
          <p>{post.status}</p>
        </div>
      </div>
    </div>
  );
}
