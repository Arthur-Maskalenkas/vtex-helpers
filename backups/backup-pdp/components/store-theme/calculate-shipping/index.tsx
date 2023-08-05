import React, { useEffect } from 'react'
import { useBuyBoxContext } from "../../../context";
import { canUseDOM } from 'vtex.render-runtime';


export const CalculateShipping = () => {
  const { SlotComponentShipping } = useBuyBoxContext()

  useEffect(() => {
    if (canUseDOM) {
      const zipInputInterval = setInterval(() => {
        const zipCodeInput = document.querySelector(".vtex-address-form-4-x-input") as HTMLInputElement || null;

        if (zipCodeInput) {
          zipCodeInput.placeholder = "Digite seu CEP";
          clearInterval(zipInputInterval);
        }
      }, 500);
    }
  }, []);

  return (
    <div className="container-app-calculate-shipping container-with-border">
      <SlotComponentShipping />
    </div>
  )
}
