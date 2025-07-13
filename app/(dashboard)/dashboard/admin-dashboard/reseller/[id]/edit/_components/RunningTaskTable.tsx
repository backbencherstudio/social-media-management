import CustomSelect from "@/app/(dashboard)/dashboard/_components/custom-select";
import { ExternalLink } from "lucide-react";

export default function RunningTaskTable({
  tasks,
  orderStatus,
  setOrderStatus,
}: any) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm overflow-x-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold ">Running Task</h2>

        <div className="flex flex-wrap items-center justify-center gap-4 ">
          <CustomSelect
            value={orderStatus}
            onChange={setOrderStatus}
            options={[
              { label: "All", value: "all" },
              { label: "Pending", value: "pending" },
              { label: "Completed", value: "completed" },
            ]}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left ">
          <thead>
            <tr className="text-gray-500 text-sm font-medium bg-[#F9F9FB]">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Assign Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Deadline</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task: any) => (
              <tr
                key={task.id}
                className="border-t border-gray-100 hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-gray-900 font-medium">
                  {task.name}
                </td>
                <td className="px-4 py-3 text-gray-600">{task.assignDate}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs font-medium px-2 py-0.54 rounded-full ${
                      task.status === "Pending Review"
                        ? "text-orange-600 bg-orange-100"
                        : task.status === "In Progress"
                        ? "text-purple-600 bg-purple-100"
                        : "text-green-600 bg-green-100"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{task.deadline}</td>
                <td className="px-4 py-3 text-gray-600">
                  <select className="text-sm text-gray-600 p-1 border border-gray-200 rounded-md bg-gray-50">
                    <option>{task.role}</option>
                    {/* Add more roles here if needed */}
                    <option>Marketing</option>
                    <option>Copywriting</option>
                    <option>SEO Specialist</option>
                  </select>
                </td>
                <td className="px-4 py-3 text-right  flex items-center justify-center">
                  <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200">
                   


                    <ExternalLink className="w-[18px] h-[18px] text-[#4A4C56] stroke-[1.125]" />

                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
