import { Button } from "@/components/ui/button";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";

interface ScheduleButtonProps {
  text: string;
  className?: string;
}

export default function ScheduleButton({ text, className = "" }: ScheduleButtonProps) {
  return (
    <Button className={` leading-[150%] flex cursor-pointer rounded-[8px] gap-2 font-semibold text-black ${className}`}>
      <span className="font-serotiva"> {text}</span>{" "}
      <IoMdAddCircle className="ml-2 w-5 h-5" />
    </Button>
  );
}
