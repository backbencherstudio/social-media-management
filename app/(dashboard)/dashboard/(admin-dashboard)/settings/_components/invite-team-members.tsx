import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ManageUserModal from "./manage-user-modal";

const services = [
  {
    id: 1,
    name: "Email Designg",
    email: "dmail@gmail",
    started: "2024-12-01",
    status: 1,
    approval: "Approved",
    role: "Super Admin",
  },
  {
    id: 2,
    name: "Plus • 15 posts",
    email: "fmail@gmail",
    started: "2025-01-15",
    status: 0,
    approval: "Pending",
    role: "Admin",
  },
  {
    id: 3,
    name: "Email Marketing",
    email: "gmail@gmail",
    started: "2025-01-15",
    status: 1,
    approval: "Pending",
    role: "Manager",
  },
];

export default function InviteTeamMembers() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    id: number;
    name: string;
    email: string;
    started: string;
    status: number;
    approval: string;
    role: string;
  } | null>(null);

  // Add this interface after imports
  interface InviteFormData {
    email: string;
    role: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InviteFormData>();

  const onSubmit = (data: InviteFormData) => {
    console.log(data);
    reset();
  };

  // Add new form interface for manage modal
  interface ManageFormData {
    username: string;
    email: string;
    role: string;
  }

  // Add new form hook for manage modal
  const {
    register: registerManage,
    handleSubmit: handleSubmitManage,
    formState: { errors: errorsManage },
  } = useForm<ManageFormData>();

  return (
    <div>
      <div className="overflow-x-auto w-full px-4 py-6 bg-white rounded-lg">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 px-1">
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              Invite team members
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Get your projects up and running faster by inviting your team to
              collaborate.
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition-colors">
              + Add another
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-6"
        >
          <div className="md:col-span-8">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter work email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-xs md:text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="md:col-span-2">
            <select
              {...register("role", {
                required: "Please select a role",
              })}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select role</option>
              <option value="super_admin">Super Admin</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </select>
            {errors.role && (
              <p className="text-xs md:text-sm text-red-500 mt-1">
                {errors.role.message}
              </p>
            )}
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Invite
            </button>
          </div>
        </form>

        <table className="min-w-full table-auto border-collapse bg-white rounded-lg">
          <thead className="bg-gray-100 text-gray-700 text-center rounded-t-lg">
            <tr>
              <th className="py-3 px-4 text-left first:rounded-tl-lg whitespace-nowrap text-xs md:text-sm font-medium">
                User Name
              </th>
              <th className="py-3 px-4 whitespace-nowrap text-xs md:text-sm font-medium">
                Email
              </th>
              <th className="py-3 px-4 whitespace-nowrap text-xs md:text-sm font-medium">
                Role
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
            {services.map((service) => (
              <tr key={service.id} className="">
                {/* Service cell with left side text & status */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h1 className="font-semibold text-gray-900 text-xs md:text-sm">
                        {service.name}
                      </h1>
                      <span className="text-xs text-gray-500">62A2AA44-2</span>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-4 text-center whitespace-nowrap text-xs md:text-sm">
                  {service.started}
                </td>
                <td className="py-4 px-4 text-center whitespace-nowrap">
                  <div className="flex justify-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        service.status === 1 && "bg-[#EBFBF5] text-[#07811E]"
                      } ${
                        service.status === 0 && "bg-[#E8F1FE] text-[#1877F2]"
                      }`}
                    >
                      {service.status === 1 ? "Active" : "Inactive"}
                    </span>
                  </div>
                </td>

                <td className="py-4 px-4 text-center whitespace-nowrap">
                  <div className="flex justify-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      {"Oct 17"}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center whitespace-nowrap">
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => {
                        setSelectedService(service);
                        setShowModal(true);
                      }}
                      className="px-4 py-2 text-blue-700 underline rounded-lg transition-colors cursor-pointer text-xs md:text-sm"
                    >
                      Manage
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Manage Modal */}
        <ManageUserModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedService(null);
          }}
          defaultData={
            selectedService
              ? {
                  name: selectedService.name,
                  email: selectedService.email,
                  role: selectedService.role,
                }
              : null
          }
        />
      </div>
    </div>
  );
}
