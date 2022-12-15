import {
  createElement,
  ElementType,
  FC,
  memo,
  PropsWithChildren,
  HTMLProps,
  HTMLAttributes,
} from "react";

export type TProps = { as?: ElementType } & PropsWithChildren<
  HTMLProps<HTMLAttributes<HTMLElement>>
>;

const Element: FC<TProps> = ({ as = "div", ...rest }) => {
  console.log(rest);

  return createElement(as, rest);
};

export default memo(Element);
