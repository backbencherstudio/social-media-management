"use client";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import {
  useAcceptResellerMutation,
  useGetOneApplicationQuery,
  useRejectResellerMutation,
} from "@/src/redux/features/admin/reseller/resellerApplicationApi";
import { toast } from "sonner";

const fakeApplicant = {
  applicationId: "cmbbtwh0m0002ret8w7jakeb6",
  created_at: "2025-06-01T10:12:45.123Z",
  user_id: "cmb1qwp4z0001ree0q2ikxruz",
  full_name: "Alex Fake",
  user_email: "alex.johnson@gmail.com",
  phone_number: 9876543210,
  location: "Los Angeles, USA",
  position: "Software Engineer",
  experience: 5,
  cover_letter:
    "As a software engineer, I specialize in building scalable and efficient systems while leading the development of innovative applications.",
  portfolio: "http://alexjohnsonportfolio.com",
  skills: ["JavaScript", "React", "Node.js", "AWS"],
  status: "pending",
};

export default function ResellerDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  console.log("id", id);

  // Fetch reseller details using id, or get from fakeResellersList
  // Example: const reseller = fakeResellersList.find(r => r.id === Number(id));

  const { data, isLoading, isError } = useGetOneApplicationQuery(id as string);
  console.log("Data", data);
  const applicant = data?.data[0] || {};

  const [
    acceptReseller,
    { isLoading: isAcceptLoading, isError: isAcceptError },
  ] = useAcceptResellerMutation();
  const [
    rejectReseller,
    { isLoading: isRejectLoading, isError: isRejectError },
  ] = useRejectResellerMutation();

  const handleAcceptReseller = async () => {
    try {
      await acceptReseller({ userId: id as string });
      toast.success("Reseller accepted successfully");
      router.push("/dashboard/reseller");
    } catch (error) {
      console.log(error);
    }
  };

  const handleRejectReseller = async () => {
    try {
      await rejectReseller({ userId: id as string });
      toast.success("Reseller rejected successfully");
      router.push("/dashboard/reseller");
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <div className="p-6 md:p-10 space-y-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 flex items-center gap-1 font-medium">
        <button onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
              fill="#1D1F2C"
            />
          </svg>
        </button>
        <p>
          <span className="text-gray-500">Reseller / </span>
          <span className="text-gray-900 font-medium">
            Applicant Update / {id}
          </span>
        </p>
      </div>

      <div>
        <div className="space-y-10 bg-white rounded-xl shadow-sm p-6 ">
          {/* Applicant Details Section */}
          <section className="">
            <div className="flex items-center justify-between mb-2 md:mb-6 mb-4">
              <h1 className="text-xl md:text-2xl font-semibold ">
                Applicant Details
              </h1>

              {applicant?.status === "pending" ? (
                <div className="flex items-center  gap-2">
                  <Button
                    className="bg-red-100 text-red-400"
                    variant="destructive"
                    onClick={handleRejectReseller}
                    disabled={isRejectLoading}
                  >
                    {isRejectLoading ? "Rejecting..." : "Reject"}
                  </Button>
                  <Button
                    className="bg-green-600 text-white"
                    variant="destructive"
                    onClick={handleAcceptReseller}
                    disabled={isAcceptLoading}
                  >
                    {isAcceptLoading ? "Accepting..." : "Accept"}
                  </Button>
                </div>
              ) : (
                <div className="flex items-center  gap-2">
                  <Button className="bg-gray-100 text-gray-700 capitalize cursor-not-allowed font-semibold">
                    {applicant?.status}
                  </Button>
                </div>
              )}
            </div>
            <div className="bg-[#F9F9FB] p-6 md:p-10 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm text-gray-800 shadow">
              <Detail label="Name" value={applicant?.full_name} />
              <Detail label="Mail" value={applicant?.user_email} />
              <Detail label="Location" value={applicant?.location} />
              <Detail
                label="Number"
                value={applicant?.phone_number?.toString()}
              />
              <Detail
                label="Position Applying For"
                value={applicant?.position}
              />
              <Detail
                label="Years of Experience"
                value={applicant?.experience.toString()}
              />
              <Detail
                label="Portfolio/LinkedIn (Optional)"
                value={applicant?.portfolio}
              />
              <Detail
                label="Relevant Skills"
                value={applicant?.skills.join(", ")}
              />
            </div>
          </section>

          {/* Cover Letter Section */}
          <section className=" rounded-xl p-6 md:p-10">
            <h2 className="text-xl font-semibold mb-6 border-b-2 border-gray-200  pb-2">
              Cover Letter
            </h2>
            <div className="text-sm text-gray-700 space-y-5 leading-relaxed">
              <p>
                <strong>Subject:</strong> Application for Social Media Manager
                Position
              </p>
              <p>Dear Hiring Manager’s,</p>
              <p>{applicant?.cover_letter}</p>
              <p>
                In my previous role at [Previous Company], I successfully
                managed multi-platform social media campaigns that increased
                brand engagement by [X]%. My expertise in content creation,
                community management, and data-driven decision-making has
                allowed me to develop and execute campaigns that align with
                business goals. I am proficient in using tools like [mention
                relevant tools, e.g., Hootsuite, Buffer, or Meta Business Suite]
                to analyze performance metrics and optimize content strategies.
              </p>

              <p>
                Best regards,
                <br />
                Md. Mansur
              </p>
            </div>

            <Button
              onClick={() => router.back()}
              className="mt-8 bg-[#F5F5F7] text-[#4A4C56] cursor-pointer"
              variant="secondary"
            >
              Back
            </Button>
          </section>
        </div>
      </div>
      {/* back button */}
    </div>
  );
}

// Reusable detail line
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col space-y-1">
      <span className="text-[13px] text-gray-500">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
}
