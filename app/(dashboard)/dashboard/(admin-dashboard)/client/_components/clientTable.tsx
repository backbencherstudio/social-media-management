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
}

export function ClientTable({ clients }: ClientTableProps) {
  return (
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
        {clients.map((client) => (
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
  );
}
