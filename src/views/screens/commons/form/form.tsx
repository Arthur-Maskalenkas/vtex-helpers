import { Button as ButtonCommon } from '../button/button.tsx'
import './styles.scss'
import { mapParams } from './utils.ts'
import { FormProvider, useFormContext } from "./context";



export const Button = ({ children }: React.PropsWithChildren) => {
		return (
				<ButtonCommon type={'submit'}>
						{children}
				</ButtonCommon>
		)
}

export const Form = ({ children }: React.PropsWithChildren<{
		handleSubmit: (data: string | Map<any, any> | null) => void
}>) => {
		const { dispatch } = useFormContext()

		const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
				event.preventDefault()
				const paramsMapped = mapParams(event)

				if (!paramsMapped) return

				if (paramsMapped instanceof Map) {
						dispatch({ type: 'ACTION_HANDLE_INPUT_ERRORS', payload: { data: { inputs: paramsMapped } } })
						return
				}

				dispatch({ type: 'ACTION_HANDLE_PARAMS_RESULT', payload: { data: { params: paramsMapped } } })
		}

		return (
				<FormProvider>
						<form role={'form'} onSubmit={handleSubmit} className={'component-form form common'}>
								{children}
						</form>
				</FormProvider>
		)
}
Form.Button = Button