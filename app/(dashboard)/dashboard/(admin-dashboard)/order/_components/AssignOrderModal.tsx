"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useGetAllResellersQuery } from "@/src/redux/features/admin/reseller/resellerApi";
import { useGetUserRoleQuery } from "@/src/redux/features/admin/settings/user-role-management";
import { Input } from "@/components/ui/input";

interface AssignOrderModalProps {
  orderId: string;
  open: boolean;
  onClose: () => void;
  onAssign: (
    reseller: string,
    role: string,
    amount: string,
    notes: string,
    postType: string,
    postCount: string
  ) => void;
}

export function AssignOrderModal({
  orderId,
  open,
  onClose,
  onAssign,
}: AssignOrderModalProps) {
  const { data: resellers } = useGetAllResellersQuery(undefined);
  const { data: roles } = useGetUserRoleQuery(undefined);

  const [reseller, setReseller] = useState("");
  const [role, setRole] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [postType, setPostType] = useState("");
  const [postCount, setPostCount] = useState("");

  const handleAssign = () => {
    if (reseller && role) {
      onAssign(reseller, role, amount, notes, postType, postCount);
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white border-none">
        <DialogHeader>
          <DialogTitle className="text-[24px]">
            Assign Order #{orderId}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex gap-4">
            {/* Select Reseller */}
            <div className="w-full md:w-1/2">
              <label className="font-medium text-[#4A4C56]">
                Select Reseller
              </label>
              <Select onValueChange={setReseller}>
                <SelectTrigger className="mt-1 w-full border-[#DFE1E7]">
                  <SelectValue placeholder="Select reseller" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#DFE1E7]">
                  {resellers?.data?.map((reseller: any) => (
                    <SelectItem key={reseller.id} value={reseller.id}>
                      {reseller.full_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Role */}
            <div className="w-full md:w-1/2">
              <label className="font-medium text-[#4A4C56]">Role</label>
              <Select onValueChange={setRole}>
                <SelectTrigger className="mt-1 w-full border-[#DFE1E7]">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#DFE1E7] ">
                  {roles?.data?.data?.map((role: any) => (
                    <SelectItem key={role.id} value={role.id}>
                      {role.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Amount */}
          <div>
            <label className="font-medium text-[#4A4C56]">Amount</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              // className="mt-1 w-full border-[#DFE1E7] bg-white"
            />
          </div>

          {/* post type */}
          <div>
            <label className="font-medium text-[#4A4C56]">Post Type</label>
            <Input
              type="text"
              value={postType}
              onChange={(e) => setPostType(e.target.value)}
              // className="mt-1 w-full border-[#DFE1E7] bg-white"
            />
          </div>

          {/* post count */}
          <div>
            <label className="font-medium text-[#4A4C56]">Post Count</label>
            <Input
              type="number"
              value={postCount}
              onChange={(e) => setPostCount(e.target.value)}
              // className="mt-1 w-full border-[#DFE1E7] bg-white"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="text-[#4A4C56]font-medium">Notes</label>
            <textarea
              placeholder="Add any special instructions or notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full h-28 px-3 py-2 mt-1 text-sm border border-[#DFE1E7] border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-colors"
            />
          </div>
        </div>

        {/* Buttons */}
        <DialogFooter className="mt-4">
          <Button className="bg-black text-white" onClick={handleAssign}>
            Assign Order
          </Button>
          <DialogClose asChild>
            <Button
              className="bg-[#F5F5F7] text-gray-600 border-none"
              variant="outline"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
