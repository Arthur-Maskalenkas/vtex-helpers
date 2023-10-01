import { ProductInfos } from "./components/productInfos.tsx";
import { ListCollections } from "./components/listCollections.tsx";
import { ListSkuSpecifications } from "./components/listSkuSpecifications.tsx";
import { ListProductSpecifications } from "./components/listProductSpecifications.tsx";
import { ListCategories } from "./components/listCategories.tsx";
import { ListSkus } from "./components/listSkus.tsx";



export const ModuleProduct = () => {
		return (
				<div>
						<ProductInfos/>
						<ListCollections/>
						<ListSkuSpecifications/>
						<ListProductSpecifications/>
						<ListCategories/>
						<ListSkus/>
				</div>
		)
}