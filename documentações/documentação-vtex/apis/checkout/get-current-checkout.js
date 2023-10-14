const getCurrentCheckout = async () => {
  const data = await fetch('/api/checkout/pub/orderForm').then((response) => response.json())

  return data
}

await getCurrentCheckout()