import {
  createElement,
  ElementType,
  memo,
  PropsWithChildren,
  forwardRef,
  HTMLAttributes,
} from "react";

export type PropsWithAsChildren<
  T extends HTMLAttributes<HTMLElement> = HTMLAttributes<HTMLElement>
> = {
  as?: ElementType;
} & PropsWithChildren<T>;

const Element = forwardRef<HTMLElement, PropsWithAsChildren>(
  ({ as = "div", ...rest }, ref) => {
    return createElement(as, {
      ref,
      ...rest,
    });
  }
);

export default memo(Element);
