import { maskText } from "../../modules/default/masks/mask-text";
import { TGetLocalStorage, TSetLocalStorage } from "../../modules/default/others/manager-local-storage";

export class CaptureHistory {
  constructor(
    private readonly getLocalStorage: TGetLocalStorage,
    private readonly setLocalStorage: TSetLocalStorage
    ) {}

  private maxItems:number = 3

  public persistHistory(categoryList?: string[]):void {
    // caso o valor passado seja nulo ou undefined retorne
    if (!categoryList || !categoryList?.length) {
      return
    }

    const categoriesOnHistory = this?.getLocalStorage('search-categories')

    // caso o historico de categorias esteja vazio, persista apenas a lista de categorias passada
  if (!categoriesOnHistory?.data) {
    this.setLocalStorage('search-categories', { data: categoryList?.map(item => maskText(item)) })
    return
  }

  // caso o historico de categorias exista, mergee a lista de categorias passada e o historico de categorias
  const mergedCategories = Array.from(new Set([
    ...categoriesOnHistory?.data?.map((item: string) => maskText(item)),
    ...categoryList?.map(item => maskText(item))
  ]))?.filter(Boolean)?.slice(-this.maxItems)

  this.setLocalStorage('search-categories', { data: mergedCategories })
  }
}
