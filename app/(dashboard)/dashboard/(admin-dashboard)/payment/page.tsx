import React from "react";
import Card from "./_components/card";
import ClientPayments from "./_components/client-payments";
import ResellerPayments from "./_components/reseller-payments";

export default function Payment() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <Card text={"Total Revenue"} number={"$450,000"} />
        <Card text={"Service Purchase"} number={"$337,500"} />
        <Card text={"Reseller Payouts"} number={"$337,500"} />
        <Card text={"Refunds"} number={"$2,300"} />
      </div>
      <div className="space-y-4 md:space-y-6">
        <div className="w-full">
          <ClientPayments />
        </div>
        <div className="w-full">
          <ResellerPayments />
        </div>
      </div>
    </div>
  );
}
