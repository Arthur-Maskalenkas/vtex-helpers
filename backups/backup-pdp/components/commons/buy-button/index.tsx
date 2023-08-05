/* eslint-disable import/order */
import React, { useContext, useEffect, useState } from 'react';
import { useMutation } from 'react-apollo';
import { useOrderForm } from 'vtex.order-manager/OrderForm';
import type { ToastContextType } from 'vtex.styleguide';
import { ToastContext } from 'vtex.styleguide';
import { useOrderItems } from 'vtex.order-items/OrderItems';
import { operationQuantityItemOnMinicart } from './utils';
import { useProduct } from 'vtex.product-context';
import { usePixel } from 'vtex.pixel-manager';
import { mapCartItemToPixel } from './pixelHelper';
import { Spinner } from 'vtex.styleguide'

import ADD_ITEM from './addItem.gql';
import styles from './styles.css';
import { ProductContextState } from "vtex.product-context/react/ProductTypes";
import { ButtonVariations } from './button-variations';
import { Layout } from '../../layout';

type AddToCartProps = {
  itemId: string;
  sellerId: string;
  availableQuantity: number;
};

export const AddToCart = () => {
  // @ts-ignore
  const { product, selectedItem }: ProductContextState = useProduct()
  console.log(`🚀 ~ file: index.tsx:27 ~ AddToCart ~ product:`, product)
  const { itemId, sellerId, availableQuantity } = {
    itemId: selectedItem?.itemId,
    sellerId: product?.items[0]?.sellers[0]?.sellerId,
    availableQuantity: selectedItem?.sellers[0]?.commertialOffer?.AvailableQuantity,
  }

  if (!itemId || !sellerId || !availableQuantity) {
    return <></>
  }

  const [productQuantity, setProductQuantity] = useState(0);
  const productContext = useProduct();
  const { updateQuantity } = useOrderItems();
  const sellingPrice = productContext?.product?.priceRange?.sellingPrice?.lowPrice;

  const sellingPriceFormatted = sellingPrice?.toString().replace('.', ',');

  const { showToast } = useContext<ToastContextType>(ToastContext);
  const { push } = usePixel();

  const { orderForm, setOrderForm } = useOrderForm();

  const [addItem, { loading }] = useMutation<OrderForm, any>(ADD_ITEM, {
    onCompleted: (data: any) => {
      const orderFormData = data?.addToCart;
      setOrderForm((prevOrderForm: any) => {
        return {
          ...prevOrderForm,
          ...orderFormData,
        };
      });

      const pixelEventItems = orderFormData?.items?.map(mapCartItemToPixel);
      push({
        id: 'add-to-cart-button',
        event: 'addToCart',
        items: pixelEventItems,
      });
    },
  });
  const handleClickQuantity = (operation: 'removeFromCart' | 'addToCart' | 'first-item') => {
    if (operation === 'first-item' && !!availableQuantity) {
      addItem({
        variables: {
          items: [
            {
              id: Number(itemId),
              quantity: productQuantity + 1,
              seller: sellerId,
            },
          ],
        },
      });

      return;
    }

    if ((operation === 'addToCart' && productQuantity >= availableQuantity) || productQuantity - 1 < 0 || !availableQuantity) {
      console.log(`🚀 ~ file: index.tsx:86 ~ handleClickQuantity ~ availableQuantity:`, availableQuantity)
      return;
    }

    const operationValue = operationQuantityItemOnMinicart(operation, productQuantity, showToast);
    updateQuantity({ seller: String(sellerId), quantity: operationValue, id: String(itemId) }, {});
    setProductQuantity(operationValue);
  };

  useEffect(() => {
    const [quantityOnCart] = orderForm?.items.filter((item: any) => item.id === itemId).map((item: { quantity: any }) => item.quantity);

    setProductQuantity(quantityOnCart | 0);
  }, [itemId, orderForm.items]);

  return (
    <div className={`container-app-add-to-cart no-reset-children `}>
      <Layout.SubmitButton >
        {productQuantity >= 1 ? (
          <ButtonVariations.AddQuantity
            handleClickQuantity={handleClickQuantity}
            productQuantity={productQuantity}
          />
        ) : (
          <ButtonVariations.AddToCart
            handleClickQuantity={handleClickQuantity}
            isLoading={loading}
            sellingPriceFormatted={sellingPriceFormatted} />
        )}
      </Layout.SubmitButton>
      {availableQuantity === productQuantity && (
        <p className={'text-limit-stock'}>Você atingiu o limite máximo do estoque.</p>
      )}
    </div>
  );
}
