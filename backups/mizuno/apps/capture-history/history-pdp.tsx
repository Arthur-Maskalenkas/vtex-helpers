import React from 'react'
import { useProduct } from 'vtex.product-context'
import { getLocalStorage, setLocalStorage } from '../../modules/default/others/manager-local-storage'
import { CaptureHistory } from './capture-history'

export const HistoryPdp = () => {
  // Pegando os dados necessários para persistir a categoria no local storage
  const ctx = useProduct()
  const categoryThree = ctx?.product?.categoryTree
  const currentCategory = categoryThree?.[categoryThree?.length - 1]?.name

  if (!currentCategory) return <></>

  // Persistindo os dados no local storage
  const captureHistory = new CaptureHistory(getLocalStorage, setLocalStorage)
  captureHistory.persistHistory([currentCategory])

  return <></>
}
