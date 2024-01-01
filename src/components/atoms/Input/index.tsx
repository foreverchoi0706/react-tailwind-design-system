import React, { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={twMerge("w-full rounded-md border p-2", className)}
      {...rest}
    />
  );
});
Input.displayName = "Input";

export default Input;
