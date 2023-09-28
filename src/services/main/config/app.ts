import { factoryControllerLoadAllCategories } from '../factories/controllers/factoryControllerLoadAllCategories.ts'
import { factoryControllerMapSearchParams } from '../factories/controllers/factoryControllerMapSearchParams.ts'
import { factoryControllerLoadProducts } from "../factories/controllers/factoryControllerLoadProducts.ts";



export const setupApp = () => ({
		category: {
				loadAll: factoryControllerLoadAllCategories()
		},
		product: {
				loadProducts: factoryControllerLoadProducts()
		},
		searchPage: {
				params: factoryControllerMapSearchParams()
		}
})