import { useEffect } from "react";
import { imperativeCloseModal } from "./forwardRef";
import { ModalScreenNames } from "..";

export const useModalEffect = (isOpen: boolean, setCurrentScreen: (screenName: ModalScreenNames) => void, setIsOpen: (isOpen: boolean) => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        imperativeCloseModal(setCurrentScreen,setIsOpen);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, imperativeCloseModal]);
};
