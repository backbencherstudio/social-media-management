"use client";

import { useState } from "react";
import { useCreateApplicationMutation } from "@/src/redux/features/admin/reseller/resellerApplicationApi";
import { toast } from "sonner";

export default function page() {
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    user_email: "",
    phone_number: "",
    location: "",
    position: "",
    experience: 0,
    cover_letter: "",
    portfolio: "",
    skills: [],
  });

  const transdormData = (data: any) => {
    return {
      full_name: data.full_name,
      user_email: data.user_email,
      phone_number: parseInt(data.phone_number),
      location: data.location,
      position: data.position,
      experience: parseInt(data.experience),
      cover_letter: data.cover_letter,
      portfolio: data.portfolio,
      skills: data.skills,
    };
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "skills") {
      setFormData((prevData) => ({
        ...prevData,
        skills: value.split(",").map((skill) => skill.trim()),
      }));
      return;
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const [createApplication, { isLoading, isError, isSuccess }] =
    useCreateApplicationMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)

    console.log(transdormData(formData), isLoading, isError, isSuccess);

    const userId = "cmb4pc8f70003uoh4qkmtcc1x";
    try {
      await createApplication({
        userId,
        data: transdormData(formData),
      });
      toast.success("Application submitted successfully");
      setFormData({
        full_name: "",
        user_email: "",
        phone_number: "",
        location: "",
        position: "",
        experience: 0,
        cover_letter: "",
        portfolio: "",
        skills: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto p-4 mt-6">
      <div className="my-10">
        <h2 className="text-[42px] font-bold mb-4">
          Reseller Application Form
        </h2>
        <p className="text-[#1D1F2C]">
          Please fill out the Reseller Application Form.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-gray-50 p-4 md:p-15 rounded-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="full_name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number *
            </label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-700"
            >
              Position Applying For *
            </label>
            <select
              id="position"
              name="position"
              defaultValue=""
              value={formData.position}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            >
              <option className="text-gray-500" value="">
                Select Position
              </option>
              <option value="Influencer">Influencer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Software Engineer">Software Engineer</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Years of Experience *
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="portfolio"
            className="block text-sm font-medium text-gray-700"
          >
            Portfolio/LinkedIn (Optional) *
          </label>
          <input
            type="text"
            id="portfolio"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700"
          >
            Relevant Skills *
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills.join(", ")} // Displaying skills as comma-separated values
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="cover_letter"
            className="block text-sm font-medium text-gray-700"
          >
            Cover Letter *
          </label>
          <textarea
            id="cover_letter"
            name="cover_letter"
            value={formData.cover_letter}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms_agreed"
              name="terms_agreed"
              checked={termsAgreed}
              onChange={(e) => setTermsAgreed(e.target.checked)}
              required
              className="mr-2 w-5 h-5"
            />
            <label htmlFor="terms_agreed" className="">
              By proceeding, you confirm that you have read and agree to{" "}
            </label>
          </div>
          <div className="ml-6 mt-1">
            <a href="#" className="text-gray-800 font-medium text-[#1D1F2C]">
              Tag Growth Terms of use {"  "}
            </a>
            and
            <a href="#" className="font-medium text-[#1D1F2C]">
              {"  "} Privacy Notice.
            </a>
          </div>
        </div>

        <div className="text-left">
          <button
            type="submit"
            disabled={!termsAgreed}
            className="mt-4 px-8 py-2 bg-black text-white rounded-md hover:bg-gray-900 disabled:bg-gray-300"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
