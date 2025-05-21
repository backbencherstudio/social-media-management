"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}

export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
}: DeleteConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[400px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Are you sure?
          </DialogTitle>
        </DialogHeader>
        <p className="py-4 text-sm text-gray-600">
          Do you really want to delete this member? This action cannot be
          undone.
        </p>
        <DialogFooter className="flex gap-3">
          <Button className="" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
          className="bg-black bg-red-800/90"
            variant="destructive"
            onClick={async () => {
              await onConfirm();
              onClose();
            }}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
