"use client";

import { useState } from "react";
import ResellersState from "./components/ResellersState";
import { ResellerTable } from "./components/ResellersTable";
import {
  applicantsList,
  fakeResellersList,
  fakeResellerStats,
} from "./fakeResellers";
import CustomSelect from "../../_components/custom-select";
import { Pagination } from "../_components/Pagination";
import ApplicantTable from "./components/ApplicantTabtle";

export default function page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const totalPages = Math.ceil(fakeResellersList.length / itemsPerPage);
  const paginationResellersList = fakeResellersList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // filter
  const [period, setPeriod] = useState("week");
  const [orderStatus, setOrderStatus] = useState("all");

  //   filter for applicants
  const [periodApplicant, setPeriodApplicant] = useState("week");
  const [orderStatusApplicant, setOrderStatusApplicant] = useState("all");
  return (
    <div>
      <ResellersState data={fakeResellerStats} />

      {/* Resellers info */}
      <div>
        <div>
          <div className=" rounded-xl mt-6  bg-white shadow">
           
            {/* table */}
            <ResellerTable
              resellers={fakeResellersList}
              period={period}
              setPeriod={setPeriod}
              orderStatus={orderStatus}
              setOrderStatus={setOrderStatus}
            />
          </div>
        </div>

       
      </div>

      {/* Applicant table */}

      <div className="mt-6">
        <ApplicantTable
          applicants={applicantsList}
          periodApplicant={periodApplicant}
          setPeriodApplicant={setPeriodApplicant}
          orderStatusApplicant={orderStatusApplicant}
          setOrderStatusApplicant={setOrderStatusApplicant}
        ></ApplicantTable>
      </div>
    </div>
  );
}
