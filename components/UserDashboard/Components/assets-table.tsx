"use client";

import { useGetAssetsQuery } from "@/src/redux/features/user/assets/userAssetsApi";

interface AssetsTableProps {
  emptyMessage?: string;
  title?: string;
}

export default function AssetsTable({
  emptyMessage = "No assets available.",
  title = "Assets",
}: AssetsTableProps) {
  // Replace with real data (example data provided)
  const { data } = useGetAssetsQuery(undefined);

  const assets = data?.data || [];
  // console.log(assets)

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-4 p-6 pb-2">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <div className="p-6 pt-2">
        {assets?.length === 0 ? (
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
                    Description
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
                {assets?.map((asset: any, index: number) => (
                  <tr
                    key={asset.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 pr-4 pl-3 font-medium">{asset.name}</td>
                    <td className="py-4 pr-4">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium capitalize ${
                          asset.type === "image"
                            ? "bg-purple-100 text-purple-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {asset.type}
                      </span>
                    </td>
                    <td className="py-4 pr-4">{asset.design_file?.content}</td>
                    <td className="py-4 pr-4">
                      {asset.size
                        ? `${(asset.size / 1024).toFixed(2)} MB`
                        : "-"}
                    </td>
                    <td className="py-4 pl-10">
                      <a href={asset.file_url}>
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
                      </a>
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
