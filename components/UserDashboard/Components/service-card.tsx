
export default function ServiceCard({service}) {
  return (
    <div className="min-w-full bg-white border border-gray-100 rounded-lg p-5 flex flex-col  shadow-sm">
      {/* Header with brain icon */}

      <div className="w-12 h-12 mb-4">
       {
        service.icon
       }
      </div>
      <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
      {service?.title}
      </h3>

      {/* Article title - made smaller with proper spacing */}
      <div className="mb-6">
        <p className="text-[#1D1F2C]">
         {service.info}
        </p>
      </div>

      {/* Word count with more spacing */}
      <div className="my-3">
        <p className="text-[#1D1F2C] font-medium text-xl">{service.word} word</p>
      </div>

      {/* Learn more link with arrow */}
      <div className="mt-4 ">
        <a    
          href="#"
          className="inline-flex items-center  font-medium hover:text-blue-800 border-b border-black "
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="ml-1"
          >
            <path
              d="M12.0079 7.0605L5.55269 13.5157L4.49219 12.4553L10.9467 6H5.25794V4.5H13.5079V12.75H12.0079V7.0605Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}
