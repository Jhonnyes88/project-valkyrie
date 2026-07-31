import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

interface InputProps
  extends React.ComponentProps<"input"> {
  error?: boolean;
}

function Input({
  className,
  type,
  error = false,
  ...props
}: InputProps) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 text-sm text-white placeholder:text-slate-500 outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        error
          ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
          : "focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20",
        className
      )}
      {...props}
    />
  );
}

export { Input };