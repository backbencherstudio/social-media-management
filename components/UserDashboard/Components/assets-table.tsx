"use client";

export interface Asset {
  fileName: string;
  type: "Design" | "Post";
  approvedDate: string;
  size: string;
}

interface AssetsTableProps {
  assets: Asset[];
  emptyMessage?: string;
  title?: string;
}

export default function AssetsTable({
  assets,
  emptyMessage = "No assets available.",
  title = "Assets",
}: AssetsTableProps) {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-4 p-6 pb-2">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <div className="p-6 pt-2">
        {assets.length === 0 ? (
          <div className="text-center text-gray-500 py-10 text-sm">
            {emptyMessage}
          </div>
        ) : (
          <div className="w-full overflow-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 px-3">
                <tr className="border-b border-gray-200">
                  <th className="pb-3 pt-2 text-left text-sm font-medium text-gray-500 pl-3">
                    File Name
                  </th>
                  <th className="pb-3 pt-2 text-left text-sm font-medium text-gray-500">
                    Type
                  </th>
                  <th className="pb-3 pt-2 text-left text-sm font-medium text-gray-500">
                    Approved Date
                  </th>
                  <th className="pb-3 pt-2 text-left text-sm font-medium text-gray-500">
                    Size
                  </th>
                  <th className="pb-3 pt-2 text-left text-sm font-medium text-gray-500 pl-10">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 pr-4 pl-3 font-medium">{asset.fileName}</td>
                    <td className="py-4 pr-4">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                          asset.type === "Design"
                            ? "bg-purple-100 text-purple-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {asset.type}
                      </span>
                    </td>
                    <td className="py-4 pr-4">{asset.approvedDate}</td>
                    <td className="py-4 pr-4">{asset.size}</td>
                    <td className="py-4 pl-10">
                      <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                          />
                        </svg>
                        Download
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
