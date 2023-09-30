import { useSearchProductContext } from "../context";



const ListSkus = () => {
		const { states } = useSearchProductContext()

		const skus = states?.product?.currentProduct?.skus

		return (
				<ul>
						{skus?.map((sku, index) => {
								const { currentPrice, oldPrice, id, url, name, isAvailable, quantity, image } = sku
								return (
										<li key={index}>
												<p>{name}</p>
												<p>{id}</p>
												<p>{isAvailable}</p>
												<p>{quantity}</p>
												<p>{oldPrice}</p>
												<p>{currentPrice}</p>
												<img src={image}/>
										</li>
								)
						})}
				</ul>
		)
}

const CurrentSkuInfos = () => {
		const { states } = useSearchProductContext()

		const { currentPrice, oldPrice, id, url, name, isAvailable } = states?.product?.currentProduct?.currentSku!

		return (
				<div>
						<p>{currentPrice}</p>
						<p>{oldPrice}</p>
						<p>{id}</p>
						<p>{url}</p>
						<p>{name}</p>
						<p>{isAvailable}</p>
				</div>
		)
}

const ProductInfos = () => {
		const { states } = useSearchProductContext()

		const currentProduct = states?.product?.currentProduct

		const { name, id, category, brand, currentSku } = states?.product?.currentProduct!

		return (
				<div>
						<p>{name}</p>
						<p>{id}</p>
						<p>{category.name}</p>
						<p>{brand}</p>
				</div>
		)
}


const ListCollections = () => {
		const { states } = useSearchProductContext()

		const collections = states.product?.currentProduct?.collections

		return (
				<ul>
						{collections?.map((collection, index) => (
								<li key={index}>
										<p>{collection.value}</p>
										<p>{collection.name}</p>
								</li>
						))}
				</ul>
		)

}

const ListSkuSpecifications = () => {
		const { states } = useSearchProductContext()

		const specifications = states.product?.currentProduct?.currentSku?.specifications

		return (
				<ul>
						{specifications?.map((specification, index) => (
								<li key={index}>
										<p>{specification.name}</p>
										<ul>
												{specification.values?.map((value, index) => (
														<li key={index}>
																<p>{value.value}</p>
														</li>
												))}
										</ul>
								</li>
						))}
				</ul>
		)
}


const ListProductSpecifications = () => {
		const { states } = useSearchProductContext()

		const specifications = states.product?.currentProduct?.specifications

		return (
				<ul>
						{specifications?.map((specification, index) => (
								<li key={index}>
										<p>{specification.name}</p>
										<ul>
												{specification.values?.map((value, index) => (
														<li key={index}>
																<p>{value.value}</p>
														</li>
												))}
										</ul>
								</li>
						))}
				</ul>
		)
}


const ListCategories = () => {
		const { states } = useSearchProductContext()

		const categories = states.product?.currentProduct?.categories

		return (
				<ul>
						{categories?.map((category, index) => (
								<li key={index}>
										<p>{category.value}</p>
										<p>{category.name}</p>
								</li>
						))}
				</ul>
		)
}