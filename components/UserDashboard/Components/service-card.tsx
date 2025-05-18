export default function ServiceCard({ service }) {
//   console.log(service);
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 max-w-sm border border-gray-200 space-y-4 relative">
      {/* Icon and badge */}
      <div className="flex justify-between items-start ">
        <div className="bg-gray-100 p-2 rounded-md ">
          {/* Placeholder image icon */}
          {service.icon}
        </div>
      </div>

      {service.badge && (
        <span className="bg-black text-white text-xs font-medium px-2 py-1 rounded-t rounded-bl absolute right-0 top-6">
          {service.badge}
        </span>
      )}
      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold mb-2 mt-5">{service.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{service.description}</p>
      </div>

      {/* Pricing */}
      <p className=" font-medium">
        Starts from <span className="">{service.price}</span>
      </p>

<hr className="text-gray-200" />
      {/* Learn more link */}
      <a
        href="#"
        className="text-sm text-gray-600 hover:text-gray-800 flex items-center space-x-1 undlerline"
      >
     
        <span>Learn more</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M17 8l4 4m0 0l-4 4m4-4H3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
