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


export type SimpleClient = {
  id: number;
  company: string;
  email: string;
  orders: number;
  spent: string;
  status: string;
  avatar: string;
};

interface ClientTableProps {
  clients: SimpleClient[];
  period: string;
  setPeriod: (value: string) => void;
  orderStatus: string;
  setOrderStatus: (value: string) => void;
}

// // filter
// const [period, setPeriod] = useState("week");
// const [orderStatus, setOrderStatus] = useState("all");

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
                    src={client.avatar}
                    alt={client.company}
                    width={40}
                    height={40}
                    className="rounded-full "
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-[#1D1F2C] truncate max-w-[120px]">
                      {client.company}
                    </span>
                    <span className="text-sm text-[#4A4C56] truncate max-w-[120px]">
                      {client.email}
                    </span>
                  </div>
                </div>
              </TableCell>

              <TableCell className="text-sm font-medium text-[#4A4C56]">
                {client.orders}
              </TableCell>

              <TableCell className="text-sm font-medium text-[#4A4C56]">
                {client.spent}
              </TableCell>

              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    client.status === "Active"
                      ? "text-green-500 border-green-300 bg-green-50"
                      : "text-red-500 border-red-300 bg-red-50"
                  }
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
                      checked={client.status === "Active"}
                      onChange={() => {}}
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
