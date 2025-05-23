"use client";

import { useState } from "react";
import {
  ServiceCardOne,
  ServiceCardThree,
  ServiceCardTwo,
} from "./components/ServiceCards";
import { ArrowRight, CircleArrowRight, Image, MoveRight } from "lucide-react";
import SummaryCard from "./components/Summary";
import { Button } from "@/components/ui/button";

export default function ServiceSelection() {
  const [selectedServices, setSelectedServices] = useState<{
    [serviceId: string]: boolean;
  }>({});
  console.log("Service selected", selectedServices);
  const [quantity, setQuantity] = useState("");
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  py-4 max-w-[1500px] mx-auto">
        {/* form */}
        {/* intro */}
        <div className="md:col-span-2 space-y-6 bg-white rounded-md p-4 ">
          <p className="text-[#4A4C56] text-base">
            Affordable creative & marketing services. Pay a fixed, monthly, and
            predictable rate—with no contracts or surprises.
          </p>
          <p className="text-[#4A4C56] italic text-sm">
            <strong>Note:</strong> Trying to sign up for multiple brands? If so,
            complete this order form for each unique brand. You will be charged
            separately for each brand.
          </p>

          <hr className="text-gray-200" />
          {/* form start */}

          <div>
            <h3 className="text-xl font-semibold text-[#1D1F2C] mb-8">
              Which services are you interested in?
            </h3>

            <section className="space-y-8">
              <div className="w-full mx-auto ">
                <h3 className="text-[#1D1D1F] font-semibold mb-4">
                  Social Media Posts
                </h3>
                <ServiceCardOne
                  serviceId="s1"
                  title="Social Media Pos"
                  price="$99.00 - $359.00/month"
                  description="this is description"
                  selected={!!selectedServices["s1"]}
                  quantity={quantity}
                  onSelect={() =>
                    setSelectedServices((prev) => ({
                      ...prev,
                      ["s1"]: !prev["s1"],
                    }))
                  }
                  onQuantityChange={(val) => setQuantity(val)}
                />
              </div>
              <div className="w-full mx-auto ">
                <h3 className="text-[#1D1D1F] font-semibold mb-4 text-lg">
                  Instagram Add-ons
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ServiceCardTwo
                    serviceId="s5"
                    icon={<Image />}
                    title="Social Media Pos"
                    price="$99.00 - $359.00/month"
                    selected={!!selectedServices["s5"]}
                    quantity={quantity}
                    onSelect={() =>
                      setSelectedServices((prev) => ({
                        ...prev,
                        s5: !prev["s5"],
                      }))
                    }
                    onQuantityChange={(val) => setQuantity(val)}
                  />
                  <ServiceCardTwo
                    serviceId="s6"
                    icon={<Image />}
                    title="Social Media Pos"
                    price="$99.00 - $359.00/month"
                    selected={!!selectedServices["s6"]}
                    quantity={quantity}
                    onSelect={() =>
                      setSelectedServices((prev) => ({
                        ...prev,
                        s6: !prev["s6"],
                      }))
                    }
                    onQuantityChange={(val) => setQuantity(val)}
                  />
                </div>
              </div>
              <div className="w-full mx-auto ">
                <h3 className="text-[#1D1D1F] font-semibold mb-4 text-lg">
                  Short-Form Videos
                </h3>
                <ServiceCardOne
                  serviceId="s2"
                  icon={<Image />}
                  title="Short-Form Videos"
                  price="$99.00 - $359.00/month"
                  description="Engaging 20-60 second videos for TikTok, Reels, and Shorts."
                  selected={!!selectedServices["s2"]}
                  quantity={quantity}
                  onSelect={() =>
                    setSelectedServices((prev) => ({
                      ...prev,
                      s2: !prev["s2"],
                    }))
                  }
                  onQuantityChange={(val) => setQuantity(val)}
                />
              </div>
              <div className="w-full mx-auto ">
                <h3 className="text-[#1D1D1F] font-semibold mb-4 text-lg">
                  Short-Form Videos
                </h3>
                <ServiceCardThree
                  serviceId="s3"
                  icon={<Image />}
                  title="Short-Form Videos"
                  price="$99.00 - $359.00/month"
                  description={
                    "Monitor and grow reviews on 60+ platforms with up to 3,000 email and SMS review invites per month, unlimited locations, the ability to respond to reviews using AI, and manage all reviews in one dashboard. Enjoy automated review requests, collect private feedback from unhappy customers, and utilize over IO website display review widgets."
                  }
                  selected={!!selectedServices["s3"]}
                  quantity={quantity}
                  onSelect={() =>
                    setSelectedServices((prev) => ({
                      ...prev,
                      s3: !prev["s3"],
                    }))
                  }
                  onQuantityChange={(val) => setQuantity(val)}
                />
              </div>
            </section>
          </div>
          <Button className="bg-black text-white w-full">
            <p>Next </p>
            <div className="bg-white text-black rounded-full ">
              <ArrowRight className=" rounded-full  " />
            </div>
          </Button>
        </div>

        {/* summary */}
        <div className="md:col-span-1 rounded-md shadow-sm p-4 bg-white ">
          <SummaryCard />
        </div>
      </div>
    </>
  );
}
