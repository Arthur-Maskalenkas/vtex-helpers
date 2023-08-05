import React from 'react';
import { useProduct } from 'vtex.product-context';
import style from './styles.css';

export type childrenProps = {
  children: React.ReactNode;
};

const PdpPremiumHTML = ({ children }: childrenProps) => {
  const contextProduct = useProduct();
  const arrayProperties = contextProduct?.product?.properties;
  const findHTML = arrayProperties?.filter((el: { name: string }) => el.name === 'Desc Premium');
  const findPositionHTML = findHTML?.[0]?.values?.[0];
  console.log(`🚀 ~ file: index.tsx:14 ~ PdpPremiumHTML ~ findPositionHTML:`, findPositionHTML)

  return <>{findPositionHTML ? <div className={style.containerPdpPremium2} dangerouslySetInnerHTML={{ __html: findPositionHTML }}></div> : <div>{children}</div>}</>;
};
export default PdpPremiumHTML;
