import { useSearchProductContext } from "../context";
import { Product } from "../../../../services/domain/internal/models/product.ts";
import { Button } from "../../commons/button/button.tsx";
import { PropsWithChildren } from "react";



const ProductSummary = ({ product }: { product: Product.Current }) => {
		const { currentSku, brand, category, name, categories } = product!
		const { quantity, isAvailable, image, oldPrice, currentPrice, url } = currentSku!
		return (
				<>
						<p>{name}</p>
						<p>{brand}</p>
						<p>{quantity}</p>
						<p>{isAvailable}</p>
						<img src={image}/>
						<p>{oldPrice}</p>
						<p>{currentPrice}</p>
						<p>{url}</p>
						<p>{category.name}</p>
				</>
		)
}


const ButtonGoToProduct = ({ children, product }: PropsWithChildren<{ product: Product.Current }>) => {
		const { dispatch } = useSearchProductContext()

		const handleProduct = (product: Product.Current) => {
				dispatch({ type: 'ACTION_HANDLE_PRODUCT', payload: { data: product } })
		}

		return (
				<Button.Container onClick={() => handleProduct(product)}>
						{children}
				</Button.Container>
		)
}

export const Search = () => {
		const { states } = useSearchProductContext()

		const products = states?.form?.products

		return (
				<div>
						<ul>
								{products?.map((product, index) => (
										<li key={index}>
												<ButtonGoToProduct product={product}>
														<ProductSummary product={product}/>
												</ButtonGoToProduct>
										</li>
								))}
						</ul>
				</div>
		)
}