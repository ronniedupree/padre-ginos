import React, { useEffect, useRef, type MutableRefObject } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const elRef: MutableRefObject<HTMLElement | undefined> = useRef();
  
  if (elRef.current === undefined) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");

    if (modalRoot && elRef.current) {
      modalRoot.appendChild(elRef.current);
      return () =>  { 
        modalRoot.removeChild(elRef.current!);
      }
    }
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;