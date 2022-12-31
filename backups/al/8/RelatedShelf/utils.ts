export const answerList = [
  {
    name: '56',
    value: 'Pequeno'
  }
]


const encodedFilters =  (answerList:any) => answerList?.map((filter:any) => {
  const key = encodeURIComponent(filter.name || '')
  const value = encodeURIComponent(filter?.value || '')
  return `fq=specificationFilter_${key}:${value}`
})

export const urlApi = (answerList:any) => `/api/catalog_system/pub/products/search?${encodedFilters(answerList)?.join('&')}`
console.log('url gerada', urlApi)


