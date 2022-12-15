import Element, { TProps } from "@/components/atoms/Element";
import { createContext, FC, PropsWithChildren } from "react";

interface ILayoutContext {}

const LayoutContext = createContext<ILayoutContext>({});

const Box: FC<TProps> = (props) => {
  return <Element {...props} />;
};

const Flex: FC<TProps> = (props) => {
  const className = props.className + " flex";
  return <Element {...{ ...props, className }} />;
};

const Grid: FC<TProps> = (props) => {
  const className = props.className + " grid";
  return <Element {...{ ...props, className }} />;
};

const List: FC<TProps> = (props) => {
  return <Element as="ul" {...props} />;
};

const ListItem: FC<TProps> = (props) => {
  return <Element as="li" {...props} />;
};

export default Object.assign(
  ({ children }: PropsWithChildren) => {
    return (
      <LayoutContext.Provider value={{}}>{children}</LayoutContext.Provider>
    );
  },
  {
    Box,
    Flex,
    Grid,
    List,
    ListItem,
  }
);
