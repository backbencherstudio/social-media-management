"use client";

export interface Service {
  id: string;
  service: string;
  started: string;
  status: "For Review" | "In Progress" | "Completed";
  nextPayment: string;
}

interface ServicesTableProps {
  services: Service[];
  emptyMessage?: string;
  title?: string;
}

export default function ServicesTable({
  services,
  emptyMessage = "No active services.",
  title = "Active Services",
}: ServicesTableProps) {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-4 p-6 pb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center rounded-full bg-green-50 px-3 py-1 text-sm ">
          <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500"></span>
          {services?.length} Active
        </div>
      </div>

      <div className="p-6 pt-2">
        {services?.length === 0 ? (
          <div className="text-center text-gray-500 py-10 text-sm">
            {emptyMessage}
          </div>
        ) : (
          <div className="w-full overflow-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 px-3">
                <tr className="border-b border-gray-200 ">
                  <th className="pb-3 pt-2 text-left text-sm font-medium text-gray-500 pl-3">
                    Service
                  </th>
                  <th className="pb-3 pt-2 text-left text-sm font-medium text-gray-500 ">
                    Started
                  </th>
                  <th className="pb-3 pt-2 text-left text-sm font-medium text-gray-500">
                    Status
                  </th>
                  <th className="pb-3 pt-2 text-left text-sm font-medium text-gray-500">
                    Next Payment
                  </th>
                  <th className="pb-3 pt-2 text-left text-sm font-medium text-gray-500 pl-20">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {services?.map((service, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 pr-4">
                      <div className="pl-3">
                        <div className="font-medium ">{service?.service}</div>
                        <div className="text-xs text-gray-500">
                          {service.id}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 pr-4">
                      {new Date(service.started).toLocaleDateString() ||
                        "Invalid Date"}
                    </td>
                    <td className="py-4 pr-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium capitalize ${
                          service.status === "For Review"
                            ? "bg-[#E98800]/10 text-[#E98800]"
                            : service.status === "In Progress"
                            ? "bg-[#8A71F7]/10 text-[#8A71F7]"
                            : "bg-green-100 text-green-500"
                        }`}
                      >
                        {service.status}
                      </span>
                    </td>
                    <td className="py-4 pr-4">{new Date(service.nextPayment).toLocaleDateString()}</td>
                    <td className="py-4 text-left pl-20">
                      <button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Order Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
