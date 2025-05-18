import React from "react";

export default function Services() {
  return (
    <section className=" mx-auto lg:py-[100px] md:py-[80px] py-[60px] px-5 2xl:px-0 bg-[#F7F7F9]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="border px-4 py-6 rounded-lg border-[#E5E7EB] bg-white shadow-md space-y-6"
          >
            <div className="bg-gray-100 rounded-lg p-2 inline-block">{service.icon}</div>
            <div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const icon1 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M11.5625 19.1052C11.5625 20.8252 12.8825 22.2118 14.5225 22.2118H17.8692C19.2958 22.2118 20.4558 20.9985 20.4558 19.5052C20.4558 17.8785 19.7492 17.3052 18.6958 16.9318L13.3225 15.0652C12.2692 14.6918 11.5625 14.1185 11.5625 12.4918C11.5625 10.9985 12.7225 9.78516 14.1492 9.78516H17.4958C19.1358 9.78516 20.4558 11.1718 20.4558 12.8918"
      stroke="#04060F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8V24"
      stroke="#04060F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.0001 29.3346H12.0001C5.33341 29.3346 2.66675 26.668 2.66675 20.0013V12.0013C2.66675 5.33464 5.33341 2.66797 12.0001 2.66797H20.0001C26.6667 2.66797 29.3334 5.33464 29.3334 12.0013V20.0013C29.3334 26.668 26.6667 29.3346 20.0001 29.3346Z"
      stroke="#04060F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const icon2 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <circle cx="16" cy="16" r="15" stroke="#04060F" strokeWidth="2" />
    <path
      d="M12 10L22 16L12 22V10Z"
      fill="#04060F"
      stroke="#04060F"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const servicesList = [
  {
    id: 1,
    icon: icon1,
    title: "Social Media Post",
    description:
      "We create visually stunning and engaging social media posts that capture your brand's essence and resonate with your audience.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Short Videos",
    description:
      "We produce captivating short videos that effectively communicate your message and engage your audience.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Short Videos",
    description:
      "We produce captivating short videos that effectively communicate your message and engage your audience.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Short Videos",
    description:
      "We produce captivating short videos that effectively communicate your message and engage your audience.",
  },
];
