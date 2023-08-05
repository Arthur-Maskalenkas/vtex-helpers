export const operationQuantityItemOnMinicart = (operation: 'removeFromCart' | 'addToCart' | 'first-item', 
productQuantity: number, showToast: ({ duration, message }: { message: string, duration: number }) => void) => {
  let operationValue = 0

  if (operation === "removeFromCart") {
    operationValue = productQuantity - 1

    showToast({
      message: `Produto foi removido do carrinho.`,
      duration: 2000,
    })
  }

  if (operation === 'addToCart') {
    operationValue = productQuantity + 1

    showToast({
      message: `Produto foi adicionado ao carrinho.`,
      duration: 2000,
    })
  }

  return operationValue
}