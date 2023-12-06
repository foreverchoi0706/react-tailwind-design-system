import React,{
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  useCallback,
} from "react";
import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./index.module.css";

export interface IModalContext {
  onClose?: () => void;
}

const ModalContext = createContext<IModalContext>({
  onClose: undefined,
});

const Contents = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return (
      <div
        className={`${styles.modal_wrapper} fixed top-0 z-50 flex w-screen flex-col items-center justify-center gap-10`}
      >
        <div
          ref={ref}
          className="border-r-5 relative flex h-full w-full flex-col rounded-none border border-gray-200  bg-white md:h-auto md:w-auto md:rounded-md"
          {...props}
        />
      </div>
    );
  }
);
Contents.displayName="Contents";

const CloseButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { onClose } = useContext(ModalContext);
  return (
    <button
      ref={ref}
      className="absolute top-4 right-6"
      onClick={onClose}
      {...props}
    >
      X
    </button>
  );
});
CloseButton.displayName="CloseButton"

const Header = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return <header ref={ref} className="bg-gray-100 p-6" {...props} />;
  }
);
Header.displayName="Header";

const Body = forwardRef<HTMLBodyElement, HTMLAttributes<HTMLBodyElement>>(
  (props, ref) => {
    return (
      <main ref={ref} className="flex-grow overflow-y-auto px-4" {...props} />
    );
  }
);
Body.displayName="Body";

const Footer = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <footer
        ref={ref}
        className=" bottom-0 w-full bg-gray-100 p-6 "
        {...props}
      />
    );
  }
);
Footer.displayName ="Footer";

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
        {rest.children}
      </ModalContext.Provider>,
      modal
    );
  },
  { Contents, CloseButton, Body, Footer, Header }
);
