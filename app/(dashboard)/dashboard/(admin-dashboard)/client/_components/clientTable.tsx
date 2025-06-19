import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import CustomSwitch from "../../_components/CustomSwitch";
import CustomSelect from "../../../_components/custom-select";
import { Pagination } from "../../_components/Pagination";
import { useState } from "react";
import { useUpdateClientStatusMutation } from "@/src/redux/features/admin/client/clientApi";
import { toast } from "sonner";
  
// fake data
export type SimpleClient = {
  id: string;
  status: string;
  order_status: string;
  subscription_id: string;
  ammount: number;
  pakage_name: string;
  user_email: string;
  user_name: string;
  user_id: string;
  subscription: {
    service_id: string;
    service_tier_id: string;
  };
  total_orders: number;
  total_spent: number;
};
const clientData: SimpleClient[] = [
  {
    id: "ORD_qqn3h7zd98s58bftq4rfnlfw",
    status: "active",
    order_status: "progress",
    subscription_id: "cmbzxvt8l0005relgymnxiat4",
    ammount: 149,
    pakage_name: "Social Media Posts",
    user_email: "yoyebe7706@pricegh.com",
    user_name: "tre Arafat",
    user_id: "cmb1qxtzc0001ree0hcyoc3a8",
    subscription: {
      service_id: "cmb1rms8c0005reeowwooy8vm",
      service_tier_id: "cmb1rmsbi000jreeo1viwwuns",
    },
    total_orders: 3,
    total_spent: 947,
  },
  {
    id: "ORD_qqn3h7zd98s58bftq4rfnlfw",
    status: "active",
    order_status: "progress",
    subscription_id: "cmbzxvt8l0005relgymnxiat4",
    ammount: 149,
    pakage_name: "Social Media Posts",
    user_email: "yoyebe7706@pricegh.com",
    user_name: "tre Arafat",
    user_id: "cmb1qxtzc0001ree0hcyoc3a8",
    subscription: {
      service_id: "cmb1rms8c0005reeowwooy8vm",
      service_tier_id: "cmb1rmsbi000jreeo1viwwuns",
    },
    total_orders: 3,
    total_spent: 947,
  },
];

interface ClientTableProps {
  clients: SimpleClient[];
  period: string;
  setPeriod: (value: string) => void;
  orderStatus: string;
  setOrderStatus: (value: string) => void;
}

export function ClientTable({
  clients,
  period,
  setPeriod,
  orderStatus,
  setOrderStatus,
}: ClientTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const totalPages = Math.ceil(clients.length / itemsPerPage);
  const paginationList = clients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

const [updateClientStatus, {isLoading, isError, isSuccess}] = useUpdateClientStatusMutation(undefined);

// console.log(clientResponse)

  const handleSwitch = async(id: string) => {
    // console.log(id);
    await updateClientStatus(id).unwrap().then((res) => {
      console.log(res);
    });
    if(isSuccess){
      toast.success("Client status updated successfully");
    }
    if(isError){
      toast.error("Failed to update client status");
    }
  };
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <h2 className="text-xl font-semibold ">All Order</h2>

        <div className="flex flex-wrap items-center justify-center gap-4 ">
          <CustomSelect
            value={period}
            onChange={setPeriod}
            options={[
              { label: "This Week", value: "week" },
              { label: "This Month", value: "month" },
              { label: "This Year", value: "year" },
            ]}
          />
          <CustomSelect
            value={orderStatus}
            onChange={setOrderStatus}
            options={[
              { label: "All", value: "all" },
              { label: "Pending", value: "pending" },
              { label: "Completed", value: "completed" },
            ]}
          />
        </div>
      </div>
      {/* table */}
      <Table>
        <TableHeader>
          <TableRow className="border-gray-300 bg-gray-50 text-sm text-[#44444A]">
            <TableHead className="w-64 md:min-w-[400px]">Client</TableHead>
            <TableHead>Orders</TableHead>
            <TableHead>Spent</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginationList.map((client) => (
            <TableRow key={client.id} className="border-b border-gray-100">
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Image
                    src={client.avatar || "https://i.pravatar.cc/40?img=56"}
                    alt={client.user_name}
                    width={40}
                    height={40}
                    className="rounded-full "
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-[#1D1F2C] truncate max-w-[120px]">
                      {client.user_name}
                    </span>
                    <span className="text-sm text-[#4A4C56] truncate max-w-[120px]">
                      {client.user_email}
                    </span>
                  </div>
                </div>
              </TableCell>

              <TableCell className="text-sm font-medium text-[#4A4C56]">
                {client.total_orders}
              </TableCell>

              <TableCell className="text-sm font-medium text-[#4A4C56]">
                {client.total_spent}
              </TableCell>

              <TableCell>
                <Badge
                  variant="outline"
                  className={`rounded-full ${
                    client.status === "active"
                      ? "text-green-500 border-green-300 bg-green-50"
                      : "text-red-500 border-red-300 bg-red-50"
                  }`}
                >
                  {client.status}
                </Badge>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <EyeIcon className="w-5 h-5 text-gray-600" />
                  </div>

                  <div>
                    {/* switch */}
                    <CustomSwitch
                      checked={client.status === "active"}
                      onChange={() => {handleSwitch(client.id)}}
                    />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* pagination */}
      <div className="mt-4 flex items-center justify-between px-4 pb-4 flex-wrap">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <div className="flex items-center gap-4">
          <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, clients.length)} of{" "}
            {clients.length} entries
          </label>
          <select
            id="itemsPerPage"
            className="border border-gray-200 rounded-md px-3 py-1.5 text-sm"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>Show 5</option>
            <option value={8}>Show 8</option>
            <option value={10}>Show 10</option>
            <option value={20}>Show 20</option>
          </select>
        </div>
      </div>
    </>
  );
}
