import Element, { TProps } from "@/components/atoms/Element";
import { FC, useMemo } from "react";

const Default: FC<TProps> = (props) => {
  return <Element {...props} />;
};

const Flex: FC<TProps> = (props) => {
  const className = props.className + " flex";
  return <Element {...{ ...props, className }} />;
};

const Grid: FC<TProps> = (props) => {
  return <Element className="grid" {...props} />;
};

const List: FC<TProps> = (props) => {
  return <Element as="ul" {...props} />;
};

const ListItem: FC<TProps> = (props) => {
  return <Element as="li" {...props} />;
};

export default Object.assign(Default, {
  Flex,
  Grid,
  List,
  ListItem,
});
