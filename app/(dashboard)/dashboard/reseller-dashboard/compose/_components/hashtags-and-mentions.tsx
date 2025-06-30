import React, { useState } from "react";

export default function HashtagsAndMentions() {
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.startsWith('#') && inputValue.length > 1) {
      e.preventDefault();
      setHashtags([...hashtags, inputValue]);
      setInputValue("");
    }
  };

  const removeHashtag = (index: number) => {
    setHashtags(hashtags.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <h1 className="text-xl font-semibold mb-4">Hashtags & Mentions</h1>
      <div className="w-full space-y-4">
        <div>
          <input
            type="text"
            placeholder="Type # to add hashtag"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
        
        {/* Hashtags display */}
        <div className="flex flex-wrap gap-2">
          {hashtags.map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2 group"
            >
              <span className="text-sm">{tag}</span>
              <button
                onClick={() => removeHashtag(index)}
                className="text-gray-400 hover:text-black transition-colors"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
