import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function AdminInfo() {
  const [profilePic, setProfilePic] = useState("/default-avatar.png"); // Replace with actual default
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const handlePhotoUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = () => setProfilePic("/default-avatar.png");

  const onSubmit = (data: any) => {
    // You can now use all form data here
    // Example: send to API
    console.log({
      ...data,
      profilePic,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl p-6 shadow"
    >
      <h2 className="text-xl font-semibold mb-6">Edit admin info</h2>
      <div className="flex items-center gap-4 mb-6">
        <img
          src={profilePic}
          alt="Profile"
          className="w-14 h-14 rounded-full object-cover border"
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handlePhotoUpload}
        />
        <button
          type="button"
          className="bg-gray-100 px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          + Upload photo
        </button>
        <button
          type="button"
          className="bg-gray-100 px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
          onClick={handleDeletePhoto}
        >
          Delete photo
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">First name</label>
          <input
            type="text"
            placeholder="Enter first name"
            {...register("firstName", { required: "First name is required" })}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs">{`${errors.firstName.message}`}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last name</label>
          <input
            type="text"
            placeholder="Enter last name"
            {...register("lastName", { required: "Last name is required" })}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs">{`${errors.lastName.message}`}</p>
          )}
        </div>
      </div>
      <div className="mb-8">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter email address"
          {...register("email", { required: "Email is required" })}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{`${errors.email.message}`}</p>
        )}
      </div>
      <h3 className="text-lg font-semibold mb-4">Password Update</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Current Password
        </label>
        <input
          type="password"
          placeholder="Enter current password"
          {...register("currentPassword")}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            {...register("newPassword")}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            {...register("confirmPassword")}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 bg-black text-white rounded-lg px-6 py-2 font-medium cursor-pointer"
      >
        Save Changes
      </button>
    </form>
  );
}
