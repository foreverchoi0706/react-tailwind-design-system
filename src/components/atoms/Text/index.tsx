import React, { forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import Element, { PropsWithAsChildren } from "@/components/atoms/Element";

const Default = forwardRef<
  HTMLElement,
  PropsWithAsChildren<HTMLAttributes<HTMLElement>>
>(({ as = "span", ...rest }, ref) => {
  return <Element ref={ref} as={as} {...rest} />;
});
Default.displayName = "Default";

const Error = forwardRef<
  HTMLElement,
  PropsWithAsChildren<HTMLAttributes<HTMLElement>>
>(({ as = "em", className, ...rest }, ref) => {
  return (
    <Default
      ref={ref}
      as={as}
      className={twMerge("text-red-500", className)}
      {...rest}
    />
  );
});
Error.displayName = "Error";

export default Object.assign(Default, { Error });
