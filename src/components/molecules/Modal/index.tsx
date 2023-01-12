import {
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  useCallback,
} from "react";
import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.css";

interface IModalContext {
  onClose?: () => void;
}

const ModalContext = createContext<IModalContext>({
  onClose: undefined,
});

const Contents = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return (
      <div
        className="border-r-5 relative flex h-full w-full flex-col rounded-none border border-gray-200  bg-white md:h-auto md:w-auto md:rounded-md"
        ref={ref}
        {...props}
      />
    );
  }
);

const CloseButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { onClose } = useContext(ModalContext);
  return (
    <button
      className="absolute top-4 right-6"
      onClick={onClose}
      ref={ref}
      {...props}
    >
      X
    </button>
  );
});

const Header = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return <header className="bg-gray-100 p-6" ref={ref} {...props} />;
  }
);

const Body = forwardRef<HTMLBodyElement, HTMLAttributes<HTMLBodyElement>>(
  (props, ref) => {
    return (
      <main ref={ref} className="flex-grow overflow-y-auto px-10" {...props} />
    );
  }
);

const Footer = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <footer
        className=" bottom-0 w-full bg-gray-100 p-6 "
        ref={ref}
        {...props}
      />
    );
  }
);

const Overlay = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return (
      <div
        className="absolute top-0 -z-10 h-screen w-screen bg-black opacity-40"
        ref={ref}
        {...props}
      />
    );
  }
);

const Title = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  return <h1 className="text-center" ref={ref} {...props} />;
});

export default Object.assign(
  ({ onClose, ...rest }: PropsWithChildren<IModalContext>) => {
    const modal = document.querySelector("#modal");

    if (!modal) {
      console.error("modal element does not exist");
      return null;
    }

    const handleKeydownWindow = useCallback((e: KeyboardEvent) => {
      if (e.key !== "Escape" || !onClose) return;
      onClose();
    }, []);

    useEffect(() => {
      window.addEventListener("keydown", handleKeydownWindow);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", handleKeydownWindow);
        document.body.style.overflow = "";
      };
    }, []);

    return createPortal(
      <ModalContext.Provider value={{ onClose }}>
        <div
          className={`${styles.modal_wrapper} fixed top-0 z-50 flex w-screen flex-col items-center justify-center gap-10`}
          {...rest}
        />
      </ModalContext.Provider>,
      modal
    );
  },
  { Contents, CloseButton, Body, Footer, Header, Overlay, Title }
);
