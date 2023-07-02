import React from 'react';
import { ItemMinicart } from './components/ItemMinicart';
import { useOrderForm } from 'vtex.order-manager/OrderForm';
import { IOrderForm } from './typings';
import styles from './components/ItemMinicart/styles.css';

const MinicartItem = () => {

  const { orderForm: { items } }: IOrderForm = useOrderForm();

  return (
    <>
      <div className={styles.containerGeral}>
        {items?.map((item, index) => {
          return <ItemMinicart key={item.id} item={item} index={index} />;
        })}
      </div>
    </>
  );
};
export default MinicartItem;
