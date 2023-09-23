import { type ParamsBuildDefaultStates, type ProtocolMapperDefaultStates } from '../protocols.ts'
import { type ListOptions, type States } from '../../types.ts'
import { ModelListOptions } from '../../domain/models/modelListOptions.ts'



export class MapListOptions implements ProtocolMapperDefaultStates {
		field: keyof States = 'listOptions'

		public map(params: ParamsBuildDefaultStates): any {
				const { manualList } = params

				if (!manualList) return []

				const options: ListOptions.Items = []

				for (const [ key, value ] of Object.entries(manualList)) {
						const { title, component } = value
						const modelListOptions = new ModelListOptions(title, key, component, null)

						options.push(modelListOptions)
				}

				return options
		}
}