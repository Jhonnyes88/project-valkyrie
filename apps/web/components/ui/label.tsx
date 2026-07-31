"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

function Label({
  className,
  children,
  required = false,
  ...props
}: LabelProps) {
  return (
    <label
      data-slot="label"
      className={cn(
        "block text-sm font-medium text-foreground",
        className
      )}
      {...props}
    >
      <span className="inline-flex items-center gap-1">
        {children}

        {required && (
          <span
            aria-hidden="true"
            className="text-destructive"
          >
            *
          </span>
        )}
      </span>
    </label>
  );
}

export { Label };