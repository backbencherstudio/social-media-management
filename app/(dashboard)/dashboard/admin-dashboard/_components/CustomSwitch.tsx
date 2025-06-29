import * as React from "react";

interface ClientStatusSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default function CustomSwitch({ checked, onChange, disabled }: ClientStatusSwitchProps) {
  return (
    <button
      type="button"
      aria-checked={checked}
      role="switch"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${
        checked ? "bg-emerald-400" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}