import { HTMLAttributes } from "react";
import Element, { TProps } from "@/components/atoms/Element";
import {
 createContext,
 FC,
 MouseEventHandler,
 PropsWithChildren,
 useContext,
 useEffect,
} from "react";
import { createPortal } from "react-dom";

interface IModalContext {
 onClose: undefined | MouseEventHandler<HTMLAttributes<HTMLDivElement>>;
}

const ModalContext = createContext<IModalContext>({
 onClose: undefined,
});

const Contents: FC<TProps> = (props) => {
 return (
  <Element
   className="bg-white rounded-lg border-gray-200 border-2 border-r-5 p-10"
   {...props}
  />
 );
};

const Body: FC<TProps> = (props) => {
 return <Element {...props} />;
};

const Footer: FC<TProps> = (props) => {
 const { onClose } = useContext(ModalContext);
 return <Element onClick={onClose} {...props} />;
};

const Header: FC<TProps> = (props) => {
 return <Element {...props} />;
};

export default Object.assign(
 ({ onClose, ...rest }: PropsWithChildren<IModalContext>) => {
  const modal = document.querySelector("#modal");
  if (!modal) {
   console.error("modal element does not exist");
   return null;
  }

  useEffect(() => {
   window.document.body.style.overflow = "hidden";
   return () => {
    window.document.body.style.overflow = "auto";
   };
  }, []);

  return createPortal(
   <ModalContext.Provider value={{ onClose }}>
    <Element
     className="fixed w-screen h-screen top-0 flex flex-col gap-10  justify-center items-center"
     {...rest}
    />
   </ModalContext.Provider>,
   modal
  );
 },
 { Contents, Body, Footer, Header }
);
