"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
}

function Select({
  className,
  options,
  placeholder = "Selecciona una opción",
  error = false,
  ...props
}: SelectProps) {
  return (
    <select
      data-slot="select"
      className={cn(
        "h-11 w-full rounded-lg border bg-slate-800 px-4 text-sm text-white outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        error
          ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
          : "border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20",
        className
      )}
      {...props}
    >
      <option value="">
        {placeholder}
      </option>

      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export { Select };