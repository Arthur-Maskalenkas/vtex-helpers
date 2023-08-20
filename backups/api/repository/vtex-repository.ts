export class VtexRepository {
  baseUrl = 'https://arthurdev--olympikusio.myvtex.com';

  async fetchPage(page: string) {
    const fullUrl = `${this.baseUrl}${page}`

    console.log(`🚀 Requisição sendo feita para a url `, fullUrl)
    return  fetch(fullUrl).then(r => r.text())
  }

  async fetchAllCategories() {
    const categories = await fetch(`/api/catalog_system/pub/category/tree/3/`)
    const categoriesJSON = await categories.json()


    const result = []

    const dfs = (category, path) => {
      const categoryFormatted = category.name.replace(/\s/g, '-').replace(/ç/gi, 'c').replace(/ã/gi, 'a').replace(/é/gi, 'e').replace(/ê/gi, 'e').replace(/í/gi, 'i').replace(/ó/gi, 'o').replace(/ô/gi, 'o').replace(/ú/gi, 'u').replace(/à/gi, 'a').replace(/á/gi, 'a').replace(/õ/gi, 'o').replace(/ü/gi, 'u').replace(/ñ/gi, 'n').replace(/&/gi, 'e').toLowerCase()

      const id = path
        ? `${path}/${categoryFormatted}`
        : `/${categoryFormatted}`
      result.push(id.toString())

      if (category.children) {
        category.children.forEach(child => { dfs(child, id.toString()) })
      }
    }



    categoriesJSON?.forEach(category => { dfs(category, '') })

    return result
  }

}
