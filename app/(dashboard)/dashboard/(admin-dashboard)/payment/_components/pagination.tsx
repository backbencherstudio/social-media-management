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
  // Always show 4 numbers, stable, centered if possible, with dots and first/last page if needed
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
    <div className="flex items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="md:p-2  rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-8  h-8  border border-gray-200 rounded-md" />
      </button>

      {/* Show first page and dot if needed */}
      {start > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`w-8 h-8 rounded-lg font-medium transition-colors ${
              currentPage === 1
                ? "bg-gray-100 text-black"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            1
          </button>
          {start > 2 && (
            <span className="w-8 h-8 flex items-center justify-center text-xl text-gray-400">
              ...
            </span>
          )}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 rounded-lg font-medium transition-colors
            ${
              currentPage === page
                ? "bg-gray-100 text-black"
                : "bg-white hover:bg-gray-50"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Show dot and last page if needed */}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className="w-8 h-8 flex items-center justify-center text-xl text-gray-400">
              ...
            </span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`w-8 h-8 rounded-lg font-medium transition-colors ${
              currentPage === totalPages
                ? "bg-gray-100 text-black"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-8 h-8 border border-gray-200 rounded-md" />
      </button>
    </div>
  );
};
