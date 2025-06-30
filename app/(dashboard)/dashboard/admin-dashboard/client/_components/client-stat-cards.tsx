// clientStatCard.tsx (Optional reusable card component if you want more control)
import React from "react";

export type clientStat = {
  title: string;
  count: number;
};

interface clientSlateProps {
  clientslate: clientStat[];
}

export const ClientStateCard = ({ clientslate }: clientSlateProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {clientslate.slice(0, 2).map((client, index) => (
        <div
          className="p-6 rounded-lg shadow-md bg-white space-y-2 "
          key={index}
        >
          <p className="text-gray-500 font-medium">{client.title}</p>
          <h3 className="text-2xl font-bold">{client.count}</h3>
        </div>
      ))}

      <div className="p-6 rounded-lg shadow-md bg-white space-y-2 ">
        <p className="text-gray-500 font-medium">{clientslate[2].title}</p>
        <h3 className="text-2xl font-bold">$ {clientslate[2].count}</h3>
      </div>
    </div>
  );
};
