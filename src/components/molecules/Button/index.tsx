import Element, { TProps } from "@/components/atoms/Element";
import { FC } from "react";

const Default: FC<TProps> = (props) => {
  return <Element as="button" {...props} />;
};

const Primary: FC<TProps> = (props) => {
  return <Default className="bg-primary" {...props} />;
};

const Disabled: FC<TProps> = (props) => {
  return <Default className="bg-disabled" {...props} />;
};

export default Object.assign(Default, {
  Primary,
  Disabled,
});
