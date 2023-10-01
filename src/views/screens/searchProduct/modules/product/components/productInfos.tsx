import { useSearchProductContext } from "../../../context";

import { Styleds as S } from "./styleds.tsx";



export const ProductInfos = () => {
		const { states } = useSearchProductContext()

		const { name, id, category, brand, currentSku: { isAvailable, quantity, currentPrice, oldPrice } } = states?.product?.currentProduct!
		return (
				<S.Section>
						<S.AttrTitle>Informações Básicas do Produto</S.AttrTitle>
						<S.AttrTitle>Nome do Produto</S.AttrTitle>
						<S.AttrDescription>{name}</S.AttrDescription>

						<S.AttrTitle>Id do Produto</S.AttrTitle>
						<S.AttrDescription>{id}</S.AttrDescription>

						<S.AttrTitle>Categoria</S.AttrTitle>
						<S.AttrDescription>{category.name}</S.AttrDescription>

						<S.AttrTitle>Marca</S.AttrTitle>
						<S.AttrDescription>{brand}</S.AttrDescription>

						<S.AttrTitle>Disponibilidade</S.AttrTitle>
						<S.AttrDescription>{isAvailable}</S.AttrDescription>

						<S.AttrTitle>Quantidade</S.AttrTitle>
						<S.AttrDescription>{quantity}</S.AttrDescription>

						<S.AttrTitle>Preço Antigo</S.AttrTitle>
						<S.AttrDescription>{oldPrice}</S.AttrDescription>

						<S.AttrTitle>Preço Atual</S.AttrTitle>
						<S.AttrDescription>{currentPrice}</S.AttrDescription>
				</S.Section>
		)
}