import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface AuthFieldProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  error?: string;
}

export function AuthField({ label, error, id, className, ...props }: AuthFieldProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="text-ink text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        className={cn(
          "text-ink placeholder:text-muted h-13 w-full rounded-xl border px-6 text-lg transition-colors outline-none",
          error ? "border-red-400 focus:border-red-500" : "border-line focus:border-primary",
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
