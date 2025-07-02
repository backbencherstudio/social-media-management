"use client";

interface ContentQueueCardProps {
  title: string;
  scheduledFor: string;
  status: number;
  platforms: string[];
  postType: string;
  content: string;
  imageUrl: string;
  onApprove: () => void;
  onReject: () => void;
  onViewDetails: () => void;
}

export function ContentQueueCard({
  title,
  scheduledFor,
  status,
  platforms,
  postType,
  content,
  imageUrl,
  onApprove,
  onReject,
  onViewDetails,
}: ContentQueueCardProps) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white shadow-sm w-full max-w-full min-w-[380px]">
      {/* Card Header with Badges */}
      <div className="flex items-center justify-between gap-2 p-4">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          {postType}
        </span>

        {getStatus(status)}
        {/* <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
          {getStatus(status)}
        </span> */}
      </div>

      {/* Card Title */}
      <h3 className="px-4 text-lg font-medium text-gray-900">{title}</h3>

      {/* Card Details */}
      <div className="mt-2 space-y-2 px-4">
        <div className="flex flex-col text-sm">
          <span className="font-medium text-[#777980]">Scheduled For:</span>
          <span>{scheduledFor}</span>
        </div>

        <div className="flex flex-col text-sm">
          <span className="font-medium text-[#777980]">Platform(s):</span>
          <span>{platforms.join(", ")}</span>
        </div>

        <div className="flex flex-col text-sm text-gray-600">
          <span className="font-medium text-[#777980]">Content:</span>
          <span className="text-[#1D1F2C]">{content}</span>
        </div>
      </div>

      {/* Image Preview */}
      <div className="mx-4 mt-4 flex h-40 items-center justify-center rounded-md bg-gray-100">
        <img
          src={imageUrl}
          alt="Post Image"
          className="h-full object-contain"
        />
      </div>

      {/* Card Actions */}
      <div className="mt-auto flex items-center justify-between p-4">
        <button
          onClick={onViewDetails}
          className="text-sm font-medium text-blue-600 hover:text-blue-800 underline underline-offset-[3px]"
        >
          View Details
        </button>
        <div className={`flex gap-2 ${status !== 0 && "hidden"}`}>
          <button
            onClick={onApprove}
            className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700 hover:bg-green-100"
          >
            {AcceptIcons}
            Approve
          </button>
          <button
            onClick={onReject}
            className="flex items-center gap-1 rounded-full bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-100"
          >
            {RejectIcons}
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

// get status
const statusMap: any = {
  0: { label: "Pending", color: "bg-amber-100", textColor: "text-amber-700" },
  1: { label: "Accepted", color: "bg-green-100", textColor: "text-green-700" },
  2: { label: "Rejected", color: "bg-red-100", textColor: "text-red-700" },
};

function getStatus(status: number) {
  const statusInfo = statusMap[status];
  if (statusInfo) {
    return (
      <span
        className={`rounded-full ${statusInfo.color} px-3 py-1 text-xs font-medium ${statusInfo.textColor}`}
      >
        {statusInfo.label}
      </span>
    );
  }
}

// icons

const AcceptIcons = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
  >
    <path
      d="M4.25 9.75L6.89482 11.8659C7.5153 12.3622 8.41524 12.2886 8.9468 11.698L14.75 5.25"
      stroke="#119B70"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RejectIcons = (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
    >
      <path
        d="M12.6823 5.8184L6.31836 12.1824M12.6823 12.1823L6.31836 5.81836"
        stroke="#DC2C2C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </>
);
