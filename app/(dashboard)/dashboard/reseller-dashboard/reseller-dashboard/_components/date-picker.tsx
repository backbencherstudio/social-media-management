"use client";

import { Calendar } from "lucide-react";
import React, { useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 10, 7));
  const [calendarOpen, setCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Format date as "7 Nov 2024"
  const formatDate = (date: Date) =>
    `${date.getDate()} ${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;

  return (
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
                onChange={(date: Date | null) => {
                  if (date) {
                    setSelectedDate(date);
                    setCalendarOpen(false);
                  }
                }}
                inline
              />
        </div>
      )}
    </div>
  );
}
