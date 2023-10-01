import { useSearchProductContext } from "../../context";
import { Container } from "../../../commons/styled/container/container.tsx";
import { ProductSummary } from "./components/productSummary.tsx";



export const Search = () => {
		const { states } = useSearchProductContext()

		const products = states?.form?.products
		return (
				<div>
						<Container.List>
								{products?.map((product, index) => (
										<li key={index}>
												<ProductSummary product={product}/>
										</li>
								))}
						</Container.List>
				</div>
		)
}