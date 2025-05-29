"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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

interface AssignOrderModalProps {
  orderId: string;
  open: boolean;
  onClose: () => void;
  onAssign: (reseller: string, role: string, notes: string) => void;
}

export function AssignOrderModal({
  orderId,
  open,
  onClose,
  onAssign,
}: AssignOrderModalProps) {
  const [reseller, setReseller] = useState("");
  const [role, setRole] = useState("");
  const [notes, setNotes] = useState("");

  const handleAssign = () => {
    if (reseller && role) {
      onAssign(reseller, role, notes);
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
          {/* Select Reseller */}
          <div>
            <label className="font-medium text-[#4A4C56]">
              Select Reseller
            </label>
            <Select onValueChange={setReseller}>
              <SelectTrigger className="mt-1 w-full border-[#DFE1E7]">
                <SelectValue placeholder="Select reseller" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#DFE1E7]">
                <SelectItem value="darrell">Darrell Steward</SelectItem>
                <SelectItem value="eleanor">Eleanor Pena</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Role */}
          <div>
            <label className="font-medium text-[#4A4C56]">Role</label>
            <Select  onValueChange={setRole}>
              <SelectTrigger className="mt-1 w-full border-[#DFE1E7]">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#DFE1E7] ">
                <SelectItem value="account-manager">Account Manager</SelectItem>
                <SelectItem value="support">Support Agent</SelectItem>
              </SelectContent>
            </Select>
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
            <Button className="bg-[#F5F5F7] text-gray-600 border-none" variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
