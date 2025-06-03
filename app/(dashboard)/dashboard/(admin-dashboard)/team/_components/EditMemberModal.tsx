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

interface EditMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | null;
  onSubmit: (data: Omit<TeamMember, "id" | "selected">) => Promise<void>;
}

export default function EditMemberModal({
  isOpen,
  onClose,
  member,
  onSubmit,
}: EditMemberModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "Account Manager",
  });

  useEffect(() => {
    if (member) {
      console.log("me", member);
      setFormData({
        firstName: member.name.split(" ")[0] || "",
        lastName: member.name.split(" ")[1] || "",
        email: member.email || "",
        role: member.role || "Account Manager", // Ensure role is set correctly
      });
    }
  }, [member]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit({
        name: `${formData.firstName} ${formData.lastName}`,
        role: formData.role,
        email: formData.email,
      });
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                className="w-full border border-gray-300 focus:ring-transparent"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                className="w-full border border-gray-300 focus:ring-transparent"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              className="w-full border border-gray-300 focus:ring-transparent"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </div>

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
                <SelectItem value="Account Manager">Account Manager</SelectItem>
                <SelectItem value="Project Manager">Project Manager</SelectItem>
                <SelectItem value="Content Writer">Content Writer</SelectItem>
              </SelectContent>
            </Select>
          </div>

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
