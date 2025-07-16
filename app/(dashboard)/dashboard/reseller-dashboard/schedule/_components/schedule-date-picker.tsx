// components/DateRangePicker.tsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";
import { format } from "date-fns";

interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  setDateRange: (dates: [Date | null, Date | null]) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  setDateRange,
}) => {
  return (
    <div className="relative">
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => setDateRange(update)}
        customInput={
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white border-[#E5E5EC]">
            <Calendar className="h-4 w-4" />
            {startDate && endDate
              ? `${format(startDate, "d MMM")} - ${format(
                  endDate,
                  "d MMM yyyy"
                )}`
              : "Select date range"}
          </button>
        }
        className="z-10"
      />
    </div>
  );
};

export default DateRangePicker;
