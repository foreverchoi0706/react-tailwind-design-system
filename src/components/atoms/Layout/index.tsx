import { forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Element, { PropsWithAsChildren } from "@/components/atoms/Element";

const Default = forwardRef<
  HTMLDivElement,
  PropsWithAsChildren<HTMLAttributes<HTMLDivElement>>
>((props, ref) => {
  return <Element ref={ref} {...props} />;
});

const Flex = forwardRef<
  HTMLDivElement,
  PropsWithAsChildren<HTMLAttributes<HTMLDivElement>>
>(({ className, ...rest }, ref) => {
  return <Element ref={ref} className={twMerge("flex", className)} {...rest} />;
});

const Grid = forwardRef<
  HTMLDivElement,
  PropsWithAsChildren<HTMLAttributes<HTMLDivElement>>
>(({ className, ...rest }, ref) => {
  return <Element ref={ref} className={twMerge("grid", className)} {...rest} />;
});

export default Object.assign(Default, {
  Flex,
  Grid,
});
