import {
  factoryControllerLoadAllCategories
} from '../../main/factories/controllers/factoryControllerLoadAllCategories.ts'
import { factoryControllerMapSearchParams } from '../../main/factories/controllers/factoryControllerMapSearchParams.ts'

export const setupApp = () => ({
  category: {
    loadAll: factoryControllerLoadAllCategories()
  },

  searchPage: {
    params: factoryControllerMapSearchParams()
  }
})