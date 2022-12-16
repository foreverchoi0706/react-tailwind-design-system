import {
  createElement,
  ElementType,
  FC,
  memo,
  PropsWithChildren,
  HTMLProps,
} from "react";

export type TProps = { as?: ElementType } & PropsWithChildren<
  HTMLProps<HTMLElement>
>;

const Element: FC<TProps> = ({ as = "div", ...rest }) => {
  return createElement(as, rest);
};

export default memo(Element);
