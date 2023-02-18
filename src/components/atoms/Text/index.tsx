import Element, { PropsWithAsChildren } from "@/components/atoms/Element";
import { forwardRef, HTMLAttributes } from "react";

const Default = forwardRef<
  HTMLElement,
  PropsWithAsChildren<HTMLAttributes<HTMLElement>>
>(({ as = "span", ...rest }, ref) => {
  return <Element ref={ref} as={as} {...rest} />;
});

export default Object.assign(Default, {});
