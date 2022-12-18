import { forwardRef, HTMLAttributes, useCallback } from "react";
import Element, {
  PropsWithAsChildren,
  TProps,
} from "@/components/atoms/Element";
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

const Contents = forwardRef<HTMLElement, PropsWithAsChildren<HTMLElement>>(
  (props, ref) => {
    return (
      <Element
        className="border-r-5 relative z-50 w-96 rounded-md border border-gray-200 bg-white p-10"
        ref={ref}
        {...props}
      />
    );
  }
);

const Body = forwardRef<HTMLDivElement, PropsWithAsChildren<HTMLDivElement>>(
  (props, ref) => {
    return <Element ref={ref} {...props} />;
  }
);

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
  return <Element className="mt-10" {...props} />;
};

const Header: FC<TProps> = (props) => {
  return <Element className="mb-10" {...props} />;
};

const Overlay: FC<TProps> = (props) => {
  return (
    <Element
      className="absolute top-0 z-40 h-screen w-screen bg-black opacity-20"
      {...props}
    />
  );
};

const Title: FC<TProps> = (props) => {
  return <Element as="h1" className="text-center" {...props} />;
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
  { Contents, CloseButton, Body, Footer, Header, Overlay, Title }
);
