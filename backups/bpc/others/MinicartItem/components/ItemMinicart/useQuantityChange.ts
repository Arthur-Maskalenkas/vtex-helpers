import { useOrderItems } from 'vtex.order-items/OrderItems';

export const useQuantityChange = () => {
  const { updateQuantity } = useOrderItems();

  return (itemIndex: number, itemQuantity: number) => {
    updateQuantity({ index: itemIndex, quantity: itemQuantity }, { allowedOutdatedData: ['paymentData'] });
  };
};
