import Element, { TProps } from "@/components/atoms/Element";
import { createContext, FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext({});

const Contents: FC<TProps> = (props) => {
    return <Element className="border-gray-200 border-2 border-r-5 p-10" {...props} />
}

const Body: FC<TProps> = (props) => {
    return <Element {...props} />
}

const Footer: FC<TProps> = (props) => {
    return <Element {...props} />
}

const Header: FC<TProps> = (props) => {
    return <Element {...props} />
}

export default Object.assign((props: PropsWithChildren) => {
    const modal = document.querySelector("#modal");
    if (!modal) {
        console.error("modal element does not exist");
        return null;
    };
    return createPortal(<ModalContext.Provider value={{}}>
        <Element className="fixed w-screen h-screen top-0 flex flex-col gap-10  justify-center items-center" {...props} />
    </ModalContext.Provider>, modal);
}, { Contents, Body, Footer, Header });