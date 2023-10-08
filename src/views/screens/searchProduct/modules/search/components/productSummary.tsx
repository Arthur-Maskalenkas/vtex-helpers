import { Product } from "../../../../../../services/domain/internal/models/product.ts";
import { Button } from "../../../../commons/button/button.tsx";
import { useSearchProductContext } from "../../../context";
import './styles.scss'



const ButtonGoToPDP = ({ product }: { product: Product.Current }) => {
		return (
				<Button.Container>
						<Button.Text>
								Ir para Pagina do Produto
						</Button.Text>
				</Button.Container>
		)
}

const ButtonSeeMore = ({ product }: { product: Product.Current }) => {
		const { currentSku: { name, isAvailable, quantity, id, image } } = product

		const { dispatch } = useSearchProductContext()

		const handleProduct = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: Product.Current) => {
				event.stopPropagation()
				dispatch({ type: 'ACTION_HANDLE_CHANGE_TO_MODULE_PRODUCT', payload: { data: product } })
		}

		return (
				<Button.Container onClick={(e) => handleProduct(e, product)}>
						<Button.Text>
								Ver mais informações
						</Button.Text>
				</Button.Container>
		)
}

export const ProductSummary = ({ product }: { product: Product.Current }) => {
		const { id: idProduct, currentSku: { name, quantity, id, image, isAvailable } } = product

		return (
				<div
						data-product-available={isAvailable}
						className={'component-handleProduct container'}>
						<div className={'left-side'}>
								<p><strong>Nome:</strong> {name}</p>
								<p><strong>ID produto:</strong> ${idProduct}</p>
								<p><strong>ID sku:</strong> {id}</p>
								<p><strong>Quantidade:</strong> {quantity}</p>
								<ButtonSeeMore product={product}/>
								<ButtonGoToPDP product={product}/>
						</div>

						<div className={'right-side'}>
								<img alt={"Imagem de produto"} width={60} height={60} src={image}/>
						</div>
				</div>
		)
}