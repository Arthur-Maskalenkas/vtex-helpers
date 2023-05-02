export type LocalStorageValues = 'search-categories' | 'produc-pdp' | 'products-minicart'

export class LocalStorageManager {
  public get (key: LocalStorageValues): { data: any } | null {
    const value = window.localStorage.getItem(`AVANTI-${key}`)

    if (!value) {
      return null
    }

    return JSON.parse(value)
  }

  public set (key: LocalStorageValues, value: { data: any }) {
    window.localStorage.setItem(`AVANTI-${key}`, JSON.stringify(value))
  }
}