


export default function  ResellersState({data}) {
  const { activeResellers, totalTasks, commissionPaid, newResellerRequests } =
    data;

  return (
    <div>
        {/* stats section */}
      <div className="space-y-10">
        {/* Stats Card Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SummaryCard title="Active Resellers" value={activeResellers} />
          <SummaryCard title="Total Tasks" value={totalTasks} />
          <SummaryCard title="Commission Paid" value={commissionPaid} />
          <SummaryCard
            title="New Reseller Request"
            value={newResellerRequests}
          />
        </div>
      </div>

      {/* resellers table */}
      {/* reseller table */}
    </div>
  );
}


function SummaryCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="bg-[#F9F9FB] p-6 rounded-xl shadow-sm">
      <p className="text-sm text-gray-700 font-medium">{title}</p>
      <p className="text-[22px] font-semibold text-gray-900 mt-1">{value}</p>
    </div>
  );
}