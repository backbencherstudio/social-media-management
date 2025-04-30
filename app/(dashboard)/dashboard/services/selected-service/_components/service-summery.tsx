"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ServiceSelection } from '@/types/services';
import { PhoneCall } from 'lucide-react';

interface ServiceSummaryProps {
  selectedServices: ServiceSelection[];
  total: number;
  promoCode: string;
  onPromoCodeChange: (code: string) => void;
}

const ServiceSummary = ({ 
  selectedServices, 
  total, 
  promoCode, 
  onPromoCodeChange 
}: ServiceSummaryProps) => {
  const [code, setCode] = useState(promoCode);
  
  const handleApplyPromo = () => {
    onPromoCodeChange(code);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-[#1D1F2C] mb-4">Summary</h3>
      
      <div className="space-y-4 mb-6">
        {selectedServices.length > 0 ? (
          selectedServices.map((item) => (
            <div key={item.service.id} className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-[#1D1F2C]">{item.service.name}</p>
                {item.plan && (
                  <p className="text-xs text-[#4A4C56]">
                    {item.service.plans.find(p => p.value === item.plan)?.label || item.plan}
                  </p>
                )}
              </div>
              <p className="text-sm font-medium text-[#1D1F2C]">${item.price.toFixed(2)}/mo</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-[#4A4C56] italic">No services selected</p>
        )}
      </div>
      
      <div className="flex gap-2 mb-6">
        <Input 
          placeholder="Enter promo code" 
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1"
        />
        <Button 
          onClick={handleApplyPromo}
          className="bg-black hover:bg-black/90 text-white"
        >
          Apply
        </Button>
      </div>
      
      <div className="border-t border-[#E9E9EA] pt-4 mb-6">
        <div className="flex justify-between items-center mb-1">
          <h4 className="font-semibold text-[#1D1F2C]">Total</h4>
          <p className="font-semibold text-[#1D1F2C]">${total.toFixed(2)}</p>
        </div>
        <p className="text-xs text-[#4A4C56]">USD</p>
      </div>
      
      {total >= 149 && (
        <div className="flex gap-3 p-3 bg-gray-50 rounded-lg items-center">
          <PhoneCall size={20} className="text-[#1D1F2C]" />
          <p className="text-sm text-[#1D1F2C]">
            Orders over $149+ qualify for monthly content review calls
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceSummary;