"use cient";
import Link from "next/link";
import { useState } from "react";
import { Pagination } from "../../_components/Pagination";
import CustomSelect from "../../../_components/custom-select";
import { Applicant } from "../fakeResellers";

interface ApplicantTableProps {
  applicants: Applicant[];
  periodApplicant: string;
  setPeriodApplicant: (value: string) => void;
  orderStatusApplicant: string; // Make sure this matches exactly
  setOrderStatusApplicant: (value: string) => void;
}

export default function ApplicantTable({
  applicants,
  periodApplicant,
  setPeriodApplicant,
  orderStatusApplicant,
  setOrderStatusApplicant,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const totalPages = Math.ceil(applicants.length / itemsPerPage);
  const paginationApplicants = applicants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      <div className="p-6 bg-white rounded-xl shadow-sm overflow-x-auto">
        <div>
          <div className="flex items-center justify-between p-5">
            <h2 className="text-xl font-semibold ">All Order</h2>

            <div className="flex flex-wrap items-center justify-center gap-4 ">
              <CustomSelect
                value={periodApplicant}
                onChange={setPeriodApplicant}
                options={[
                  { label: "This Week", value: "week" },
                  { label: "This Month", value: "month" },
                  { label: "This Year", value: "year" },
                ]}
              />
              <CustomSelect
                value={orderStatusApplicant}
                onChange={setOrderStatusApplicant}
                options={[
                  { label: "All", value: "all" },
                  { label: "Pending", value: "pending" },
                  { label: "Completed", value: "completed" },
                ]}
              />
            </div>
          </div>
        </div>
        <table className="w-full text-sm text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-gray-500 text-sm font-medium bg-[#F9F9FB]">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Number</th>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Portfolio/LinkedIn</th>
              <th className="px-4 py-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginationApplicants.map((applicant: Applicant) => (
              <tr key={applicant.id} className="border-t border-gray-100">
                <td className="px-4 py-3 text-gray-900 font-medium">
                  {applicant.name}
                </td>
                <td className="px-4 py-3 text-gray-600">{applicant.email}</td>
                <td className="px-4 py-3 text-gray-600">{applicant.number}</td>
                <td className="px-4 py-3 text-gray-600">
                  {applicant.position}
                </td>
                <td className="px-4 py-3 text-gray-600 truncate max-w-[160px]">
                  <a
                    href={applicant.portfolio}
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    {applicant.portfolio}
                  </a>
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/dashboard/reseller/${applicant.id}`}
                    className="text-sm text-blue-600 font-medium hover:underline"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <div className="flex items-center gap-4">
          <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, applicants.length)} of{" "}
            {applicants.length} entries
          </label>
          <select
            id="itemsPerPage"
            className="border border-gray-200 rounded-md px-3 py-1.5 text-sm"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>Show 5</option>
            <option value={8}>Show 8</option>
            <option value={10}>Show 10</option>
            <option value={20}>Show 20</option>
          </select>
        </div>
      </div>
    </>
  );
}
