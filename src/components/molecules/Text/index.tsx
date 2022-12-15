import { createContext, FC, PropsWithChildren } from "react";
import Element, { TProps } from "@/components/atoms/Element";

const Primary: FC<TProps> = (props) => {
 return <Element {...props} />;
};

const Secondary: FC<TProps> = ({ children, ...rest }) => {
 return <Element {...rest}>{children}</Element>;
};

export default Object.assign(
 ({ children, ...rest }: TProps) => {
  return (
   <Element as="p" {...rest}>
    {children}
   </Element>
  );
 },
 {
  Primary,
  Secondary,
 }
);
