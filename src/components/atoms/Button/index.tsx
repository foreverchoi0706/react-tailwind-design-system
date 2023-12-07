import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Default = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={twMerge(
        "w-full rounded-md border p-2 hover:opacity-80",
        className,
      )}
      {...rest}
    />
  );
});
Default.displayName = "Default";

const Disabled = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...rest }, ref) => {
  return (
    <Default
      ref={ref}
      className={twMerge("bg-disabled", className)}
      {...rest}
    />
  );
});
Disabled.displayName = "Disabled";

const Primary = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...rest }, ref) => {
  return (
    <Default ref={ref} className={twMerge("bg-primary", className)} {...rest} />
  );
});
Primary.displayName = "Primary";

const Text = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return <button ref={ref} {...props} />;
});
Text.displayName = "Text";

export default Object.assign(Default, {
  Disabled,
  Primary,
  Text,
});
