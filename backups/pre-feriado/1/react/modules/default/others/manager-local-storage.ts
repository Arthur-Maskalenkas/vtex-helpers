// funções responsaveis por adicionar e remover local storage

export type LocalStorageValues = "search-categories" | "produc-pdp" | "products-minicart"

export type TGetLocalStorage = (key:LocalStorageValues) => {data:any} | null
export type TSetLocalStorage = (key:LocalStorageValues, value: {data:any}) => void

export const getLocalStorage = (key: LocalStorageValues): {data:any} | null => {
  const value = window.localStorage.getItem(`AVANTI-${key}`)

  if (!value) {
    return null
  }

  const parsedValue = JSON.parse(value)

   return parsedValue
}

export const setLocalStorage = (key: LocalStorageValues, value: {data:any}) => {
  window.localStorage.setItem(`AVANTI-${key}`, JSON.stringify(value))
}
