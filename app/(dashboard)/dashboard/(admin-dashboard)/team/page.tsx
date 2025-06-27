"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Plus, User, Check, Divide } from "lucide-react";
import { ViewMemberModal } from "./_components/ViewDetailsModal";
import { useState } from "react";
import AddMemeberModal from "./_components/AddMemeberModal";
import EditMemberModal from "./_components/EditMemberModal";
import DeleteConfirmationModal from "./_components/DeleteMemberModal";
import {
  useAddTeamMemberMutation,
  useDeleteTeamMemberMutation,
  useGetTeamMembersQuery,
} from "@/src/redux/features/admin/team/teamApi";
import { ICreateOrUpdateTeamInput } from "@/src/redux/features/admin/team/teamType";
import { TeamMember } from "./fakeMember";
import { ITeamMember } from "@/src/redux/features/admin/team/teamType";
import { toast } from "sonner";

export default function page() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isDetailsModal, setIsDetailsModal] = useState<TeamMember | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // get data from server
  const { data, isLoading, error } = useGetTeamMembersQuery();
  const teamMembers = data?.data || [];

  const [deleteTeamMember, { isLoading: deleteMemberLoading }] =
    useDeleteTeamMemberMutation();
 

  // handle select memeber
  const handleSelectMemeber = (member) => {
    if (selectedMember?.id === member.id) {
      setSelectedMember(null);
    } else {
      setSelectedMember(member);
    
    }
  };

  // handle delete member
  const handleDeleteMember = async () => {
    try {
      if (!selectedMember) return;
      console.log("Deleting member with ID:", selectedMember.id);
      // When integrated, call your API here.
      await deleteTeamMember(selectedMember.id).unwrap();
      toast.success("Member deleted successfully");
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };
  return (
    <div className="p-4 sm:p-6 bg-muted rounded-xl">
      {/* Responsive header */}
      <div className="flex justify-between items-start mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-[24px]">Team</h2>
        <div className="flex gap-1 sm:gap-2">
          {/* Edit */}
          <Button
            variant="ghost"
            size="icon"
            className="text-dark-500 bg-gray-200 rounded-lg p-1.5"
            onClick={() => {
              if (selectedMember) {
                setIsEditModalOpen(true);
              }
            }}
            disabled={!selectedMember}
          >
            <Pencil className="w-4 h-4" />
          </Button>
          {/* Delete */}
          <Button
            variant="ghost"
            size="icon"
            className="text-red-500 bg-red-100 rounded-lg p-1.5"
            onClick={() => {
              if (selectedMember) {
                setIsDeleteModalOpen(true);
              }
            }}
            disabled={!selectedMember}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>Error team member</p>
      ) : (
        <>
          {/* Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member) => (
              <Card
                onClick={() => handleSelectMemeber(member)}
                key={member.id}
                className={`relative group transition p-4 sm:p-6 rounded-[12px] bg-gray-100 border-2 w-full ${
                  selectedMember?.id === member.id
                    ? "border-black"
                    : "border-gray-200"
                }`}
              >
                {selectedMember?.id === member.id && (
                  <Check className="w-4 sm:w-5 h-4 sm:h-5  absolute top-2 left-2 bg-gray-900 text-semibold rounded-full text-white p-1" />
                )}
                <CardContent className="flex flex-col items-center justify-between gap-3 sm:gap-4 p-0">
                  <div className="p-12 sm:p-[72px] bg-white rounded-full flex items-center justify-center">
                    <User className="w-8 sm:w-10 h-8 sm:h-10 text-muted-foreground" />
                  </div>
                  <div className="mt-2 sm:mt-4 text-center w-full">
                    <h3 className="font-medium text-sm text-[#141416]">
                      {member.fullName}
                    </h3>
                    <p className="text-xs text-[#4A4C56]">{member.role}</p>
                    <Button
                      variant="link"
                      className="text-xs mt-1 px-0 h-auto cursor-pointer underline text-[#070707]"
                      onClick={() => setIsDetailsModal(member)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Add User Card */}
            <Card className=" p-4 sm:p-6 w-full border-none">
              <CardContent className="flex flex-col items-center justify-between  p-0 w-full h-full ">
                <div className="p-12 sm:p-[72px] bg-white rounded-full flex items-center justify-center">
                  <User className="w-8 sm:w-10 h-8 sm:h-10 text-muted-foreground" />
                </div>
                <Button
                  onClick={() => setIsAddModalOpen(true)}
                  className="mt-4 w-full px-3 sm:px-4 bg-black text-white cursor-pointer"
                  variant="default"
                >
                  Add User{" "}
                  <Plus className="w-3 sm:w-4 h-3 sm:h-4 ml-1. text-black bg-white rounded-full" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {/* modal */}
      <ViewMemberModal
        member={isDetailsModal}
        isOpen={!!isDetailsModal}
        onClose={() => setIsDetailsModal(null)}
      />

      <EditMemberModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        member={selectedMember}
          // onSubmit={handleEditMember}
      />

      <AddMemeberModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />  

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteMember}
      />
    </div>
  );
}
