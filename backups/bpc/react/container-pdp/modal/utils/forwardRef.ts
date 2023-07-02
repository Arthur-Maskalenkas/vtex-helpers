import { ModalScreenNames } from "..";

export type ModalImperativeFunctions = {
  imperativeOpenModal: () => void,
  imperativeCloseModal: () => void,
  imperativeChangeScreen: (screenName: ModalScreenNames) => void
}


export const imperativeOpenModal = (setIsOpen: (isOpen: boolean) => void) => {
  setTimeout(() => {
    setIsOpen(true);
  }, 1000);
};

export const imperativeCloseModal = (setCurrentScreen: (screenName: ModalScreenNames) => void, setIsOpen: (isOpen: boolean) => void) => {
  setCurrentScreen('SecondStep');
  setIsOpen(false);
};

export const imperativeChangeScreen = (setCurrentScreen: (screenName: ModalScreenNames) => void, screenName: ModalScreenNames) => {
  setCurrentScreen(screenName);
};
