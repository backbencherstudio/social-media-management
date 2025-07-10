"use client";

import {
  FaChevronDown,
  FaCloudUploadAlt,
  FaTrash,
  FaUserCircle,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { useEditProfileMutation } from "@/src/redux/features/common/edit-profile/editProfileApi";
import { toast } from "sonner";

interface ProfileFormData {
  photo: FileList | null;

  email: string;
  password: string;
  firstName: string;
  lastName: string;
  terms: boolean;
  address: string;
  city: string;
  country: string;
  state: string;
  postalCode: string;
  phoneNumber: string;
  timezone: string;
}

const Profile = () => {
  const { register, handleSubmit } = useForm<ProfileFormData>();
  const [selectedPhotoName, setSelectedPhotoName] = useState<string>("");

  const [editProfile, { isLoading, isError, error }] = useEditProfileMutation();
  const photoRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = async (data: ProfileFormData) => {
    console.log("Form data:", data);
    const formData = new FormData();
    if (
      photoRef.current &&
      photoRef.current.files &&
      photoRef.current.files.length > 0
    ) {
      formData.append("image", photoRef.current.files[0]);
    }

    formData.append("first_name", data.firstName);
    formData.append("last_name", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phone_number", data.phoneNumber);

    formData.append("country", data.country);
    formData.append("state", data.state);
    formData.append("city", data.city);
    formData.append("location", data.address);
    formData.append("zip_code", data.postalCode);
    // formData.append("agreed_terms", data.terms ? "true" : "false");

    console.log(formData);

    const res = await editProfile(formData);
    if (res?.data?.success) {
      toast.success(res?.data.message);
      console.log("update");
    }
  };

  // Handler for file input change
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedPhotoName(e.target.files[0].name);
    } else {
      setSelectedPhotoName("");
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48">
      <div className="rounded-lg mt-4 sm:mt-6 p-4 sm:p-6 md:p-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] space-y-4 sm:space-y-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl  font-semibold">
          Edit your details
        </h1>

        <form
          className="space-y-6 sm:space-y-8 md:space-y-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Upload and Delete */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg bg-gray-50">
            <div className="relative mb-4 sm:mb-0 mr-5">
              <div className="rounded-full bg-gray-200 flex items-center justify-center relative p-2 sm:p-3">
                <FaUserCircle className="w-10 h-10" />
                <FaChevronDown className="absolute -right-3 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 text-gray-500 w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 w-full sm:w-auto relative">
              <label
                htmlFor="uploadPhoto"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#F5F5F7] border border-gray-300 text-gray-700 rounded-lg text-sm sm:text-base hover:bg-gray-50 transition-colors"
              >
                <FaCloudUploadAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                Upload Photo
                <input
                  type="file"
                  id="uploadPhoto"
                  accept="image/*"
                  className="hidden"
                  // {...register("photo")}
                  ref={photoRef}
                  onChange={handlePhotoChange}
                />
              </label>
              {selectedPhotoName && (
                <span
                  className="ml-2 text-xs text-gray-500 truncate max-w-[140px] inline-block align-middle absolute"
                  title={selectedPhotoName}
                >
                  {selectedPhotoName}
                </span>
              )}
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#F5F5F7] border border-gray-300 text-gray-700 rounded-lg text-sm sm:text-base hover:bg-gray-50 transition-colors"
              >
                <FaTrash className="w-4 h-4 sm:w-5 sm:h-5" />
                Delete Photo
              </button>
            </div>
          </div>

          {/* Email and Password */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* First Name And Last Name */}
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-2 sm:gap-3">
              <input
                required
                type="checkbox"
                id="terms"
                {...register("terms", { required: true })}
                className="mt-1 h-4 w-4 sm:h-5 sm:w-5 rounded border-gray-300 text-black focus:ring-black"
              />
              <label
                htmlFor="terms"
                className="text-sm sm:text-base text-gray-600"
              >
                By signing up I accept the Terms & Conditions and Refund Policy.{" "}
                <span className="block sm:inline">
                  <a href="#" className="text-black hover:underline">
                    View Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-black hover:underline">
                    Refund Policy
                  </a>
                </span>
              </label>
            </div>
          </div>

          {/* Billing Address Section */}
          <div className="pt-4 sm:pt-6 md:pt-8">
            <h1 className="text-lg sm:text-xl md:text-2xl  font-semibold mb-4 sm:mb-6">
              Billing address
            </h1>
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    {...register("address", { required: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter your address"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    {...register("city", { required: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter your city"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    {...register("country", { required: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select a country</option>
                    <option value="BD">Bangladesh</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province / Region
                  </label>
                  <select
                    id="state"
                    {...register("state", { required: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select a state</option>
                    <option value="DH">Dhaka</option>
                    <option value="CH">Chittagong</option>
                    <option value="RJ">Rajshahi</option>
                    <option value="KH">Khulna</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="postalCode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postal / Zip Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    {...register("postalCode", { required: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter postal code"
                  />
                </div>
              </div>
            </div>
          </div>

          {/*  Phone Number */}
          <div>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  {...register("phoneNumber", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>

          {/* Timezone */}
          <div>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <label
                  htmlFor="timezone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Timezone
                </label>
                <select
                  id="timezone"
                  {...register("timezone", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Select your timezone</option>
                  <option value="UTC+6">
                    Bangladesh Standard Time (UTC+6)
                  </option>
                  <option value="UTC+0">Greenwich Mean Time (UTC+0)</option>
                  <option value="UTC-5">Eastern Time (UTC-5)</option>
                  <option value="UTC-8">Pacific Time (UTC-8)</option>
                  <option value="UTC+1">Central European Time (UTC+1)</option>
                  <option value="UTC+5:30">
                    India Standard Time (UTC+5:30)
                  </option>
                  <option value="UTC+8">China Standard Time (UTC+8)</option>
                  <option value="UTC+9">Japan Standard Time (UTC+9)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 sm:pt-6 md:pt-8">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto min-w-[200px] px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base font-medium"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
