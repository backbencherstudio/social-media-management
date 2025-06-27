"Use Client";

import {
  useGetUserRoleQuery,
  useUpdateUserAndRoleMutation,
} from "@/src/redux/features/admin/settings/user-role-management";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultData?: {
    name: string;
    email: string;
    role: string;
  } | null;
  selectedUserData: {
    id: string;
    name: string;
    email: string;
    roles: string;
    status: string;
    action: string;
  } | null;
}

interface IFormInput {
  email: string;
  roleId: string;
}

export default function ManageUserModal({
  isOpen,
  onClose,
  defaultData,
  selectedUserData,
}: EmailModalProps) {
  const { data } = useGetUserRoleQuery();

  const [updateUserAndRole] = useUpdateUserAndRoleMutation();

  const [isActive, setIsActive] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<IFormInput>();

  useEffect(() => {
    if (selectedUserData && data?.data?.data) {
      const selectedRole = data.data.data.find(
        (role: any) => role.name === selectedUserData.roles
      );
      reset({
        email: selectedUserData.email,
        roleId: selectedRole ? selectedRole.id : "",
      });
      setIsActive(selectedUserData.status === "Active");
    }
  }, [selectedUserData, data, reset]);

  // Update form values when defaultData changes
  React.useEffect(() => {
    if (defaultData) {
      setValue("email", defaultData.email);
    }
  }, [defaultData, setValue]);

  const onSubmit = async (data: IFormInput) => {
    const formData = {
      ...data,
      status: isActive ? 1 : 0,
    };

    console.log(formData);
    const result = await updateUserAndRole(formData);
    console.log(result);
    // reset();
  };

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Manage User</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              placeholder="Enter email"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none" 
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              {...register("roleId", {
                required: "Role is required",
              })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none"
            >
              <option value="" disabled>{selectedUserData?.roles}</option>
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

          {/* Switch */}
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">
              Status (
              <span className="text-sm text-gray-600">
                {isActive ? "Active" : "Inactive"})
              </span>
            </label>
            <div className="flex items-center gap-2">
              <div
                onClick={() => setIsActive(!isActive)}
                className={`relative inline-flex h-6 w-11 cursor-pointer rounded-full transition-colors ${
                  isActive ? "bg-green-500" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-lg m-0.5 ${
                    isActive ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-black text-white rounded-lg px-4 py-3 cursor-pointer"
              >
                Save changes
              </button>
              <div>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-100 text-gray-600 rounded-lg px-5 py-3 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
