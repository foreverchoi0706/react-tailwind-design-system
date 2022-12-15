import { FC } from "react";
import { useFormContext } from "react-hook-form";
import Element, { TProps } from "@/components/atoms/Element";

const Input: FC = () => {
  const { register } = useFormContext();

  return (
    <Element
      as="input"
      className="w-full border-2 border-solid border-gray-100 p-3 outline-none"
      {...register}
    />
  );
};

const Select: FC = () => {
  return <Element as="select" />;
};

const Option: FC = () => {
  return <Element as="option" />;
};

export default Object.assign(
  ({ ...rest }: TProps) => {
    return <Element as="form" {...rest} />;
  },
  {
    Input,
    Option,
    Select,
  }
);
