import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TeamMember } from "../fakeMember";
import { useUpdateTeamMemberMutation } from "@/src/redux/features/admin/team/teamApi";
import { toast } from "sonner";

interface EditMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | null;
}

export default function EditMemberModal({
  isOpen,
  onClose,
  member,
}: EditMemberModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "admin",
  });

  // Update the form data when the modal is opened with new member data
  useEffect(() => {
    if (member) {
      setFormData({
        fullName: member?.full_name || "",
        email: member.email || "",
        role: member.role || "admin",
      });
    }
  }, [member]);

  const [updateTeamMember, { isLoading, isSuccess, isError, error }] =
    useUpdateTeamMemberMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

   
    try {
      await updateTeamMember({
        id: member?.id || "",
        body: {
          fullName: formData.fullName,
          email: formData.email,
          role: formData.role,
        },
      }).unwrap();

      if (isSuccess) {
        toast.success("Team member updated successfully");
      }
    } catch (err) {
      toast.error("Failed to update team member");
      console.error(err);
    } finally {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[520px] bg-white border border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Edit Team Member
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Input */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  fullName: e.target.value,
                }))
              }
              className="flex-1 border border-gray-300 focus:ring-transparent"
              placeholder="Enter full name"
              required
              autoFocus={true}
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              className="w-full border border-gray-300 focus:ring-transparent"
              placeholder="Enter email"
              required
             
            />
          </div>

          {/* Role Selection */}
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select
              value={formData.role}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  role: value,
                }))
              }
            >
              <SelectTrigger className="w-full border border-gray-300 focus:ring-transparent">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="manager">Project Manager</SelectItem>
                <SelectItem value="writer">Content Writer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="bg-black text-white hover:bg-black/90"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Save"}
            </Button>
            <Button
              type="button"
              onClick={onClose}
              className="border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
