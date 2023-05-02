import { OrderForm } from 'vtex.checkout-graphql'

export const getOrderForm = async ():Promise<OrderForm> => {
  const data:OrderForm = await fetch('/api/checkout/pub/orderForm').then((response) => response.json())

  return data
}
