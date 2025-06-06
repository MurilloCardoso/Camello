import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "file:text-foreground w-full h-full  placeholder:text-muted-foreground  flex h-9 w-full min-w-0 rounded-md  px-3 py-1 pl-10 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 ",
  {
    variants: {
      size: {
        default: "h-full text-base px-3 py-1 pl-10",
        sm: "h-8 text-sm px-2.5 py-1 pl-9",
        lg: "h-10 text-lg px-4 py-2 pl-12",
      },

      variant: {
        outline:
          "border border-input  shadow-xs hover:bg-accent hover:text-accent-foreground",
        default: "bg-gray-700  opacity-60",
        solid: "bg-surface-empty border-gray-500",
        underline: "border-b rounded-none px-0",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

export type InputVariants = VariantProps<typeof inputVariants>;

function Input({
  className,
  variant,
  size: size,
  icon: Icon,
  ...props
}: React.ComponentProps<"input"> & {
  size?: string;
  icon?: React.ElementType;
} & VariantProps<typeof inputVariants>) {
  return (
    <div className="relative flex items-center">
      {Icon != null && (
        <div className="absolute flex items-center pointer-events-none left-3">
          <Icon className="w-4 h-4 text-muted-foreground" />
        </div>
      )}
      <input
        data-slot="search-input"
        className={inputVariants({ variant, size, className })}
        {...props}
      />
    </div>
  );
}

export { Input, inputVariants };
