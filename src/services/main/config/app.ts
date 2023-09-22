import { factoryControllerLoadAllCategories } from '../factories/controllers/factoryControllerLoadAllCategories.ts'
import { factoryControllerMapSearchParams } from '../factories/controllers/factoryControllerMapSearchParams.ts'



export const setupApp = () => ({
		category: {
				loadAll: factoryControllerLoadAllCategories()
		},

		searchPage: {
				params: factoryControllerMapSearchParams()
		}
})