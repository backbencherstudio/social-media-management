import CustomSelect from "@/app/(dashboard)/dashboard/_components/custom-select";

export default function RunningTaskTable({ tasks, orderStatus, setOrderStatus }) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <h2 className="text-xl font-semibold ">Running Task</h2>

        <div className="flex flex-wrap items-center justify-center gap-4 ">
          <CustomSelect
            value={orderStatus }
            onChange={setOrderStatus }
            options={[
              { label: "All", value: "all" },
              { label: "Pending", value: "pending" },
              { label: "Completed", value: "completed" },
            ]}
          />
        </div>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm text-left border-separate border-spacing-y-2">
        <thead>
          <tr className="text-gray-500 text-sm font-medium bg-[#F9F9FB]">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Assign Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Deadline</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t border-gray-100 hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-900 font-medium">{task.name}</td>
              <td className="px-4 py-3 text-gray-600">{task.assignDate}</td>
              <td className="px-4 py-3">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
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
              <td className="px-4 py-3 text-right">
                <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200">
                  <i className="w-4 h-4 text-gray-600">🔗</i> {/* Or use an icon */}
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
