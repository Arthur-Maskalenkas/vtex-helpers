import { MapPrivateListOptions } from './mappers/mapPrivateListOptions.ts'
import { type ParamsBuildDefaultStates, type ProtocolMapperDefaultStates } from './protocols.ts'
import { MapListOptions } from './mappers/mapListOptions.ts'
import { type States } from '../types.ts'

export class BuilderDefaultStates {
  private readonly mappers: ProtocolMapperDefaultStates[] = []

  private constructor () {
    this.mappers.push(new MapPrivateListOptions())
    this.mappers.push(new MapListOptions())
  }

  public handle (params: ParamsBuildDefaultStates): States {
    return this.mappers.reduce<any>((acc: any, mapper) => {
      const param = {
        ...acc,
        ...params
      }

      const valueMapped = mapper?.map(param)

      if (!valueMapped) {
        return acc
      }

      return {
        ...acc,
        [mapper.field]: valueMapped
      }
    }, {})
  }

  public static aDefaultStates (params: ParamsBuildDefaultStates) {
    return new BuilderDefaultStates().handle(params)
  }
}

export const statesDefault = BuilderDefaultStates.aDefaultStates({
  manualList: {
    'store.1': {
      title: 'Store 1'
    },

    'store.2': {
      title: 'Store 2',
      items: {
        'store.2.2': {
          title: 'Store 2.2'
        }
      }
    },

    'store.3': {
      title: 'Store 3',
      items: {
        'store.3.3': {
          title: 'Store 3.3',
          items: {
            'store.3.3.3': {
              title: 'Store 3.3.3'
            }
          }
        }
      }
    }
  }
})