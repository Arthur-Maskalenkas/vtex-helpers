// achando tudo que tenha OBWA231912_
const data = await fetch('/api/catalog_system/pub/products/search?fq=alternateIds_RefId:OBWA231912_*')
const dataJson = await data.json()
console.log(dataJson)

// combinando queries. Vai chamar tanto produtos com id 4836 ou id 4844. É o || do js
const getData = async (idProduct) => {
  const response = await fetch(`/api/catalog_system/pub/products/search?fq=productId:4836&fq=productId:4844`)
    .then(response => response.json())

  return response
}

await getData('4836')

// COLOCANDO LIMITE
export const API = {
  getSimilarProducts: (ft?: string) => `/api/catalog_system/pub/products/search?ft=${ft}*&sc=1&_from=0&_to=3`,