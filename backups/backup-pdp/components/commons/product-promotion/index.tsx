import React from 'react';
import { useProduct } from 'vtex.product-context';
import styles from './styles.css'
import { Icon } from './icon';
import { formatCurrency } from "./utils";

export const ProductPromotion = () => {
  const originalProductValue = useProduct()?.selectedItem?.sellers?.[0]?.commertialOffer?.Price ?? 0
  const bonusValue = formatCurrency(Math.min(originalProductValue * 0.2, 250)); // Maximum value of $250

  return (
    <div className={`container-app-product-promotion`}>
      <Icon />
      <div className={'container-text'}>
        <p>RECEBA R$ <strong>{bonusValue}</strong> DE BÔNUS PARA A PRÓXIMA COMPRA. </p>
        <a target='_blank' href='/politica-de-promocoes'>Veja as Regras</a>
      </div>
    </div>
  );
};
