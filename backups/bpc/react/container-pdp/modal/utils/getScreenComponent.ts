import { ModalScreenNames } from '..';
import { ModalCoupon } from "../modal-coupon";
import { ModalSecondStep } from "../modal-second-step";
import { ModalWarning } from "../modal-warning";

export const getScreenComponent = (currentScreen: ModalScreenNames) => {
  const screens = {
    Coupon: ModalCoupon,
    Warning: ModalWarning,
    SecondStep: ModalSecondStep
  }
  return screens[currentScreen];
};
