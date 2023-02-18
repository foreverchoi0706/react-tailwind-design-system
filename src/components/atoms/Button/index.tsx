import { ButtonHTMLAttributes, forwardRef } from "react";

const Default = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const className =
    props.className + " border w-full p-3 rounded-md hover:opacity-80";
  return <button ref={ref} {...{ ...props, className }} />;
});

const Disabled = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const className = props.className + " bg-disabled";
  return <Default ref={ref} {...{ ...props, className }} />;
});

const Primary = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const className = props.className + " bg-primary";
  return <Default ref={ref} {...{ ...props, className }} />;
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
