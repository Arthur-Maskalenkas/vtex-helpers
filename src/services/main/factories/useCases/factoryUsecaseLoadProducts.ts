import { UsecaseLoadProducts } from "../../../data/useCases/loadProducts.ts";
import { RepositoryProduct } from "../../../infra/repository/product.ts";
import { MapperSearchProductParams } from "../../../infra/mapper/params/searchProductParams.ts";



export const factoryUsecaseLoadProducts = () => {
		const repositoryProduct = new RepositoryProduct()
		const mapperSearchProductParams = new MapperSearchProductParams()

		return new UsecaseLoadProducts(repositoryProduct, repositoryProduct, mapperSearchProductParams)
}