import React from "react";
import ActiveAutomations from "./_components/active-automations";
import Folders from "./_components/folders";

export default function Automation() {
  return (
    <div className="space-y-6">
      <ActiveAutomations />
      <Folders />
    </div>
  );
}
