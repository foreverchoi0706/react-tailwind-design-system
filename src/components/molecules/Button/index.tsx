import Element, { TProps } from "@/components/atoms/Element";
import { FC } from "react";

const Default: FC<TProps> = (props) => {
  const className = props.className + "  border w-full p-3 rounded-md";
  return <Element as="button" {...{ ...props, className }} />;
};

const Disabled: FC<TProps> = (props) => {
  const className = props.className + " bg-disabled";
  return <Default {...{ ...props, className }} />;
};

const Primary: FC<TProps> = (props) => {
  const className = props.className + " bg-primary";
  return <Default {...{ ...props, className }} />;
};

const Text: FC<TProps> = (props) => {
  return <Element as="button" {...props} />;
};

export default Object.assign(Default, {
  Disabled,
  Primary,
  Text,
});
