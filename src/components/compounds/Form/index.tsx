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
import { twMerge } from "tailwind-merge";

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
      <div ref={ref} className={twMerge("relative", className)} {...rest}>
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
      ref={ref}
      className="absolute -top-4 left-2 bg-white"
      htmlFor={id}
      {...props}
    />
  );
});

export default Object.assign(
  forwardRef<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>>(
    (props, ref) => {
      return <form ref={ref} autoComplete="off" {...props} />;
    }
  ),
  {
    Field: RHFField,
    Input: RHFInput,
    Label: RHFLabel,
  }
);
