import { Button as ButtonCommon } from '../button/button.tsx'
import './styles.scss'
import { mapParams } from './utils.ts'
import { FormProvider, useFormContext } from "./context";
import { Input as InputCommon } from "../input/input.tsx";



const Button = ({ typeButton }: { typeButton: 'submit' | 'openResultInSamePage' | 'openResultInOtherPage' }) => {
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
				<ButtonCommon  {...buttonProps}>
						{label}
				</ButtonCommon>
		)
}


const Input = ({ typeInput }: { typeInput: 'specification' | 'category' | 'brand' | 'collection' }) => {
		const inputStrategy = {
				specification: {
						name: 'paramSpecification',
						label: 'Especificação',
						input: { 'data-with-value': true }
				},
				category: {
						name: 'paramCategory',
						label: 'Categoria',
				},
				brand: {
						name: 'paramBrand',
						label: 'Marca',
				},
				collection: {
						name: 'paramCollection',
						label: 'Coleção',
				}
		}

		const { name, label, ...inputProps } = inputStrategy[typeInput]

		return (
				<InputCommon.Container>
						<InputCommon.Label htmlFor={name}>{label}</InputCommon.Label>
						<InputCommon {...inputProps} name={name} id={name}/>
				</InputCommon.Container>
		)
}

export const Form = () => {
		const { dispatch } = useFormContext()

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
				<FormProvider>
						<form role={'form'} onSubmit={handleSubmit} className={'component-form form common'}>
								<Input typeInput={'category'}/>
								<Input typeInput={'brand'}/>
								<Input typeInput={'collection'}/>
								<Input typeInput={'specification'}/>

								<Button typeButton={'submit'}/>
								<Button typeButton={'openResultInSamePage'}/>
								<Button typeButton={'openResultInOtherPage'}/>
						</form>
				</FormProvider>
		)
}