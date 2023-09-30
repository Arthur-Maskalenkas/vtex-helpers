import { useSearchProductContext } from "../../context";
import { handleSubmit } from "./utils/handleSubmit.ts";
import { useApplicationReducerContext } from "../../../../application/context";

import { Input as InputCommon } from "../../../commons/input/input.tsx";
import { Button as ButtonCommon } from "../../../commons/button/button.tsx";



const ButtonSubmit = () => {

		return (
				<ButtonCommon.Container type={"submit"}>
						<ButtonCommon.Text>
								Pesquisar
						</ButtonCommon.Text>
				</ButtonCommon.Container>
		)
}


const Input = ({ typeInput }: { typeInput: 'productId' | 'skuId' | 'productName' | 'collection' }) => {
		const inputStrategy = {
				productId: {
						name: 'paramProductId',
						ariaDescreditedBy: 'descriptionProductId',
						label: 'ID do Produto',
						placeholder: 'Buscar por ID do Produto',
						description: 'O id do produto deve ser um número. Exemplo: 100'
				},
				skuId: {
						name: 'paramSkuId',
						ariaDescreditedBy: 'descriptionSkuId',
						label: 'ID do SKU',
						placeholder: 'Buscar por ID de SKU',
						description: 'O id do sku deve ser um número. Exemplo: 100'
				},
				productName: {
						name: 'paramProductName',
						ariaDescreditedBy: 'descriptionProductName',
						label: 'Nome do Produto',
						placeholder: 'Buscar por Nome do Produto',
						description: 'O nome do produto deve ser um texto. Exemplo: Tênis'
				},
				collection: {
						name: 'productClusterIds',
						ariaDescreditedBy: 'descriptionCollection',
						label: 'Coleção',
						placeholder: 'Buscar por Coleção',
						description: 'O valor pode ser tanto o ID quanto o nome da coleção. Exemplo: Primavera | 100'
				}
		}

		const { name, label, ariaDescreditedBy, description, ...inputProps } = inputStrategy[typeInput]

		return (
				<InputCommon.Container>
						<InputCommon.Label htmlFor={name}>{label}</InputCommon.Label>
						<InputCommon {...inputProps} aria-describedby={ariaDescreditedBy} name={name} id={name}/>
						<InputCommon.Description ariaDescribedBy={ariaDescreditedBy}>{description} </InputCommon.Description>
				</InputCommon.Container>
		)
}

export const ModuleForm = () => {
		const { dispatch } = useSearchProductContext()
		const { state: { appInternalServices: { product: { loadProducts: controller } } } } = useApplicationReducerContext()
		console.log(controller);

		return (
				<form role={'form'} onSubmit={e => handleSubmit(e, dispatch, controller as any)}>
						<Input typeInput={'productName'}/>
						<Input typeInput={'productId'}/>
						<Input typeInput={'skuId'}/>
						<Input typeInput={'collection'}/>

						<ButtonSubmit/>
				</form>
		)
}