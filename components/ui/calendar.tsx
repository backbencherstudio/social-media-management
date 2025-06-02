"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar(props: any) {
  const { className, classNames, showOutsideDays = true, ...rest } = props;
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDayClick = (date: Date) => {
    setSelectedDate(date); // Update the selected date
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg ">
      <DayPicker
        {...rest}
        selected={selectedDate}
        onDayClick={handleDayClick}
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        classNames={{
          months: "flex flex-col sm:flex-row gap-2",
          month: "flex flex-col gap-4 w-full",
          caption: "flex justify-center pt-1 relative items-center w-full",
          caption_label: "text-lg font-semibold text-black",
          nav: "flex items-center gap-1",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-x-1 mt-5",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-full font-normal text-[0.8rem]",
          row: "flex w-full mt-4",
          cell: cn(
            "relative p-0 w-full text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
            props.mode === "range"
              ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
              : "[&:has([aria-selected])]:rounded-md"
          ),
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "size-8 p-0 font-normal aria-selected:opacity-100"
          ),
          day_range_start:
            "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
          day_range_end:
            "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
          day_selected:
            "bg-[#004D49] text-white rounded-full", // Custom background and rounded styling for selected days
          day_today: "bg-blue-500 text-white rounded-full", // Highlight current day with blue
          day_outside: "day-outside text-[#A5B4CB]",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <ChevronLeft className={cn("size-4", className)} {...props} />
          ),
          IconRight: ({ className, ...props }) => (
            <ChevronRight className={cn("size-4", className)} {...props} />
          ),
        }}
        {...props}
      />
      {/* Add "Cancel" and "Save" buttons as seen in the design */}
      <div className="mt-4 flex justify-between">
        <button
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-200"
          onClick={() => setSelectedDate(undefined)}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          onClick={() => alert(`Date selected: ${selectedDate}`)}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export { Calendar };
