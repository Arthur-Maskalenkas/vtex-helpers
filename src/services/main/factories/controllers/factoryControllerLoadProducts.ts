import { ControllerLoadProducts } from "../../../presentation/controllers/loadProducts.ts";
import { factoryUsecaseLoadProducts } from "../useCases/factoryUsecaseLoadProducts.ts";
import { factoryDecoratorControllerCache } from "../decorators/controllers/cache.ts";
import { IUseCaseLoadProducts } from "../../../domain/useCases/loadProducts.ts";



export const factoryControllerLoadProducts = () => {
		const usecaseLoadProducts = factoryUsecaseLoadProducts()
		const controller = new ControllerLoadProducts(usecaseLoadProducts)

		return factoryDecoratorControllerCache<IUseCaseLoadProducts.Params, IUseCaseLoadProducts.Result>(controller)
}