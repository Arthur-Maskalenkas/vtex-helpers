import { ProductInfos } from "./product/components/productInfos.tsx";
import { ListCollections } from "./product/components/listCollections.tsx";
import { ListSkuSpecifications } from "./product/components/listSkuSpecifications.tsx";
import { ListProductSpecifications } from "./product/components/listProductSpecifications.tsx";
import { ListCategories } from "./product/components/listCategories.tsx";
import { ListSkus } from "./product/components/listSkus.tsx";



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