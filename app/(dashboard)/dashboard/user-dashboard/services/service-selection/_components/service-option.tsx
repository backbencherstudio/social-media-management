"use client";

import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";
import { useGetSingleServiceQuery } from "@/src/redux/features/admin/services";

const ServiceOption = ({ service, isSelected, onSelect }: any) => {
  const [selected, setSelected] = useState(isSelected);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const { data } = useGetSingleServiceQuery(serviceId as string);
  // console.log(data?.service_tiers);

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  const handleSelect = () => {
    const newSelected = !selected;
    setServiceId(service.id);
    setSelected(newSelected);
    // onSelect(service, newSelected, selectedPlan || undefined);
  };

  const handlePlanChange = (planId: string) => {
    const selectedPlan = data?.service_tiers?.find(
      (plan: any) => plan.id === planId
    );
    if (selectedPlan) {
      if (selected) {
        setSelected(true);
        onSelect(
          service,
          true,
          selectedPlan?.max_post,
          selectedPlan?.price,
          planId
        );
      }
    }
  };

  // Handle multiple channel selections
  const handleChannelChange = (channelId: string) => {
    setSelectedChannels((prev) =>
      prev.includes(channelId)
        ? prev.filter((id) => id !== channelId)
        : [...prev, channelId]
    );
  };

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold capitalize leading-[126%] text-[#1D1D1F] mb-[18px]">
          {service?.name}
        </h2>
      </div>
      <div className="bg-[#F7F7F9] rounded-lg p-4 border-[#E9E9EA] border-[.5px] ">
        <div className="flex items-start justify-between border-b border-[#E9E9EA] pb-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-lg bg-black flex items-center justify-center cursor-pointer`}
              // ${
              //   selected ? "bg-black" : "bg-black/90 hover:bg-black"
              // }
              // onClick={handleSelect}
            >
              {service?.icon}
            </div>
            <div>
              <h3 className="text-base font-semibold capitalize leading-[126%] text-[#1D1D1F]">
                {service?.name}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* <h3 className="text-base font-semibold text-[#1D1D1F] leading-[126%] capitalize">
              ${service.startingPrice.toFixed(2)} - $
              {service.endingPrice.toFixed(2)}/Month
            </h3> */}
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all
                ${
                  selected
                    ? "border-black bg-black text-white"
                    : "border-gray-300 hover:border-gray-400"
                }
            `}
              onClick={handleSelect}
            >
              {selected && <Check size={14} />}
            </div>
          </div>
        </div>

        <p className="text-sm text-[#4A4C56] leading-[150%] tracking-[.14px] my-6">
          {service?.description}
        </p>

        <Select onValueChange={handlePlanChange} disabled={!selected}>
          <SelectTrigger
            className="w-full bg-white cursor-pointer leading-[142%] py-6 text-sm text-black 
             border border-[#DFE1E7] rounded-[8px]  focus-visible:ring-0  shadow-none"
          >
            <SelectValue placeholder={service.selectLabel} />
          </SelectTrigger>
          <SelectContent className=" bg-white border-0 ">
            {data?.service_tiers?.map((plan: any) => (
              <SelectItem
                className="hover:bg-blue-600 hover:text-white cursor-pointer text-base "
                key={plan.id}
                value={plan.id} // Use plan.id as value
              >
                {plan.max_post} Post ${plan.price}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Select One Free Social Media Channel */}
      {service?.channels?.length > 0 && (
        <div className="mt-4">
          <label className="block font-medium mb-3">
            Select One Free Social Media Channel
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {service?.channels?.map((channel: any) => (
              <label
                key={channel.id}
                className={`flex flex-col items-start border rounded-xl p-4 cursor-pointer transition
                    ${
                      selectedChannels.includes(channel.id)
                        ? "border-black shadow"
                        : "border-gray-200"
                    }
                    hover:border-black`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {channel.icon}
                  <span className="font-medium">{channel.name}</span>
                  <input
                    type="checkbox"
                    name="channel"
                    value={channel.id}
                    checked={selectedChannels.includes(channel.id)}
                    onChange={() => handleChannelChange(channel.id)}
                    className="ml-auto accent-black"
                  />
                </div>
                <div className="text-gray-700 font-semibold">
                  {channel.price}
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceOption;
