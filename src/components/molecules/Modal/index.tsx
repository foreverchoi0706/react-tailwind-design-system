import { HTMLAttributes, useCallback } from "react";
import Element, { TProps } from "@/components/atoms/Element";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

interface IModalContext {
  onClose?: () => void;
}

const ModalContext = createContext<IModalContext>({
  onClose: undefined,
});

const Contents: FC<TProps> = (props) => {
  return (
    <Element
      className="border-r-5 relative z-50 w-96 rounded-md border-2 border-gray-200 bg-white p-10"
      {...props}
    />
  );
};

const Body: FC<TProps> = (props) => {
  return <Element {...props} />;
};

const CloseButton: FC<TProps> = (props) => {
  const { onClose } = useContext(ModalContext);
  return (
    <Element
      as="button"
      className="absolute top-4 right-6"
      onClick={onClose}
      {...props}
    >
      X
    </Element>
  );
};

const Footer: FC<TProps> = (props) => {
  return <Element {...props} />;
};

const Header: FC<TProps> = (props) => {
  return <Element {...props} />;
};

const Overlay: FC<TProps> = (props) => {
  return (
    <Element
      className="absolute top-0 z-40 h-screen w-screen bg-black opacity-30"
      {...props}
    />
  );
};

export default Object.assign(
  ({ onClose, ...rest }: PropsWithChildren<IModalContext>) => {
    const modal = document.querySelector("#modal");

    if (!modal) {
      console.error("modal element does not exist");
      return null;
    }

    const handleKeydown = useCallback((e: KeyboardEvent) => {
      if (e.key !== "Escape" || !onClose) return;
      onClose();
    }, []);

    useEffect(() => {
      window.addEventListener("keydown", handleKeydown);
      window.document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", handleKeydown);
        window.document.body.style.overflow = "auto";
      };
    }, []);

    return createPortal(
      <ModalContext.Provider value={{ onClose }}>
        <Element
          className="fixed top-0 flex h-screen w-screen flex-col items-center justify-center gap-10"
          {...rest}
        />
      </ModalContext.Provider>,
      modal
    );
  },
  { Contents, CloseButton, Body, Footer, Header, Overlay }
);
