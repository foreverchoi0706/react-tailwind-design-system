import {
  createElement,
  ElementType,
  memo,
  PropsWithChildren,
  HTMLProps,
  DetailedHTMLProps,
  forwardRef,
  HTMLAttributes,
} from "react";

export type TProps = { as?: ElementType } & PropsWithChildren<
  HTMLProps<HTMLElement>
>;

export type PropsWithAsChildren<T = HTMLElement> = {
  as?: ElementType;
} & PropsWithChildren<DetailedHTMLProps<HTMLAttributes<T>, T>>;

const Element = forwardRef<HTMLElement, PropsWithAsChildren>(
  ({ as = "div", ...rest }, ref) => {
    return createElement(as, {
      ref,
      ...rest,
    });
  }
);

export default memo(Element);
