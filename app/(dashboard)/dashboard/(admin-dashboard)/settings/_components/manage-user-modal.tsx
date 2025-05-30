"Use Client";

import {
  useGetUserRoleQuery,
  useUpdateUserAndRoleMutation,
} from "@/src/redux/features/admin/settings/user-role-management";
import React, { useState } from "react"; // Update this line
import { useForm } from "react-hook-form";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultData?: {
    name: string;
    email: string;
    role: string;
  } | null;
}

interface EmailFormData {
  // name: string;
  roleId: number;
  email: string;
}

export default function ManageUserModal({
  isOpen,
  onClose,
  defaultData,
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
  } = useForm<EmailFormData>({
    defaultValues: {
      // name: defaultData?.name || "",
      email: defaultData?.email || "",
    },
  });

  // Update form values when defaultData changes
  React.useEffect(() => {
    if (defaultData) {
      // setValue("name", defaultData.name);
      setValue("email", defaultData.email);
    }
  }, [defaultData, setValue]);

  const onSubmit = async (data: EmailFormData) => {
    const formData = {
      ...data,
      status: isActive ? 1 : 0,
    };
    const result = await updateUserAndRole(formData);
    console.log(result);
    reset();
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Manage User</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Type */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Enter Name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div> */}

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
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
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
              Recipients
            </label>
            <select
              {...register("roleId", {
                required: "Please select a role",
              })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            >
              {data?.data?.roles?.map((item: any) => (
                <option key={item.id} value={item.id}>
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
                className="bg-black text-white rounded-lg px-4 py-3"
              >
                Save changes
              </button>
              <div>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-100 text-gray-600 rounded-lg px-5 py-3 hover:bg-gray-200 transition-colors"
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
