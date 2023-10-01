import { ControllerLoadProducts } from "../../../presentation/controllers/loadProducts.ts";
import { factoryUsecaseLoadProducts } from "../useCases/factoryUsecaseLoadProducts.ts";



export const factoryControllerLoadProducts = () => {
		const usecaseLoadProducts = factoryUsecaseLoadProducts()
		const controller = new ControllerLoadProducts(usecaseLoadProducts)

		return controller
}