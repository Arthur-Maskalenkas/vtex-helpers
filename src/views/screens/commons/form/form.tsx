import { Button as ButtonCommon } from '../button/button.tsx'
import './styles.scss'
import { mapParams } from './utils.ts'
import { FormProvider, useFormContext } from "./context";
import { Input as InputCommon } from "../input/input.tsx";



const Button = ({ typeButton, isDisabled = false }: {
		typeButton: 'submit' | 'openResultInSamePage' | 'openResultInOtherPage',
		isDisabled?: boolean
}) => {
		const { states: { urlGenerated = '' } } = useFormContext()

		const buttonStrategy: any = {
				openResultInOtherPage: {
						label: 'Abrir resultado em outra página',
						type: 'button',
						onClick: () => {
								window.open(urlGenerated ?? '')
						},
				},
				openResultInSamePage: {
						label: 'Abrir resultado na mesma página',
						type: 'button',
						onClick: () => {
								window.location.href = urlGenerated ?? ''
						}
				},
				submit: {
						label: 'Gerar URL',
						type: 'submit',
				}
		}

		const { label, ...buttonProps } = buttonStrategy[typeButton]

		return (
				<ButtonCommon  {...buttonProps} disabled={isDisabled} role={"button"}>
						{label}
				</ButtonCommon>
		)
}


const Input = ({ typeInput }: { typeInput: 'specification' | 'category' | 'brand' | 'collection' }) => {
		const inputStrategy = {
				specification: {
						name: 'paramSpecification',
						ariaDescreditedBy: 'descriptionSpecification',
						label: 'Especificação',
						input: { 'data-with-value': true },
						placeholder: 'Buscar por Especificação',
						description: 'O id e o valor da especificação devem ser separados por "=" Exemplo: Cor=Azul'
				},
				category: {
						name: 'paramCategory',
						ariaDescreditedBy: 'descriptionCategory',
						label: 'Categoria',
						placeholder: 'Buscar por Categoria',
						description: 'O valor pode ser tanto o ID quanto o nome da categoria. Exemplo: Tênis | 100'
				},
				brand: {
						name: 'paramBrand',
						ariaDescreditedBy: 'descriptionBrand',
						label: 'Marca',
						placeholder: 'Buscar por Marca',
						description: 'O valor pode ser tanto o ID quanto o nome da marca. Exemplo: Mizuno | 100'
				},
				collection: {
						name: 'paramCollection',
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

export const Form = () => {
		const { dispatch, states } = useFormContext()
		const buttonsLinksIsActive = !!states.urlGenerated

		const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
				event.preventDefault()
				const paramsMapped = mapParams(event)

				if (!paramsMapped) return

				const hasError = paramsMapped instanceof Map

				const dispatchArgs: any = {
						type: hasError ? 'ACTION_HANDLE_INPUT_ERRORS' : 'ACTION_HANDLE_PARAMS_RESULT',
						payload: { data: { [hasError ? 'inputs' : 'params']: paramsMapped } }
				}

				dispatch(dispatchArgs)
		}

		return (
				<form role={'form'} onSubmit={handleSubmit} className={'component-form form common'}>
						<Input typeInput={'category'}/>
						<Input typeInput={'brand'}/>
						<Input typeInput={'collection'}/>
						<Input typeInput={'specification'}/>

						<Button typeButton={'submit'}/>
						<Button typeButton={'openResultInSamePage'} isDisabled={!buttonsLinksIsActive}/>
						<Button typeButton={'openResultInOtherPage'} isDisabled={!buttonsLinksIsActive}/>
				</form>
		)
}

const Container = ({ children }: { children: React.ReactNode }) => {
		return (
				<FormProvider>
						{children}
				</FormProvider>
		)
}


Form.Container = Container