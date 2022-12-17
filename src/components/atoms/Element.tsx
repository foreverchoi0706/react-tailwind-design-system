import {
  createElement,
  ElementType,
  FC,
  memo,
  PropsWithChildren,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  HTMLProps,
} from "react";

export type TProps = { as?: ElementType } & PropsWithChildren<
  HTMLProps<HTMLElement>
>;

export type TProps2<T> = ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<{ as?: ElementType }>> & RefAttributes<T>
>;

const Element: FC<TProps> = ({ as = "div", ...rest }) => {
  return createElement(as, rest);
};

export default memo(Element);
