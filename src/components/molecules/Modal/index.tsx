import {
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  useCallback,
} from "react";
import Element from "@/components/atoms/Element";
import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import { createPortal } from "react-dom";

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
        className="border-r-5 relative h-full w-full rounded-none border border-gray-200 bg-white p-10 md:h-auto md:w-96 md:rounded-md"
        ref={ref}
        {...props}
      />
    );
  }
);

const Body = forwardRef<HTMLBodyElement, HTMLAttributes<HTMLBodyElement>>(
  (props, ref) => {
    return <main ref={ref} {...props} />;
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

const Footer = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return <footer className="mb-10" ref={ref} {...props} />;
  }
);

const Header = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return <header className="mb-10" ref={ref} {...props} />;
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
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      console.log(document.body.style.top);

      return () => {
        window.removeEventListener("keydown", handleKeydownWindow);

        const top = parseInt(document.body.style.top || "0");
        console.log(top);

        if (top) {
          window.scrollTo(0, top * -1);
        }

        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
      };
    }, []);

    return createPortal(
      <ModalContext.Provider value={{ onClose }}>
        <Element
          className="fixed top-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-10"
          {...rest}
        />
      </ModalContext.Provider>,
      modal
    );
  },
  { Contents, CloseButton, Body, Footer, Header, Overlay, Title }
);
