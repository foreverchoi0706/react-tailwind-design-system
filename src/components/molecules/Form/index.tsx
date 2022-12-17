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
import useFlag from "@/hooks/useFlag";

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
    <FieldContext.Provider value={{ ...rest, id: rest.id || id }}>
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
      className="w-full rounded-md border p-3 outline-none"
      id={id}
      {...props}
      {...register(name)}
    />
  );
};

const Label: FC<TProps> = (props) => {
  const { id } = useContext(FieldContext);
  return (
    <Element
      as="label"
      className="absolute -top-2.5 left-2 z-50 bg-white text-gray-500"
      htmlFor={id}
      {...props}
    />
  );
};

const Option: FC<TProps> = (props) => {
  return (
    <Element
      as="li"
      className="w-full cursor-pointer p-3 hover:bg-gray-100"
      {...props}
    />
  );
};

const Select: FC<TProps> = (props) => {
  const { name } = useContext(FieldContext);
  const [fold, handleClickSelect] = useFlag();
  return (
    <Element
      as="div"
      className={`relative cursor-pointer p-3 ${
        fold
          ? "rounded-tr-md rounded-tl-md border-r border-l border-t"
          : "rounded-md border"
      }`}
      onClick={handleClickSelect}
      {...props}
    >
      {name}
      {fold && (
        <Element
          as="ul"
          className="absolute top-12 left-0 max-h-64 w-full overflow-auto rounded-br-md rounded-bl-md border-r border-l border-b bg-white scrollbar-hide"
          {...props}
        ></Element>
      )}
    </Element>
  );
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
