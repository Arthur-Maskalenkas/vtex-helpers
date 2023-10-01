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
		const { currentSku: { name, quantity, id, image } } = product

		return (
				<div className={'component-handleProduct container'}>
						<div className={'left-side'}>
								<p>{name}</p>
								<p>SKU ID {id}</p>
								<p>{quantity} unidades no estoque</p>


								<ButtonSeeMore product={product}/>
								<ButtonGoToPDP product={product}/>
						</div>

						<div className={'right-side'}>
								<img width={60} height={60} src={image}/>
						</div>
				</div>
		)
}