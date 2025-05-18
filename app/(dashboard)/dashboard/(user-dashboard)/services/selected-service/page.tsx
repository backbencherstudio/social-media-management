"use client";

import { useState } from "react";

import { Service, ServiceSelection } from "@/types/services";
import { serviceOptions } from "./_components/data";
import ServiceSummary from "./_components/service-summery";
import ServiceOption from "./_components/service-option";

const ServiceSelectionPage = () => {
  const [selectedServices, setSelectedServices] = useState<ServiceSelection[]>(
    []
  );
  const [promoCode, setPromoCode] = useState<string>("");

  const handleServiceSelect = (
    service: Service,
    isSelected: boolean,
    plan?: string
  ) => {
    if (isSelected) {
      // Add service if not already in the list
      const exists = selectedServices.some(
        (item) => item.service.id === service.id
      );

      if (!exists) {
        setSelectedServices([
          ...selectedServices,
          {
            service,
            plan: plan || null,
            price: service.startingPrice,
          },
        ]);
      } else {
        setSelectedServices(
          selectedServices.map((item) =>
            item.service.id === service.id
              ? {
                  ...item,
                  plan: plan || item.plan,
                  price: plan ? getPlanPrice(service, plan) : item.price,
                }
              : item
          )
        );
      }
    } else {
      // Remove service
      setSelectedServices(
        selectedServices.filter((item) => item.service.id !== service.id)
      );
    }
  };

  const handlePlanChange = (serviceId: string, planLabel: string) => {
    setSelectedServices(
      selectedServices.map((item) =>
        item.service.id === serviceId
          ? {
              ...item,
              plan: planLabel,
              price: getPlanPrice(item.service, planLabel),
            }
          : item
      )
    );
  };

  const getPlanPrice = (service: Service, planLabel: string): number => {
    const plan = service.plans.find((p) => p.label === planLabel);
    return plan ? plan.basePrice : service.startingPrice;
  };

  const calculateTotal = (): number => {
    return selectedServices.reduce((total, item) => total + item.price, 0);
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
            {serviceOptions.map((service) => (
              <ServiceOption
                key={service.id}
                service={service}
                onSelect={handleServiceSelect}
                onPlanChange={handlePlanChange}
                isSelected={selectedServices.some(
                  (item) => item.service.id === service.id
                )}
                selectedPlan={
                  selectedServices.find(
                    (item) => item.service.id === service.id
                  )?.plan || null
                }
              />
            ))}
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
