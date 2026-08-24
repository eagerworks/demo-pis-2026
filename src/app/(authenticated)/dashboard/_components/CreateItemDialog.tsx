"use client";

import { Button } from "~/app/_components/Button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/app/_components/Dialog";

import { CreateItemForm } from "./CreateItemForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreateItemDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onSuccess = () => {
    setIsOpen(false);
    router.refresh();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        render={
          <Button variant="outline" className="w-fit">
            Create +
          </Button>
        }
      />

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create to-do item</DialogTitle>

          <DialogDescription>
            Add a new item to your to-do list.
          </DialogDescription>
        </DialogHeader>

        <CreateItemForm onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  );
}
