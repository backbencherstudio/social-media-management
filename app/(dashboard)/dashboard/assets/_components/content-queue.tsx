"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Calendar, ChevronDown } from "lucide-react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ContentQueueHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 10, 7));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const typeDropdownRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Format date as "7 Nov 2024"
  const formatDate = (date: Date) =>
    `${date.getDate()} ${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setCalendarOpen(false);
      }
      if (
        typeDropdownRef.current &&
        !typeDropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex w-full flex-col bg-gray-50 py-6 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="mb-3 text-xl font-semibold text-gray-900 sm:mb-0">
        Content Queue
      </h1>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        {/* Search Input */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search assets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 focus:border-gray-400 focus:outline-none sm:w-64"
          />
        </div>

        {/* Type Dropdown */}
        <div className="relative" ref={typeDropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:outline-none sm:w-36"
          >
            <span>{selectedType}</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
              {["All Types", "Images", "Videos", "Documents"].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    setDropdownOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Single Date Picker */}
        <div className="relative" ref={calendarRef}>
          <button
            onClick={() => setCalendarOpen(!calendarOpen)}
            className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:outline-none"
          >
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-gray-500" />
              <span>{formatDate(selectedDate)}</span>
            </div>
          </button>

          {calendarOpen && (
            <div className="absolute right-0 z-10 mt-1 rounded-md border border-gray-200 bg-white p-3 shadow-lg">
              <ReactDatePicker
                selected={selectedDate}
                onChange={(date: Date) => {
                  setSelectedDate(date);
                  setCalendarOpen(false);
                }}
                inline
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
