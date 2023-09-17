import { MapInternalListOptions } from './mappers/mapInternalListOptions.ts'
import { type ParamsBuildDefaultStates, type ProtocolMapperDefaultStates } from './protocols.ts'
import { MapListOptions } from './mappers/mapListOptions.ts'
import { type States } from '../types.ts'
import { AppInternalServices } from '../../../services/main/app.ts'

export class BuilderDefaultStates {
  private readonly mappers: ProtocolMapperDefaultStates[] = []

  private constructor () {
    this.mappers.push(new MapInternalListOptions())
    this.mappers.push(new MapListOptions())
  }

  public handle (params?: ParamsBuildDefaultStates): States {
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
    }, {
      appInternalServices: AppInternalServices(),
      query: null,
      currentComponent: null,
      breadcrumb: [],
      currentTarget: null,
      isOpened: false,
      searchableListOptions: []
    })
  }

  public static aDefaultStates (params?: ParamsBuildDefaultStates) {
    return new BuilderDefaultStates().handle(params)
  }
}

export const statesDefault = BuilderDefaultStates.aDefaultStates({
  manualList: {
    'store.1': {
      title: 'Store 1',
      component: null,
      items: null
    },

    'store.2': {
      title: 'Store 2',
      component: null,
      items: {
        'store.2.2': {
          title: 'Store 2.2',
          items: null,
          component: null
        }
      }
    },

    'store.3': {
      title: 'Store 3',
      component: null,
      items: {
        'store.3.3': {
          title: 'Store 3.3',
          component: null,
          items: {
            'store.3.3.3': {
              title: 'Store 3.3.3',
              items: null,
              component: null
            }
          }
        }
      }
    }
  }
})