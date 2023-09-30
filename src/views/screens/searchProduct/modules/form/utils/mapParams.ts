import { ReducerSearchProduct } from "../../../context/reducer/reducer.ts";



export const errorMessages = {
		specification: {
				requiredValue: 'É necessario informar o valor da especificação. O formato para informar o valor é: "id=valor". Exemplo: Cor=Azul',
		}
}

export const mapParams = (event: React.FormEvent<HTMLFormElement>) => {
		const inputValues = Array.from(event.currentTarget.elements)

		const params = []
		const errors = new Map()

		for (const input of inputValues) {
				const [ id, value, thisInputHaveValue ] = [ 'id', 'value', 'data-with-value' ]
						.map(attr => input?.attributes?.getNamedItem(attr)?.value)

				if (input?.id && value) {
						if (!thisInputHaveValue) {
								params.push(`${id}=${value}`)
								continue
						}

						const [ splitId, splitValue ] = value.split('=')

						if (!splitValue) {
								errors.set(id, errorMessages.specification.requiredValue)
								continue
						}

						params.push(`${id}=${splitId}=${splitValue}`)
				}
		}

		if (errors.size) return errors
		if (!params.length) return null

		return params.join(',')
}