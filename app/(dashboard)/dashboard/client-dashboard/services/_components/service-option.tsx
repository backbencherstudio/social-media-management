import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Service } from "@/types/services";
import { Check } from "lucide-react";

interface ServiceOptionProps {
  service: Service;
  isSelected: boolean;
  selectedPlan: string | null;
  onSelect: (service: Service, isSelected: boolean, plan?: string) => void;
  onPlanChange: (serviceId: string, plan: string) => void;
}

const ServiceOption = ({
  service,
  isSelected,
  selectedPlan,
  onSelect,
  onPlanChange,
}: ServiceOptionProps) => {
  const [selected, setSelected] = useState(isSelected);

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  const handleSelect = () => {
    const newSelected = !selected;
    setSelected(newSelected);
    onSelect(service, newSelected, selectedPlan || undefined);
  };

  const handlePlanChange = (value: string) => {
    onPlanChange(service.id, value);

    // If selecting a plan for a service that's not yet selected,
    // automatically select the service too
    if (!selected) {
      setSelected(true);
      onSelect(service, true, value);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold capitalize leading-[126%] text-[#1D1D1F] mb-[18px]">
          {service.name}
        </h2>
      </div>
      <div className="bg-[#F7F7F9] rounded-lg p-4 border-[#E9E9EA] border-[.5px] ">
        <div className="flex items-start justify-between border-b border-[#E9E9EA] pb-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-lg bg-black flex items-center justify-center cursor-pointer ${
                selected ? "bg-black" : "bg-black/90 hover:bg-black"
              }`}
              onClick={handleSelect}
            >
              {service.icon}
            </div>
            <div>
              <h3 className="text-base font-semibold capitalize leading-[126%] text-[#1D1D1F]">
                {service.name}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-base font-semibold text-[#1D1D1F] leading-[126%] capitalize">
              ${service.startingPrice.toFixed(2)} - $
              {service.endingPrice.toFixed(2)}/Month
            </h3>
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all
            ${
              selected
                ? "border-black bg-black text-white"
                : "border-gray-300 hover:border-gray-400"
            }`}
              onClick={handleSelect}
            >
              {selected && <Check size={14} />}
            </div>
          </div>
        </div>

        <p className="text-sm text-[#4A4C56] leading-[150%] tracking-[.14px] my-6">
          {service.description}
        </p>

        <Select
          value={selectedPlan || ""}
          onValueChange={handlePlanChange}
          disabled={!selected}
        >
          <SelectTrigger
            className="w-full bg-white cursor-pointer leading-[142%] py-6 text-sm text-black 
             border border-[#DFE1E7] rounded-[8px]  focus-visible:ring-0  shadow-none"
          >
            <SelectValue placeholder={service.selectLabel} />
          </SelectTrigger>
          <SelectContent className=" bg-white border-0 ">
            {service.plans.map((plan) => (
              <SelectItem
                className="hover:bg-blue-600 hover:text-white cursor-pointer text-base "
                key={plan.label}
                value={plan.label}
              >
                {plan.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ServiceOption;
