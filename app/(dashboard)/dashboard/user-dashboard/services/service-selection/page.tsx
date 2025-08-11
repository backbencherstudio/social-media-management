"use client";

import { useState } from "react";
import ServiceOption from "./_components/service-option";
import ServiceSummary from "./_components/service-summary";
import { useGetAllServicesQuery } from "@/src/redux/features/admin/services";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ServiceSelectionPage = () => {
  const { data } = useGetAllServicesQuery();
  const [selectedServices, setSelectedServices] = useState<any>([]);
  const [promoCode, setPromoCode] = useState<string>("");

  // console.log(selectedServices)

  const handleServiceSelect = (
    service: any,
    isSelected: boolean,
    post?: number,
    price?: number,
    serviceTierId?: string
  ) => {
    // console.log(service?.name, isSelected, post, price, serviceTierId);

    if (isSelected) {
      // Add service if not already in the list
      const exists = selectedServices.some(
        (item: any) => item.service.id === service.id
      );

      if (!exists) {
        setSelectedServices([
          ...selectedServices,
          {
            service,
            name: service?.name,
            serviceId: service?.id,
            post: post || null,
            price: price,
            serviceTierId: serviceTierId,
          },
        ]);
      } else {
        setSelectedServices(
          selectedServices.map((item: any) =>
            item.service.id === service.id
              ? {
                  ...item,
                  post: post || item.post,
                  price: price,
                }
              : item
          )
        );
      }
    } else {
      // Remove service
      setSelectedServices(
        selectedServices.filter((item: any) => item.service.id !== service.id)
      );
    }
  };

  const calculateTotal = (): number => {
    return selectedServices.reduce(
      (total: any, item: any) => total + item.price,
      0
    ); 
  };

  const handlePromoCodeChange = (code: string) => {
    setPromoCode(code);
    // In a real app, you would validate the code and apply discounts
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-[80%] w-full bg-white rounded-[12px] lg:p-6 md:p-4 p-3">
        <div className="border-b pb-6 border-[#E9E9EA]">
          <p className="text-[#4A4C56] text-base leading-[150%] tracking-[.16px]">
            Affordable creative & marketing services, pay a fixed, monthly, and
            predictable rate, with no contracts or surprises.
          </p>
          <p className="text-[#4A4C56] text-base leading-[150%] tracking-[.16px] italic mt-5">
            Note: Trying to sign up for multiple brands? If so, complete this
            order form for each unique brand. You will be charged separately for
            each brand.
          </p>
        </div>
        <div>
          <h2 className="text-[#1D1F2C] text-2xl font-semibold leading-[140%] md:mt-6 mt-4">
            Which services are you interested in?
          </h2>
          <div className="space-y-[32px] mt-6 ">
            {data?.map((service) => (
              <ServiceOption
                key={service.id}
                service={service}
                onSelect={handleServiceSelect}
                isSelected={selectedServices.some(
                  (item: any) => item.service.id === service.id
                )}
                selectedPlan={
                  selectedServices.find(
                    (item: any) => item.service.id === service.id
                  )?.plan || null
                }
              />
            ))}
          </div>
          <div
            className={`${
              !selectedServices || selectedServices.length === 0
                ? "opacity-50 pointer-events-none"
                : "block"
            }`}
          >
            <Link href={"/dashboard/user-dashboard/payment-method"}>
              <Button
                className="bg-black text-white mt-5 py-5 w-full cursor-pointer"
                disabled={!selectedServices || selectedServices.length === 0}
              >
                Payment
              </Button>
            </Link>
            {(!selectedServices || selectedServices.length === 0) && (
              <p className="text-sm text-gray-500 mt-2">
                Please select at least one service to proceed to payment.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="lg:w-[20%] w-full lg:sticky  h-fit bg-white rounded-[12px] lg:p-6 md:p-4 p-3  ">
        <ServiceSummary
          selectedServices={selectedServices}
          total={calculateTotal()}
          promoCode={promoCode}
          onPromoCodeChange={handlePromoCodeChange}
        />
      </div>
    </div>
  );
};

export default ServiceSelectionPage;
