import { twMerge } from "tailwind-merge";

import {
  createContext,
  forwardRef,
  useContext,
  useId,
  FormHTMLAttributes,
  LabelHTMLAttributes,
  InputHTMLAttributes,
  HTMLAttributes,
} from "react";
import Input from "@/components/atoms/Input";

interface IFieldContext {
  id?: string;
}

const FieldContext = createContext<IFieldContext>({
  id: undefined,
});

const RHFField = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & IFieldContext
>(({ children, className, ...rest }, ref) => {
  const id = useId();
  return (
    <FieldContext.Provider value={{ id: rest.id || id }}>
      <div className={twMerge("relative", className)} ref={ref} {...rest}>
        {children}
      </div>
    </FieldContext.Provider>
  );
});

const RHFInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => {
  const { id } = useContext(FieldContext);
  return <Input ref={ref} {...rest} />;
});

const RHFLabel = forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
  const { id } = useContext(FieldContext);
  return (
    <label
      className="absolute -top-4 left-2 bg-white"
      htmlFor={id}
      ref={ref}
      {...props}
    />
  );
});

export default Object.assign(
  forwardRef<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>>(
    (props, ref) => {
      return <form autoComplete="off" ref={ref} {...props} />;
    }
  ),
  {
    Field: RHFField,
    Input: RHFInput,
    Label: RHFLabel,
  }
);
