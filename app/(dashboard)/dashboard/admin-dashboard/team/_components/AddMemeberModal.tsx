import React, { useState } from "react";
import { TeamMember } from "../fakeMember";
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
import { useAddTeamMemberMutation } from "@/src/redux/features/admin/team/teamApi";
import { toast } from "sonner";
import { useGetUserRoleQuery } from "@/src/redux/features/admin/settings/user-role-management";

interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddMemeberModal({
  isOpen,
  onClose,
}: AddMemberModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "admin",
  });
  const { data: roles } = useGetUserRoleQuery(undefined);

  const [addTeamMember, { isLoading }] = useAddTeamMemberMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addTeamMember({
        fullName: formData.fullName,
        role: formData.role,
        email: formData.email,
      }).unwrap();
      
      toast.success("Team member added successfully");
      setFormData({
        fullName: "",
        email: "",
        role: "admin",
      });
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add team member");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="md:min-w-[620px] bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Add New Team Member
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-[#4A4C56] mb-6">
          The invited team member will receive an email with their login details
          and will gain access to any new and existing orders in your account.
          You can also add or remove team members from individual orders.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className=" gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                className="flex-1 border border-gray-300 focus:ring-transparent "
                placeholder="Md."
                value={formData.fullName}
                required
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    fullName: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@domain.com"
              className="border border-gray-300 focus:ring-transparent"
              value={formData.email}
              required
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </div>

          <div className="space-y-2 ">
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
              {roles?.data?.data?.map((role: any) => (
                console.log(role.title),
                  <SelectItem key={role.id} value={role.title}>
                    {role.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className=" bg-black text-white hover:bg-black/90"
              disabled={isLoading}
            >
              {isLoading ? "Inviting..." : "Send Invite"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className=""
            >
              Close
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}