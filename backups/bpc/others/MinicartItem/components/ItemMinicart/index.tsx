import React, { useContext } from 'react';
import styles from './styles.css';
import { useOrderItems } from 'vtex.order-items/OrderItems';
import { Item } from '../../typings';
import { ToastContext, ToastContextType } from 'vtex.styleguide';
import { useItemStock } from './useItemStock';
import { useQuantityChange } from './useQuantityChange';

interface ItemsProps {
  item: Item;
  index: number;
}

export const ItemMinicart = ({ item, index }: ItemsProps) => {
  const priceFormatted = (item?.price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const { removeItem } = useOrderItems()
  const { showToast } = useContext<ToastContextType>(ToastContext)
  const changeQuantity = useQuantityChange()
  const itemId = item.id
  const productId = item?.productId
  const sellerId = item?.seller
  const stock = useItemStock(productId, itemId, sellerId)
  const maxProduct = stock >= 15 ? 15 : stock
  const selectedQuantityInitial = item?.quantity
  const skuSpecifications = item?.skuSpecifications
  const findFieldNameSku = skuSpecifications?.filter((element) => element?.fieldName === "Tamanho")
  const skuValue = findFieldNameSku?.[0].fieldValues?.[0]



  function generateOptions(): JSX.Element[] {
    const options = [];
    for (let i = 0; i <= maxProduct; i++) {

      if (i === selectedQuantityInitial) {
        options.push(
          <option key={i} value={i} selected>
            {i}
          </option>
        );

        if (item?.refId?.includes('BPC')) break;
      } else {
        options.push(
          <option key={i} value={i}>
            {i}
          </option>
        );
      }
    }
    return options;
  }

  const handleRemove = (item: Item) => {
    showToast({
      message: `Produto foi removido do carrinho.`,
      duration: 2000,
    });
    removeItem(item);
  };

  return (
    <>
      <div className={styles.containerItemMinicart}>
        <div className={styles.containerNamePrice}>
          <p className={styles.nameProduct}>{item?.name}</p>
          <p className={styles.valueProduct}>{priceFormatted}</p>
        </div>
        <div className={styles.containerImg}>
          <img src={item?.imageUrls?.at3x} />
        </div>
        <div className={styles.containerSKU}>
          <div className={styles.containerseletors}>
            <div className={styles.containerSKUSize}>
              <p className={styles.titleTam}>Tamanho</p>
              <p className={styles.valueSKUSize}>{skuValue}</p>
            </div>
            <div className={styles.containerQuantity}>
              <p className={styles.titleTam}>Quantidade</p>
              <select name="select" onChange={(e) => changeQuantity(index, Number(e.target.value))} className={styles.containerSelect}>
                {generateOptions()}
              </select>
            </div>
          </div>
          <button className={styles.buttonRemove} onClick={() => handleRemove(item)}>
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.47461 19.6631H13.5342C14.791 19.6631 15.6348 18.8457 15.6963 17.5889L16.3027 4.80957H17.3574C17.7178 4.80957 18.0078 4.50195 18.0078 4.1416C18.0078 3.78125 17.7178 3.48242 17.3574 3.48242H13.3408V2.1377C13.3408 0.863281 12.5146 0.0898438 11.1611 0.0898438H7.82129C6.46777 0.0898438 5.6416 0.863281 5.6416 2.1377V3.48242H1.65137C1.2998 3.48242 0.992188 3.78125 0.992188 4.1416C0.992188 4.51074 1.2998 4.80957 1.65137 4.80957H2.70605L3.3125 17.5977C3.37402 18.8545 4.2002 19.6631 5.47461 19.6631ZM7.03906 2.22559C7.03906 1.72461 7.39062 1.39941 7.91797 1.39941H11.0645C11.5918 1.39941 11.9434 1.72461 11.9434 2.22559V3.48242H7.03906V2.22559ZM5.59766 18.3359C5.09668 18.3359 4.71875 17.958 4.69238 17.4395L4.07715 4.80957H14.8877L14.3076 17.4395C14.29 17.9668 13.9121 18.3359 13.3936 18.3359H5.59766ZM6.89844 16.833C7.23242 16.833 7.45215 16.6221 7.44336 16.3145L7.1709 6.91016C7.16211 6.60254 6.94238 6.40039 6.62598 6.40039C6.29199 6.40039 6.07227 6.61133 6.08105 6.91895L6.34473 16.3145C6.35352 16.6309 6.57324 16.833 6.89844 16.833ZM9.5 16.833C9.83398 16.833 10.0713 16.6221 10.0713 16.3145V6.91895C10.0713 6.61133 9.83398 6.40039 9.5 6.40039C9.16602 6.40039 8.9375 6.61133 8.9375 6.91895V16.3145C8.9375 16.6221 9.16602 16.833 9.5 16.833ZM12.1104 16.833C12.4268 16.833 12.6465 16.6309 12.6553 16.3145L12.9189 6.91895C12.9277 6.61133 12.708 6.40039 12.374 6.40039C12.0576 6.40039 11.8379 6.60254 11.8291 6.91895L11.5654 16.3145C11.5566 16.6221 11.7764 16.833 12.1104 16.833Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
