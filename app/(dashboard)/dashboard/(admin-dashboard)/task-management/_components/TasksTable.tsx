import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { EyeIcon, UserRoundPlus, Users2Icon } from "lucide-react";
import Image from "next/image";

export type Task = {
  taskId: string;
  role: string;
  assignee: string;
  avatar: string;
  dueDate: string;
  status: "Pending" | "In Progress" | "Completed" | "In Review" | "On Hold" | "Cancel";
};

interface TaskTableProps {
  tasks: Task[];
  // onAssignClick: (TaskId: string) => void;
}

export function TaskTable({ tasks }: TaskTableProps) {
  return (
    <>
    
      <Table className="mt-6">
        <TableHeader>
          <TableRow className="border-gray-300 bg-gray-50 text-sm text-[#44444A]">
            <TableHead>Task ID</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Assignee</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        {/* table body */}
        <TableBody>
          {tasks.map((task, i) => (
            <TableRow className="border-b border-gray-100" key={i}>
              <TableCell className="text-sm text-[#1D1F2C] font-medium">
                {task.taskId}
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium text-[#1D1F2C] font-medium">
                    {task.role}
                  </span>
                  
                </div>
              </TableCell>

              <TableCell>
                <div>
                  <p className="font-medium text-[#1D1F2C]">
                    {task.assignee}
                  </p>
                  
                </div>
              </TableCell>
              <TableCell className="text-sm font-medium text-[#4A4C56]">
                {task.dueDate}
              </TableCell>
              
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    task.status === "Pending"
                      ? "text-orange-500 border-orange-300 bg-orange-50"
                      : task.status === "In Progress"
                      ? "text-blue-500 border-blue-300 bg-blue-50"
                      : "text-green-500 border-green-300 bg-green-50" 
                  }
                >
                  {task.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  {/* View Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <EyeIcon className="w-5 h-5 text-gray-600" />
                  </div>

                  {/* Assigned Avatars */}
                  <div className="flex">
                    
                    {/* Add User Button */}
                    {/* <button onClick={()=> onAssignClick(task.taskId)} className="w-12 h-12 flex items-center justify-center rounded-[10px] bg-[#F3F3FF] text-indigo-600 hover:bg-indigo-100 cursor-pointer border border-4 border-white">
                      <UserRoundPlus className="w-6 h-6 " />
                    </button> */}
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
