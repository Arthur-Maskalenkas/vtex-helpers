// achando tudo que tenha OBWA231912_
const data = await fetch('/api/catalog_system/pub/products/search?fq=alternateIds_RefId:OBWA231912_*')
const dataJson = await data.json()
console.log(dataJson)