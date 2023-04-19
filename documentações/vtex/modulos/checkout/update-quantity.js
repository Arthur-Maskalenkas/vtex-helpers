// função:
// Atualiza e remove produtos

// Manifest:
//"vtex.order-items": "0.x"

// link pacote:
// https://github.dev/vtex-apps/order-items

import { useOrderItems } from 'vtex.order-items/OrderItems'
const { updateQuantity } = useOrderItems()

if (hasProductTestOnCart) {
  new Promise(resolve => setTimeout(resolve, 2000)).then(async () => {
    await updateQuantity(
      { seller: '1', id: '697', quantity: 0 }, {}
    )
  })
}