import { CircleCheck } from "lucide-react";
import React from "react";

type Props = {
  serviceId: string,
  title: string;
  price: string;
  description?: string;
  selected: boolean;
  quantity?: string;
  onSelect: () => void;
  onQuantityChange: (val: string) => void;
  icon?: React.ReactNode;
  onActionButtonClick?: () => void;
};

// first card
export function ServiceCardOne({
  icon,
  title,
  price,
  description,
  selected,
  quantity,
  onSelect,
  onQuantityChange,
}: Props) {
  return (
    <div
      onClick={onSelect}
      className={`w-full rounded-xl border-2 p-4 cursor-pointer transition space-y-3 ${
        selected ? "border-gray-500/80 shadow" : "border-gray-50"
      } bg-[#f9f9fb]`}
    >
      <div className="flex justify-between items-start border-b pb-3 border-gray-200/80">
        <div className="flex items-center gap-3 ">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white ">
            {/* Replace with real icon if needed */}
            {icon}
          </div>
          <div>
            <h3 className="font-semibold">{title}</h3>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <h3 className="font-semibold text-[#1D1F2C]">{price}</h3>
          <CircleCheck
            className={`w-5 h-5 rounded-full ${
              selected ? "text-white bg-black" : "text-gray-400 "
            }`}
          />
        </div>
      </div>

      <p className="text-sm text-gray-600">{description}</p>

      {
        <select
          value={quantity}
          onChange={(e) => onQuantityChange(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="mt-2 w-full border rounded-md p-2 text-sm border-gray-200 bg-white"
        >
          <option value="">Post quantity</option>
          {["4", "8", "12", "16"].map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
      }
    </div>
  );
}

// Second card
export function ServiceCardTwo({
  icon,
  title,
  price,
  selected,
  quantity,
  onSelect,
  onQuantityChange,
}: Props) {
  return (
    <div
      onClick={onSelect}
      className={`w-full rounded-xl border-2 p-4 cursor-pointer transition space-y-3 ${
        selected ? "border-gray-500/80 shadow" : "border-gray-50"
      } bg-[#f9f9fb]`}
    >
      <div className="flex justify-between items-start border-b pb-3 border-gray-200/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white ">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold">{title}</h3>
          </div>
        </div>

        <CircleCheck
          className={`w-5 h-5 rounded-full ${
            selected ? "text-white bg-black" : "text-gray-400 "
          }`}
        />
      </div>

      <h3 className="font-semibold text-[#1D1F2C]">{price}</h3>

      {
        <select
          value={quantity}
          onChange={(e) => onQuantityChange(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="mt-2 w-full border rounded-md p-2 text-sm"
        >
          <option value="">Post quantity</option>
          {["4", "8", "12", "16"].map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
      }
    </div>
  );
}

// third card
export function ServiceCardThree({
  icon,
  title,
  price,
  onSelect,
  selected,
  description,
  onActionButtonClick,
}: Props) {
  return (
    <div
      onClick={onSelect}
      className={`w-full rounded-xl border-2 p-4 cursor-pointer transition space-y-3 ${
        selected ? "border-gray-500/80 shadow " : "border-gray-50"
      } bg-[#f9f9fb]`}
    >
      <div className="flex justify-between items-start border-b pb-3 border-gray-200/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white ">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold">{title}</h3>
          </div>
        </div>

        <div className="flex gap-4">
          <h3 className="font-semibold text-[#1D1F2C]">{price}</h3>
          <CircleCheck
            className={`w-5 h-5 rounded-full ${
              selected ? "text-white bg-black" : "text-gray-400 "
            }`}
          />
        </div>
      </div>

      <p className="text-sm text-gray-600">{description}</p>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="mt-2 px-4 py-2 text-sm rounded-md bg-black text-white"
      >
        + Add Service
      </button>
    </div>
  );
}
