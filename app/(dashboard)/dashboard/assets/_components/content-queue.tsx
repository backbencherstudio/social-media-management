"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Calendar, ChevronDown } from "lucide-react";
// import DatePicker from "react-date-picker"
// import "react-date-picker/dist/DatePicker.css"
// import "react-calendar/dist/Calendar.css"

export default function ContentQueueHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 10, 7));
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const datePickerRef = useRef<HTMLDivElement>(null);
  const typeDropdownRef = useRef<HTMLDivElement>(null);

  // Format date as "D MMM YYYY"
  const formatDate = (date: Date) => {
    return `${date.getDate()} ${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setIsDatePickerOpen(false);
      }
      if (
        typeDropdownRef.current &&
        !typeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsTypeDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex w-full flex-col  bg-gray-50  py-6 sm:flex-row sm:items-center sm:justify-between">
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
            onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
            className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:outline-none sm:w-36"
          >
            <span>{selectedType}</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>

          {isTypeDropdownOpen && (
            <div className="absolute right-0 z-10 mt-1 w-full origin-top-right rounded-md border border-gray-200 bg-white shadow-lg">
              <div className="py-1">
                {["All Types", "Images", "Videos", "Documents"].map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setIsTypeDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Date Picker */}
        <div className="relative" ref={datePickerRef}>
          <button
            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:outline-none"
          >
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-gray-500" />
              <span>{formatDate(selectedDate)}</span>
            </div>
          </button>

          {isDatePickerOpen && (
            <div className="absolute right-0 z-10 mt-1 origin-top-right rounded-md border border-gray-200 bg-white p-3 shadow-lg">
              {/* <DatePicker
                onChange={(date: Date) => {
                  setSelectedDate(date)
                  setIsDatePickerOpen(false)
                }}
                value={selectedDate}
                calendarIcon={null}
                clearIcon={null}
                format="d MMM y"
              /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
