import classNames from "classnames";
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

interface IFieldContext {
  id?: string;
}

const FieldContext = createContext<IFieldContext>({
  id: undefined,
});

const Field = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & IFieldContext
>(({ children, className, ...rest }, ref) => {
  const id = useId();
  return (
    <FieldContext.Provider value={{ id: rest.id || id }}>
      <div className={classNames("relative", className)} ref={ref} {...rest}>
        {children}
      </div>
    </FieldContext.Provider>
  );
});

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => {
  const { id } = useContext(FieldContext);
  return (
    <input
      ref={ref}
      id={id}
      className={classNames("relative", className)}
      {...rest}
    />
  );
});

const Label = forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
  const { id } = useContext(FieldContext);
  return <label htmlFor={id} ref={ref} {...props} />;
});

export default Object.assign(
  forwardRef<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>>(
    (props, ref) => {
      return <form autoComplete="off" ref={ref} {...props} />;
    }
  ),
  {
    Field,
    Input,
    Label,
  }
);
