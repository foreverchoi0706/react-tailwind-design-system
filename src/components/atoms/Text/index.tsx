import { forwardRef, HTMLAttributes } from "react";
import Element, { PropsWithAsChildren } from "@/components/atoms/Element";
import classNames from "classnames";

const Default = forwardRef<
  HTMLElement,
  PropsWithAsChildren<HTMLAttributes<HTMLElement>>
>(({ as = "span", ...rest }, ref) => {
  return <Element ref={ref} as={as} {...rest} />;
});

const Error = forwardRef<
  HTMLElement,
  PropsWithAsChildren<HTMLAttributes<HTMLElement>>
>(({ as = "em", className, ...rest }, ref) => {
  return (
    <Default
      className={classNames("text-red-500", className)}
      ref={ref}
      as={as}
      {...rest}
    />
  );
});

export default Object.assign(Default, { Error });
