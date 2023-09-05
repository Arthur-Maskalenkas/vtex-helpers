import { type ParamsBuildDefaultStates, type ProtocolMapperDefaultStates } from './protocols.ts'
import { type StatesApplication } from '../../types.ts'

export class BuilderDefaultStates {
  constructor (
    private readonly mappers: ProtocolMapperDefaultStates[]
  ) { }

  public handle (params: ParamsBuildDefaultStates): StatesApplication {
    return this.mappers.reduce<any>((acc, mapper) => {
      const valueMapped = mapper?.map(params)

      if (!valueMapped) {
        return acc
      }

      return {
        ...acc,
        [mapper.field]: valueMapped
      }
    }, {})
  }
}