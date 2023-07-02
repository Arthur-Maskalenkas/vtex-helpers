import { useEffect } from "react";
import { SetCurrentScreen, SetIsOpen } from "..";

export const useModalEffect = (isOpen: boolean, setCurrentScreen: SetCurrentScreen, setIsOpen: SetIsOpen, imperativeCloseModal: any) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        imperativeCloseModal(setIsOpen,setCurrentScreen);
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
