import { ButtonHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";

const Default = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={classNames(
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
      className={classNames("bg-disabled", className)}
      {...rest}
    />
  );
});

const Primary = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...rest }, ref) => {
  return (
    <Default
      ref={ref}
      className={classNames("bg-primary", className)}
      {...rest}
    />
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
