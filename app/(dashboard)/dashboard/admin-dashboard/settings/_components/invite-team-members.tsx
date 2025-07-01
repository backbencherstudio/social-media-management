"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ManageUserModal from "./manage-user-modal";
import { useGetAllUserQuery } from "@/src/redux/features/user/user-auth";
import { useGetUserRoleQuery, useInviteTeamMemberMutation } from "@/src/redux/features/admin/settings/user-role-management";
import { toast } from "sonner";

export default function InviteTeamMembers() {
  const [showModal, setShowModal] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState<{
    id: string;
    name: string;
    email: string;
    roles: string;
    status: string;
    action: string;
  } | null>(null);

  const { data: userData } = useGetAllUserQuery();
  const { data } = useGetUserRoleQuery();
  const [inviteTeamMember] = useInviteTeamMemberMutation();

  // Add this interface after imports
  interface InviteFormData {
    email: string;
    roleId: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InviteFormData>();

  const onSubmit =async (data: InviteFormData) => {
    await inviteTeamMember(data);
    toast.success("Invite sent successfully");
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
          className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-6"
        >
          <div className="md:col-span-8" style={{ minHeight: "60px" }}>
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none"
              style={{ minHeight: "48px" }} // Ensures height remains consistent
            />
            {errors.email && (
              <p className="text-xs md:text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2" style={{ minHeight: "60px" }}>
            <select
              {...register("roleId", {
                required: "Role is required",
              })}
              className="w-full border border-gray-200 rounded-lg px-4 py-3"
            >
              <option value="" disabled>
                {selectedUserData?.roles}
              </option>
              {data?.data?.data?.map((item: any) => (
                <option key={item?.id} value={item?.id}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.roleId && (
              <p className="text-red-500 text-sm mt-1">
                {errors.roleId.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2" style={{ minHeight: "60px" }}>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Send Invite
            </button>
          </div>
        </form>

        <table className="min-w-full table-auto border-collapse bg-white rounded-lg">
          <thead className="bg-gray-100 text-gray-700 rounded-t-lg">
            <tr>
              <th className="py-3 px-4 text-left first:rounded-tl-lg whitespace-nowrap text-xs md:text-sm font-medium">
                User Name
              </th>
              <th className="py-3 px-4 text-left whitespace-nowrap text-xs md:text-sm font-medium">
                Email
              </th>
              <th className="py-3 px-4 text-left whitespace-nowrap text-xs md:text-sm font-medium">
                Role
              </th>
              <th className="py-3 px-4 text-left whitespace-nowrap text-xs md:text-sm font-medium">
                Status
              </th>
              <th className="py-3 px-4 text-left whitespace-nowrap text-xs md:text-sm font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            { userData?.data?.data?.data && userData?.data?.data?.data.map((item: any) => (
              <tr key={item.id} className="">
                {/* item cell with left side text & status */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-start justify-start flex-wrap gap-2">
                    <div>
                      <h1 className="font-semibold text-gray-900 text-xs md:text-sm">
                        {item.name}
                      </h1>
                      <span className="text-xs text-gray-500">62A2AA44-2</span>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-4 text-start whitespace-nowrap text-xs md:text-sm">
                  {item.email}
                </td>

                <td className="text-start whitespace-nowrap">
                  <div className="py-4 flex justify-start">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      {item.roles}
                    </span>
                  </div>
                </td>

                <td className="py-4 text-start whitespace-nowrap">
                  <div className="flex justify-start">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "Active" &&
                        "bg-[#EBFBF5] text-[#07811E]"
                      } ${
                        item.status === "Inactive" &&
                        "bg-[#E8F1FE] text-[#1877F2]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </td>

                <td className=" text-start whitespace-nowrap">
                  <div className="py-4 flex items-start justify-start ">
                    <button
                      onClick={() => {
                        setSelectedUserData(item);
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
          selectedUserData={selectedUserData}
          onClose={() => {
            setShowModal(false);
            setSelectedUserData(null);
          }}
        />
      </div>
    </div>
  );
}
