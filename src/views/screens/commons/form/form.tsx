import { Button as ButtonCommon } from '../button/button.tsx'
import './styles.scss'
import { mapParams } from './utils.ts'
import { FormProvider } from "./context";



export const Button = ({ children }: React.PropsWithChildren) => {
		return (
					<ButtonCommon type={'submit'}>
							{children}
					</ButtonCommon>
		)
}

export const Form = ({ children, handleSubmit }: React.PropsWithChildren<{
		handleSubmit: (data: string | Map<any, any> | null) => void
}>) => {
		const clearSubmit = (event: React.FormEvent<HTMLFormElement>) => {
				event.preventDefault()
				const paramsMapped = mapParams(event)
				paramsMapped && handleSubmit(paramsMapped)
		}

		return (
					<FormProvider>
							<form role={'form'} onSubmit={clearSubmit} className={'component-form form common'}>
									{children}
							</form>
					</FormProvider>
		)
}
Form.Button = Button