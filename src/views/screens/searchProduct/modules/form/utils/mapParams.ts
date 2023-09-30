import { useForm } from "../../../../../hooks/useForm.tsx";



export const errorMessages = {
		specification: {
				requiredValue: 'É necessario informar o valor da especificação. O formato para informar o valor é: "id=valor". Exemplo: Cor=Azul',
		}
}

export const mapParams = (formData: Record<string, string>) => {
		const params = new Set<string>()

		for (const [ key, value ] of Object.entries(formData)) {
				if (value) {
						params.add(`${key}=${value}`)
				}
		}
		return params.size ? [ ...params ].join(',') : null
}

export const mapParamsWithUseForm = (event: React.FormEvent<HTMLFormElement>) => {
		const form = useForm(event) as any
		return mapParams(form)
}