"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EyeIcon, PencilIcon } from "lucide-react";
import Image from "next/image";
import CustomSwitch from "../../_components/CustomSwitch";

export type Reseller = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  skills: string[];
  task: number;
  earning: string;
  status: "Active" | "Deactivate";
  enabled: boolean;
};

interface ResellerTableProps {
  resellers: Reseller[];
}

export function ResellerTable({ resellers }: ResellerTableProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm px-4">
      <Table>
        <TableHeader className="">
          <TableRow className="bg-gray-50 text-sm text-[#44444A] border-gray-200 ">
            <TableHead>Reseller</TableHead>
            <TableHead>Skills</TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Earning</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {resellers.map((reseller) => (
            <TableRow key={reseller.id} className="hover:bg-gray-50">
              {/* Reseller Info */}
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Image
                    src={reseller.avatar}
                    alt={reseller.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-[#1D1F2C]">
                      {reseller.name}
                    </span>
                    <span className="text-sm text-[#4A4C56]">
                      {reseller.email}
                    </span>
                  </div>
                </div>
              </TableCell>

              {/* Skills */}
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  {reseller.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium px-2 py-1 rounded-md ${skillColor(
                        skill
                      )}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TableCell>

              {/* Task */}
              <TableCell className="text-sm text-[#4A4C56] font-medium">
                {reseller.task}
              </TableCell>

              {/* Earning */}
              <TableCell className="text-sm text-[#4A4C56] font-medium">
                {reseller.earning}
              </TableCell>

              {/* Status */}
              <TableCell>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    reseller.status === "Active"
                      ? "text-green-600 bg-green-50"
                      : "text-gray-500 bg-gray-100"
                  }`}
                >
                  {reseller.status}
                </span>
              </TableCell>

              {/* Actions */}
              <TableCell>
                <div className="flex items-center gap-4">
                  <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200">
                    <EyeIcon className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200">
                    <PencilIcon className="w-4 h-4 text-gray-600" />
                  </button>
                  <CustomSwitch
                    checked={reseller.enabled}
                    onChange={() => {}}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// Optional: Simple color generator
function skillColor(skill: string) {
  const colors: { [key: string]: string } = {
    "Social Media": "bg-blue-100 text-blue-600",
    Content: "bg-pink-100 text-pink-600",
    SEO: "bg-indigo-100 text-indigo-600",
    Backlinks: "bg-purple-100 text-purple-600",
    Copywrite: "bg-gray-100 text-gray-600",
    Blog: "bg-zinc-100 text-zinc-600",
    Marketing: "bg-cyan-100 text-cyan-600",
    Ads: "bg-fuchsia-100 text-fuchsia-600",
  };
  return colors[skill] || "bg-gray-100 text-gray-600";
}
