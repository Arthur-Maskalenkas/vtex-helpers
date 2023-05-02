import React from 'react'
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext'
import { getLocalStorage, setLocalStorage } from '../../modules/default/others/manager-local-storage'
import { CaptureHistory } from './capture-history'

export const HistorySearch = () => {
  // Pegando os dados necessários para persistir a categoria no local storage
  const { searchQuery } = useSearchPage()
  const facets = searchQuery?.variables?.selectedFacets as Array<{ key: string, value: string }>
  const facetsCategories = facets?.filter(item => item.key.includes('category') || item.key === 'c')?.map(item => item.value)

  // Persistindo os dados no local storage
  const captureHistory = new CaptureHistory(getLocalStorage, setLocalStorage)
  captureHistory.persistHistory(facetsCategories)

  return <></>

}