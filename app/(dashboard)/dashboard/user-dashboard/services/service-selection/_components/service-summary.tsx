"use client";

import { payment } from "@/src/redux/slice/payment";
import { PhoneCall } from "lucide-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface ServiceSummaryProps {
  selectedServices: any;
  total: number;
  promoCode: string;
  onPromoCodeChange: (code: string) => void;
}

const ServiceSummary = ({ selectedServices, total }: ServiceSummaryProps) => {
  const dispatch = useDispatch();

  // console.log(selectedServices);
  // const [selectedService, setSelectedService] = useState(selectedServices);


  useEffect(() => {
    if (selectedServices.length > 0) {
      const data = selectedServices.map((service: any) => ({
        name: service.name,
        price: service.price,
        serviceId: service.serviceId,
        serviceTierId: service.serviceTierId,
      }));
      dispatch(payment(data));
    }
  });

  // useEffect(() => {
    // const data = selectedServices.map((service: any) => ({
    //   name: service.name,
    //   price: service.price,
    //   serviceId: service.serviceId,
    //   serviceTierId: service.serviceTierId,
    // }));
    // dispatch(payment({name: 'nametaldsllfs'}));
  // }, []);

  return (
    <div>
      <h3 className="text-xl font-semibold text-[#1D1F2C] mb-4">Summary</h3>

      <div className="space-y-4 mb-6">
        {selectedServices?.length > 0 ? (
          selectedServices?.map((item: any) => (
            <div
              key={item?.serviceId}
              className="flex justify-between items-start"
            >
              <div>
                <p className="text-sm font-medium text-[#1D1F2C]">
                  {item?.name}
                </p>
                {item?.price && (
                  <p className="text-[#4A4C56] text-sm">Qty {item.post}</p>
                  // <p className="text-xs text-[#4A4C56]">
                  //   {item?.service?.plans?.find((p) => p.label === item.plan)
                  //     ?.label || item.plan}
                  // </p>
                )}
              </div>
              {item?.price && (
                <p className="text-sm font-medium text-[#1D1F2C]">
                  ${item?.price}/mo
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-sm text-[#4A4C56] italic">No services selected</p>
        )}
      </div>

      {/* <div className="flex gap-2 mb-6">
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
      </div> */}

      <div className="border-t border-[#E9E9EA] pt-4 mb-6">
        <div className="flex justify-between items-center mb-1">
          <h4 className="font-semibold text-[#1D1F2C]">Total</h4>
          <p className="font-semibold text-[#1D1F2C]">${total}</p>
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
