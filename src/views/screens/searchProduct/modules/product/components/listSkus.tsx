import { Styleds as S } from "./styleds.tsx";
import { useSearchProductContext } from "../../../context";



export const ListSkus = () => {
		const { states } = useSearchProductContext()

		const skus = states?.product?.currentProduct?.skus

		return (
				<S.Section>
						<S.AttrTitle>Skus</S.AttrTitle>
						<S.List>
								{skus?.map((sku, index) => {
										const { currentPrice, oldPrice, id, name, isAvailable, quantity, image } = sku
										return (
												<li key={index}>
														<S.AttrTitle>Nome do Produto</S.AttrTitle>
														<S.AttrDescription>{name}</S.AttrDescription>

														<S.AttrTitle>Id do Produto</S.AttrTitle>
														<S.AttrDescription>{id}</S.AttrDescription>

														<S.AttrTitle>Disponibilidade</S.AttrTitle>
														<S.AttrDescription>{isAvailable}</S.AttrDescription>

														<S.AttrTitle>Quantidade</S.AttrTitle>
														<S.AttrDescription>{quantity}</S.AttrDescription>

														<S.AttrTitle>Preço Antigo</S.AttrTitle>
														<S.AttrDescription>{oldPrice}</S.AttrDescription>

														<S.AttrTitle>Preço Atual</S.AttrTitle>
														<S.AttrDescription>{currentPrice}</S.AttrDescription>

														<S.AttrTitle>Imagem</S.AttrTitle>
														<img src={image}/>
												</li>
										)
								})}
						</S.List>
				</S.Section>
		)
}