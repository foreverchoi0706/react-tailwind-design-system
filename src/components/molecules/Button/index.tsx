import { forwardRef } from "react";
import Element, { PropsWithAsChildren } from "@/components/atoms/Element";

const Default = forwardRef<
  HTMLButtonElement,
  PropsWithAsChildren<HTMLButtonElement>
>((props, ref) => {
  const className = props.className + "  border w-full p-3 rounded-md";
  return <Element as="button" ref={ref} {...{ ...props, className }} />;
});

const Disabled = forwardRef<
  HTMLButtonElement,
  PropsWithAsChildren<HTMLButtonElement>
>((props, ref) => {
  const className = props.className + " bg-disabled";
  return <Default ref={ref} {...{ ...props, className }} />;
});

const Primary = forwardRef<
  HTMLButtonElement,
  PropsWithAsChildren<HTMLButtonElement>
>((props, ref) => {
  const className = props.className + " bg-primary";
  return <Default ref={ref} {...{ ...props, className }} />;
});

const Text = forwardRef<
  HTMLButtonElement,
  PropsWithAsChildren<HTMLButtonElement>
>((props, ref) => {
  return <Element as="button" ref={ref} {...props} />;
});

export default Object.assign(Default, {
  Disabled,
  Primary,
  Text,
});
