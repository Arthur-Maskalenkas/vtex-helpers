import { ProductInfos } from "./components/productInfos.tsx";
import { ListCollections } from "./components/listCollections.tsx";
import { ListSkuSpecifications } from "./components/listSkuSpecifications.tsx";
import { ListProductSpecifications } from "./components/listProductSpecifications.tsx";
import { ListCategories } from "./components/listCategories.tsx";
import { ListSkus } from "./components/listSkus.tsx";
import { Container } from "../../../commons/styled/container/container.tsx";



export const ModuleProduct = () => {
		return (
				<Container.Screen>
						<ProductInfos/>
						<ListCollections/>
						<ListSkuSpecifications/>
						<ListProductSpecifications/>
						<ListCategories/>
						<ListSkus/>
				</Container.Screen>
		)
}