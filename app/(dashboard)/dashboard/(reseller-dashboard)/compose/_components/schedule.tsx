import React from "react";
import DatePicker from "../../reseller-dashboard/_components/date-picker";

export default function Schedule() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <h1 className="text-xl font-semibold mb-4">Schedule</h1>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-8">
            <DatePicker />
          </div>
          <div className="col-span-1 md:col-span-4">
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black">
              <option value="UTC+00:00">
                (UTC+00:00) London, Dublin, Lisbon
              </option>
              <option value="UTC+01:00">(UTC+01:00) Berlin, Paris, Rome</option>
              <option value="UTC+02:00">
                (UTC+02:00) Athens, Istanbul, Cairo
              </option>
              <option value="UTC+03:00">(UTC+03:00) Moscow, Baghdad</option>
              <option value="UTC+04:00">(UTC+04:00) Dubai, Baku</option>
              <option value="UTC+05:00">(UTC+05:00) Karachi, Tashkent</option>
              <option value="UTC+05:30">(UTC+05:30) Mumbai, Colombo</option>
              <option value="UTC+06:00">(UTC+06:00) Dhaka, Almaty</option>
              <option value="UTC+07:00">(UTC+07:00) Bangkok, Jakarta</option>
              <option value="UTC+08:00">(UTC+08:00) Beijing, Singapore</option>
              <option value="UTC+09:00">(UTC+09:00) Tokyo, Seoul</option>
              <option value="UTC+10:00">(UTC+10:00) Sydney, Brisbane</option>
              <option value="UTC-08:00">
                (UTC-08:00) Los Angeles, Vancouver
              </option>
              <option value="UTC-07:00">(UTC-07:00) Denver, Phoenix</option>
              <option value="UTC-06:00">
                (UTC-06:00) Chicago, Mexico City
              </option>
              <option value="UTC-05:00">(UTC-05:00) New York, Toronto</option>
              <option value="UTC-04:00">(UTC-04:00) Halifax, Caracas</option>
              <option value="UTC-03:00">
                (UTC-03:00) São Paulo, Buenos Aires
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
