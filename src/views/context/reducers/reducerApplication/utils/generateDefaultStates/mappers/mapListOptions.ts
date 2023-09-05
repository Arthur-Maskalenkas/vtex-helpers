import { type ParamsBuildDefaultStates, type ProtocolMapperDefaultStates } from '../protocols.ts'
import { type StatesApplication } from '../../../types.ts'

export class MapListOptions implements ProtocolMapperDefaultStates {
  field: keyof StatesApplication = 'listOptions'

  public map (params: ParamsBuildDefaultStates): any {
    const { manualList } = params

    if (!manualList) return []

    const options = []

    for (const value of Object.values(manualList)) {
      options.push({
        title: value.title
      })
    }

    return options
  }
}