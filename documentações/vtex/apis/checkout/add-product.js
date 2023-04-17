const addProduct = async (idProduct, quantity = 1, seller = "1") => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: {
      orderItems: [
        {
          quantity,
          seller,
          id: idProduct,
          index: 0
        }
      ]
    }
  };

  const orderForm = await fetch('/api/checkout/pub/orderForm').then((response) => response.json())

  try {
    const data = await fetch(`/api/checkout/pub/orderForm/${orderForm.orderFormId}/items`, requestOptions)
      .then(response => response.json())

    return data

  } catch (error) {
    console.log(error)
    return
  }

}

await addProduct('697')