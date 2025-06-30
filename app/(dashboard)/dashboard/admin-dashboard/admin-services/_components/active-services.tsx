"use client";
import TrashIcon from "@/public/incons/trash";
import { useGetAllServicesQuery, useToggleServiceStatusMutation } from "@/src/redux/features/admin/services";
import Link from "next/link";


export default function ActiveServices() {

  const { data: servicesData, isLoading } = useGetAllServicesQuery();
  const [toggleServiceStatus] = useToggleServiceStatusMutation()


  return (
    <div className="overflow-x-auto w-full px-4 py-6 bg-white rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 px-1">
        <div className="space-y-2 sm:space-y-3 w-full sm:w-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Active Services
          </h1>
        </div>
        <div className="w-full sm:w-auto">
          <Link
            href={"/dashboard/admin-services/create-new-service"}
            className="bg-black text-white px-4 py-3 rounded-lg"
          >
            + Create New Service
          </Link>
        </div>
      </div>

      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100 text-gray-700 text-center rounded-t-lg">
          <tr>
            <th className="py-3 px-4 text-left first:rounded-tl-lg whitespace-nowrap text-xs md:text-sm font-medium">
              Service Name
            </th>
            <th className="py-3 px-4 whitespace-nowrap text-xs md:text-sm font-medium">
              Category
            </th>
            <th className="py-3 px-4 whitespace-nowrap text-xs md:text-sm font-medium">
              Price
            </th>
            <th className="py-3 px-4 whitespace-nowrap text-xs md:text-sm font-medium">
              Sale
            </th>
            <th className="py-3 px-4 whitespace-nowrap text-xs md:text-sm font-medium">
              Status
            </th>
            <th className="py-3 px-4 whitespace-nowrap text-xs md:text-sm font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {servicesData?.map((service) => (
            <tr key={service.id} className="">
              {/* Service cell with left side text & status */}
              <td className="py-4 px-4 whitespace-nowrap">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="text-xs md:text-sm">{service.name}</p>
                  </div>
                </div>
              </td>

              <td className="py-4 px-4 text-center whitespace-nowrap text-xs md:text-sm">
                {service.category}
              </td>
              <td className="py-4 px-4 text-center whitespace-nowrap text-xs md:text-sm">
                {service.price}
              </td>

              <td className="py-4 px-4 text-center whitespace-nowrap">
                <div className="flex justify-center">
                  <span
                    className={`px-3 py-1 rounded-full font-medium text-xs md:text-sm`}
                  >
                    {service.sale}
                  </span>
                </div>
              </td>

              <td className="py-4 px-4 text-center whitespace-nowrap">
                <div className="flex justify-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.status === "Active"
                        ? "bg-[#EBFBF5] text-[#07811E]"
                        : "bg-[#FFF1F1] text-[#CF0002]"
                    }`}
                  >
                    {service.status}
                  </span>
                </div>
              </td>

              <td className="py-4 px-4 whitespace-nowrap">
                <div className="flex items-center justify-center gap-6">
                  <Link
                    href={`/dashboard/admin-services/${service.id}`}
                    className="bg-gray-100 p-2 rounded-lg"
                  >
                    <TrashIcon />
                  </Link>
                  <div className="flex items-center gap-2">
                    <div
                      onClick={() => toggleServiceStatus(service.id)}
                      className={`relative inline-flex h-6 w-11 cursor-pointer rounded-full transition-colors ${
                        service.status === "Active"
                          ? "bg-green-500"
                          : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-lg m-0.5 ${
                          service.status === "Active"
                            ? "translate-x-5"
                            : "translate-x-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
