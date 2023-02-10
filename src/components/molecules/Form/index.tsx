import {
  createContext,
  forwardRef,
  useContext,
  useId,
  FormHTMLAttributes,
  DetailedHTMLProps,
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
>(({ children, ...rest }, ref) => {
  const id = useId();
  return (
    <FieldContext.Provider value={{ id: rest.id || id }}>
      <div className="relative" ref={ref}>
        {children}
      </div>
    </FieldContext.Provider>
  );
});

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { id } = useContext(FieldContext);
  const className =
    props.className + "  w-full rounded-md border p-3 outline-none";
  return <input ref={ref} id={id} {...{ ...props, className }} />;
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
