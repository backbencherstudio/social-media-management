"use client";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";

export default function ResellerDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  // Fetch reseller details using id, or get from fakeResellersList
  // Example: const reseller = fakeResellersList.find(r => r.id === Number(id));
  const applicant = {
    name: "Cody Fisher",
    email: "deanna.curtis@example.com",
    location: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    number: "219.555.0114",
    position: "Digital Marketer",
    experience: "3",
    portfolio: "/@portfolio.com",
    skills: "Social media management, SEO Backlinks",
  };
  return (
    <div className="p-6 md:p-10 space-y-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 flex items-center gap-1 font-medium">
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
      </p>
      <div className="space-y-10 bg-white rounded-xl shadow-sm p-6 ">
        {/* Applicant Details Section */}
        <section className="">
          <div className="flex items-center justify-between mb-2 md:mb-6 mb-4">
            <h1 className="text-xl md:text-2xl font-semibold ">
              Applicant Details
            </h1>

            <div className="flex items-center  gap-2">
              <Button className="bg-red-100 text-red-400" variant="destructive">
                Reject
              </Button>
              <Button className="bg-green-600 text-white" variant="destructive">
                Accept
              </Button>
            </div>
          </div>
          <div className="bg-[#F9F9FB] p-6 md:p-10 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm text-gray-800 shadow">
            <Detail label="Name" value={applicant.name} />
            <Detail label="Mail" value={applicant.email} />
            <Detail label="Location" value={applicant.location} />
            <Detail label="Number" value={applicant.number} />
            <Detail label="Position Applying For" value={applicant.position} />
            <Detail label="Years of Experience" value={applicant.experience} />
            <Detail
              label="Portfolio/LinkedIn (Optional)"
              value={applicant.portfolio}
            />
            <Detail label="Relevant Skills" value={applicant.skills} />
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
            <p>
              I am excited to apply for the Social Media Manager position at
              [Company Name]. With a passion for digital engagement and a track
              record of creating impactful social media strategies, I am
              confident in my ability to enhance your brand’s online presence
              and drive meaningful audience interactions.
            </p>
            <p>
              In my previous role at [Previous Company], I successfully managed
              multi-platform social media campaigns that increased brand
              engagement by [X]%. My expertise in content creation, community
              management, and data-driven decision-making has allowed me to
              develop and execute campaigns that align with business goals. I am
              proficient in using tools like [mention relevant tools, e.g.,
              Hootsuite, Buffer, or Meta Business Suite] to analyze performance
              metrics and optimize content strategies.
            </p>
            <p>
              What excites me about [Company Name] is your commitment to
              [mention a value or initiative of the company that resonates with
              you]. I am eager to bring my creativity and analytical skills to
              your team to further amplify your brand’s digital footprint.
            </p>
            <p>
              I would love the opportunity to discuss how my experience and
              skills can contribute to your social media success. Please feel
              free to contact me at your convenience to schedule a conversation.
            </p>
            <p>
              Thank you for your time and consideration. I look forward to
              hearing from you.
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
