const simulateProduct = async (idProduct, postalcode) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.vtex.ds.v10+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: [
        {
          id: idProduct,
          quantity: 1,
          seller: '1'
        }
      ],
      postalCode: postalcode,
      country: 'BRA',
    })
  };
  const response = await fetch('/api/checkout/pub/orderForms/simulation?RnbBehavior=0', options)
    .then(response => response.json())

  return response
}

await simulateProduct('697', '06460010')