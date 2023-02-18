import Element, { PropsWithAsChildren } from "@/components/atoms/Element";
import { forwardRef, HTMLAttributes, LiHTMLAttributes } from "react";

const Default = forwardRef<
  HTMLDivElement,
  PropsWithAsChildren<HTMLAttributes<HTMLDivElement>>
>((props, ref) => {
  return <Element ref={ref} {...props} />;
});

const Flex = forwardRef<
  HTMLDivElement,
  PropsWithAsChildren<HTMLAttributes<HTMLDivElement>>
>((props, ref) => {
  const className = props.className + " flex";
  return <Element ref={ref} {...{ ...props, className }} />;
});

const Grid = forwardRef<
  HTMLDivElement,
  PropsWithAsChildren<HTMLAttributes<HTMLDivElement>>
>((props, ref) => {
  const className = props.className + " grid";
  return <Element ref={ref} {...{ ...props, className }} />;
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
