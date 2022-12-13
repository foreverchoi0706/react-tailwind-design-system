import { createContext, FC, PropsWithChildren } from "react";
import Element, { TProps } from "@/components/atoms/Element";

interface ITextContext { }

const TextContext = createContext<ITextContext>({});

const Text: FC<TProps> = ({ children, ...rest }) => {
    return <Element {...rest}>{children}</Element>
}

const Primary: FC<TProps> = (props) => {
    return <Element {...props} />
}

const Secondary: FC<TProps> = ({ children, ...rest }) => {
    return <Element {...rest}>{children}</Element>
}

export default Object.assign(Text, {
    Primary,
    Secondary
});