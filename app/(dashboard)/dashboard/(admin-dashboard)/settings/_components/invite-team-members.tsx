import Link from "next/link";
import React, { useState } from "react";
import { GrView } from "react-icons/gr";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import ManageUserModal from "./manage-user-modal";

export default function InviteTeamMembers() {
  const [showModal, setShowModal] = useState(false);

  // Add this interface after imports
  interface InviteFormData {
    email: string;
    role: string;
  }

  // Inside your component, add this before the return statement
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

  const services = [
    {
      id: 1,
      name: "Email Designg",
      started: "2024-12-01",
      status: "For Review",
      approval: "Approved",
    },
    {
      id: 2,
      name: "Plus • 15 posts",
      started: "2025-01-15",
      status: "In Progress",
      approval: "Pending",
    },
    {
      id: 3,
      name: "Email Marketing",
      started: "2025-01-15",
      status: "Complete",
      approval: "Pending",
    },
  ];

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
        <div className="flex justify-between  mb-6 px-1">
          <div className="">
            <h1 className="text-xl font-bold text-gray-900">
              Invite team members
            </h1>
            <p className="text-gray-900">
              Get your projects up and running faster by inviting your team to
              collaborate.
            </p>
          </div>
          <div>
            <button className="flex items-center gap-2 px-4 py-3 bg-gray-200 text-black rounded-lg transition-colors">
              + Add another
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-4 items-end mb-6"
        >
          <div className="col-span-8">
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
            {/* {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )} */}
          </div>
          <div className="col-span-2">
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
            {/* {errors.role && (
              <p className="text-sm text-red-500 mt-1">{errors.role.message}</p>
            )} */}
          </div>
          <div className="col-span-2">
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
              <th className="py-3 px-4 text-left first:rounded-tl-lg">
                User Name
              </th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="">
                {/* Service cell with left side text & status */}
                <td className="py-4 px-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h1 className="font-semibold text-gray-900">
                        {service.name}
                      </h1>
                      <span className="text-sm text-gray-500">62A2AA44-2</span>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-4 text-center">{service.started}</td>
                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        service.status === "For Review" &&
                        "bg-[#FEF3C7] text-[#984917]"
                      } ${
                        service.status === "In Progress" &&
                        "bg-[#F5F1FF] text-[#5B21B6]"
                      } ${
                        service.status === "Complete" &&
                        "bg-[#ECEFF3] text-black"
                      }`}
                    >
                      {service.status}
                    </span>
                  </div>
                </td>

                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center">
                    <span className={`px-3 py-1 rounded-full font-medium`}>
                      {"Oct 17"}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => setShowModal(true)}
                      className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
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
          onClose={() => setShowModal(false)}
        />
      </div>
    </div>
  );
}
