import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, autoComplete, ...props }, ref) => {
    return (
      <input
        type={type}
        autoComplete={autoComplete}
        className={cn(
          "flex h-10 w-full rounded-md border border-neutral-400 bg-white px-2 py-0.5 text-base   file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-neutral-500 focus:border-neutral-800    disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
