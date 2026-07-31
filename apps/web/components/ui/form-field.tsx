"use client";

import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

function FormField({
  label,
  required = false,
  error,
  description,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label required={required}>
        {label}
      </Label>

      {children}

      {description && !error && (
        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      )}

      {error && (
        <p
          role="alert"
          className="text-sm font-medium text-destructive"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export { FormField };