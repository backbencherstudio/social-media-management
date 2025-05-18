import React from "react";

type AgeDistribution = {
  ageRange: string;
  percentage: number;
};

type GeographicDistribution = {
  country: string;
  percentage: number;
};

const data = {
  ageDistribution: [
    { ageRange: "18–24", percentage: 22 },
    { ageRange: "25–32", percentage: 15 },
    { ageRange: "18–24", percentage: 35 },
    { ageRange: "18–24", percentage: 28 },
  ],
  geographicDistribution: [
    { country: "USA", percentage: 22 },
    { country: "UK", percentage: 15 },
    { country: "AUS", percentage: 35 },
    { country: "NED", percentage: 28 },
  ],
};

const ProgressBar = ({ percentage }: { percentage: number }) => (
  <div className="relative w-full h-2 bg-gray-200 rounded">
    <div
      className="absolute top-0 left-0 h-2 bg-black rounded"
      style={{ width: `${percentage}%` }}
    />
  </div>
);

const AudienceDemographics: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6 mx-auto">
      <h2 className="text-xl font-semibold">Audience Demographics</h2>

      {/* Age Distribution */}
      <div className="border p-4 rounded-lg border-gray-200">
        <h3 className="text-md font-medium mb-2 text-[#4A4C56]">Age Distribution</h3>
        <div className="space-y-3">
          {data.ageDistribution.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="w-16 text-[#4A4C56]">{item.ageRange}</span>
              <ProgressBar percentage={item.percentage} />
              <span className="w-12 text-right text-[#4A4C56]">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Distribution */}
     <div className="border p-4 rounded-lg border-gray-200">
        <h3 className="text-md font-medium mb-2 text-[#4A4C56]">Geographic Distribution</h3>
        <div className="space-y-3">
          {data.geographicDistribution.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="w-16">{item.country}</span>
              <ProgressBar percentage={item.percentage} />
              <span className="w-12 text-right">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudienceDemographics;
