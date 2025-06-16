import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const maxNumbers = 3;
    let start = Math.max(1, currentPage - Math.floor(maxNumbers / 2));
    let end = start + maxNumbers - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxNumbers + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return { pages, start, end };
  };

  const { pages, start, end } = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2 mt-8 min-w-[300px]">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 rounded-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {start > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`w-8 h-8 rounded-md font-medium text-sm transition-colors ${
              currentPage === 1
                ? "bg-gray-200 text-black"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            1
          </button>
          <span className="w-8 h-8 text-center text-gray-400 text-sm leading-8">
            ...
          </span>
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 rounded-md font-medium text-sm transition-colors ${
            currentPage === page
              ? "bg-gray-200 text-black"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      {end < totalPages && (
        <>
          <span className="w-8 h-8 text-center text-gray-400 text-sm leading-8">
            ...
          </span>
          <button
            onClick={() => onPageChange(totalPages)}
            className={`w-8 h-8 rounded-md font-medium text-sm transition-colors ${
              currentPage === totalPages
                ? "bg-gray-200 text-black"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 rounded-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
