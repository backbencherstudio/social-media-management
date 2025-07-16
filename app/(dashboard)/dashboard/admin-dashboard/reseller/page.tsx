"use client";

import { useState } from "react";
import ResellersState from "./_components/ResellersState";
import { ResellerTable } from "./_components/ResellersTable";
import {
  fakeResellersList,
  fakeResellerStats,
} from "./fakeResellers";
import ApplicantTable from "./_components/ApplicantTabtle";
import { useGetAllApplicationQuery } from "@/src/redux/features/admin/reseller/resellerApplicationApi";
import { useGetAllResellersQuery } from "@/src/redux/features/admin/reseller/resellerApi";

export default function page() {
  const {
    data: resellers,
    isLoading: isResellersLoading,
    isError: isResellersError,
  } = useGetAllResellersQuery(undefined);
  // console.log(resellers);

    const {
    data: applications,
    isLoading: isApplicationsLoading,
    isError: isApplicationsError,
  } = useGetAllApplicationQuery(undefined);
  // console.log("applications", applications?.data);

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
              isLoading={isResellersLoading}
              isError={isResellersError}
              resellers={resellers?.data || []}
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
          isLoading={isApplicationsLoading}
          isError={isApplicationsError}
          applicants={applications?.data || []}
          periodApplicant={periodApplicant}
          setPeriodApplicant={setPeriodApplicant}
          orderStatusApplicant={orderStatusApplicant}
          setOrderStatusApplicant={setOrderStatusApplicant}
        ></ApplicantTable>
      </div>
    </div>
  );
}
