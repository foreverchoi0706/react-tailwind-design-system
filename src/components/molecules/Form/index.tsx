import {
  createContext,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  PropsWithChildren,
  useContext,
  useId,
} from "react";
import { useFormContext } from "react-hook-form";
import Element, { TProps } from "@/components/atoms/Element";

interface IFieldContext {
  id?: string;
  name: string;
}

const FieldContext = createContext<IFieldContext>({
  id: undefined,
  name: "",
});

const Field: FC<PropsWithChildren<IFieldContext>> = ({ children, ...rest }) => {
  const id = useId();
  return (
    <FieldContext.Provider value={{ id: rest.id || id, name: rest.name }}>
      <Element as="div" className="relative">
        {children}
      </Element>
    </FieldContext.Provider>
  );
};

const Input: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = (props) => {
  const { id, name } = useContext(FieldContext);
  const { register } = useFormContext();
  return (
    <Element
      as="input"
      className="w-full rounded-md border-2 border-solid border-gray-100 p-3 outline-none"
      {...register(name)}
      id={id}
      {...props}
    />
  );
};

const Label: FC<TProps> = (props) => {
  const { id } = useContext(FieldContext);
  return (
    <Element
      as="label"
      className="absolute -top-2.5 left-2 bg-white text-gray-500 "
      htmlFor={id}
      {...props}
    />
  );
};

const Option: FC = () => {
  return <Element as="option" />;
};

const Select: FC = () => {
  return <Element as="select" />;
};

export default Object.assign(
  ({
    ...rest
  }: DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >) => {
    return <Element as="form" {...rest} />;
  },
  {
    Field,
    Input,
    Label,
    Select,
    Option,
  }
);
