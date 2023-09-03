import { ButtonHTMLAttributes, forwardRef } from "react";
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
        className
      )}
      {...rest}
    />
  );
});

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

const Primary = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...rest }, ref) => {
  return (
    <Default ref={ref} className={twMerge("bg-primary", className)} {...rest} />
  );
});

const Text = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return <button ref={ref} {...props} />;
});

export default Object.assign(Default, {
  Disabled,
  Primary,
  Text,
});
