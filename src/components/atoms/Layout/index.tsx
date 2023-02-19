import { forwardRef, HTMLAttributes, LiHTMLAttributes } from "react";
import classNames from "classnames";
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
  return (
    <Element ref={ref} className={classNames("flex", className)} {...rest} />
  );
});

const Grid = forwardRef<
  HTMLDivElement,
  PropsWithAsChildren<HTMLAttributes<HTMLDivElement>>
>(({ className, ...rest }, ref) => {
  return (
    <Element ref={ref} className={classNames("grid", className)} {...rest} />
  );
});

const List = forwardRef<
  HTMLUListElement,
  PropsWithAsChildren<HTMLAttributes<HTMLUListElement>>
>((props, ref) => {
  return <Element as="ul" ref={ref} {...props} />;
});

const ListItem = forwardRef<
  HTMLLIElement,
  PropsWithAsChildren<LiHTMLAttributes<HTMLLIElement>>
>((props, ref) => {
  return <Element as="li" ref={ref} {...props} />;
});

export default Object.assign(Default, {
  Flex,
  Grid,
  List,
  ListItem,
});
