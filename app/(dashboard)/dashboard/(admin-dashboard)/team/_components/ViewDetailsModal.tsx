import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { TeamMember } from "../fakeMember";

interface ViewMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ViewMemberModal({
  member,
  isOpen,
  onClose,
}: ViewMemberModalProps) {
  if (!member) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px] bg-white border-gray-400 ">
        <DialogHeader>
          <DialogTitle>Member Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h3 className="font-medium">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.email}</p>
            {/* Add other member details */}

            <p className="text-gray-500">Role: <span className="text-gray-900">{member.role}</span></p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
