"use client";

import { ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-700 bg-slate-900/40 px-8 py-20 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
        {icon}
      </div>

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-slate-400">
        {description}
      </p>

      {actionLabel && onAction && (
        <Button
          className="mt-8"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}