import { useState, useEffect } from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { Service } from '@/types/services';
import { Check } from 'lucide-react';

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
  onPlanChange
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
    <div className="bg-[#FAFAFA] rounded-lg p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div 
            className={`w-10 h-10 rounded-lg bg-black flex items-center justify-center cursor-pointer ${selected ? 'bg-black' : 'bg-black/90 hover:bg-black'}`}
            onClick={handleSelect}
          >
            {service.icon}
          </div>
          <div>
            <h3 className="text-base font-medium text-[#1D1F2C]">{service.name}</h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-base text-[#1D1F2C]">
            ${service.startingPrice.toFixed(2)} - ${service.endingPrice.toFixed(2)}/Month
          </div>
          <div 
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all
            ${selected 
              ? 'border-black bg-black text-white' 
              : 'border-gray-300 hover:border-gray-400'}`}
            onClick={handleSelect}
          >
            {selected && <Check size={14} />}
          </div>
        </div>
      </div>
      
      <p className="text-sm text-[#4A4C56] mt-2 mb-4">
        {service.description}
      </p>
      
      <Select 
        value={selectedPlan || ''} 
        onValueChange={handlePlanChange}
        disabled={!selected}
        
      >
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder={service.selectLabel} />
        </SelectTrigger>
        <SelectContent className='z-20 bg-gray-200'>
          {service.plans.map((plan) => (
            <SelectItem className='hover:bg-red-200' key={plan.value} value={plan.value}>
              {plan.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ServiceOption;