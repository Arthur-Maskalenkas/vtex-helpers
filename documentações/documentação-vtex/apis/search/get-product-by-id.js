const getData = async (idProduct) => {
  const response = await fetch(`/api/catalog_system/pub/products/search?fq=productId:${idProduct}`)
    .then(response => response.json())

  return response
}

await getData('4836')