import React from "react";
import {
  Check,
  Calendar,
  BarChart,
  Pencil,
  Clock,
  FileText,
} from "lucide-react";

export default function TimelineModal({
  content,
  setIsModalOpen,
}: {
  content: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  console.log("Modal content:", content);
  return (
    <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl relative h-[92vh] mx-auto mt-4 overflow-hidden">
      <div className="p-8 h-full overflow-y-auto">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6">{content}</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Service Overview</h3>
          <p className="text-sm text-gray-700">
            Custom-branded social media content created and delivered monthly.
            We handle everything from visuals and design to captions and
            hashtags, ensuring your brand maintains a consistent and
            professional presence across your chosen platforms.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Core Deliverables</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>
              Custom-designed social media posts aligned with your brand
              guidelines
            </li>
            <li>Engaging captions optimized for each platform</li>
            <li>Strategic hashtag selection for maximum reach</li>
            <li>Content calendar for easy review and approval</li>
            <li>Scheduled posting to your selected platforms (optional)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Add-On Options</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Instagram Stories</li>
            <li>Carousel posts (multi-image)</li>
            <li>
              Additional social channels (+$10/month each):
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Pinterest</li>
                <li>LinkedIn</li>
                <li>Google My Business</li>
              </ul>
            </li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            Timeline & Time Investment
          </h2>

          <div className="mb-6">
            <h3 className="font-medium mb-1">1. Initial Setup</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Onboarding questionnaire: 15–30 minutes</li>
              <li>Social media account connection: 2–3 minutes per platform</li>
              <li>
                Optional onboarding call: 20 minutes (for orders over
                $149/month)
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-1">
              2. First Content Delivery (Within 10 Business Days)
            </h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Content review: 5–10 minutes</li>
              <li>Revision feedback: 5–10 minutes per round</li>
              <li>
                Monthly content review call: 20 minutes (optional, for orders
                over $149/month)
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-1">3. Revision Process</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>First month: Up to 3 rounds of revisions</li>
              <li>Ongoing months: 1 round of revisions</li>
              <li>Revision turnaround: 2–4 business days</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-1">4. Content Scheduling</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>
                Upon approval, all content is scheduled for the upcoming month
              </li>
              <li>Posted automatically to your selected platforms</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            Communication & Support
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Dedicated account manager as your main point of contact</li>
            <li>Business hours: Monday–Friday, 7 AM to 3 PM EST</li>
            <li>Same-day responses during hours</li>
            <li>
              Technical support available:
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>Comprehensive documentation and guides</li>
                <li>
                  20-minute tech support calls for platform connection issues
                </li>
                <li>Account manager assistance via chat</li>
              </ul>
            </li>
          </ul>
        </section>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              What To Expect
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 text-gray-500 flex-shrink-0">
                  <FileText size={20} />
                </div>
                <p className="text-gray-700">
                  First month focuses on establishing your brand voice and
                  content direction
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 text-gray-500 flex-shrink-0">
                  <Clock size={20} />
                </div>
                <p className="text-gray-700">
                  Monthly content delivered 10 days before the next posting
                  period
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 text-gray-500 flex-shrink-0">
                  <Pencil size={20} />
                </div>
                <p className="text-gray-700">
                  Revisions should align with original scope and brand
                  guidelines
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 text-gray-500 flex-shrink-0">
                  <Calendar size={20} />
                </div>
                <p className="text-gray-700">
                  Content calendar provides easy overview of upcoming posts
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Quality Assurance
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 text-gray-500 flex-shrink-0">
                  <Check size={20} />
                </div>
                <p className="text-gray-700">
                  All content follows your brand guidelines
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 text-gray-500 flex-shrink-0">
                  <Check size={20} />
                </div>
                <p className="text-gray-700">
                  Professional design and copywriting
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 text-gray-500 flex-shrink-0">
                  <Check size={20} />
                </div>
                <p className="text-gray-700">Platform-specific optimization</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 text-gray-500 flex-shrink-0">
                  <Clock size={20} />
                </div>
                <p className="text-gray-700">Consistent posting schedule</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 mt-0.5 text-gray-500 flex-shrink-0">
                  <BarChart size={20} />
                </div>
                <p className="text-gray-700">Regular performance monitoring</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
