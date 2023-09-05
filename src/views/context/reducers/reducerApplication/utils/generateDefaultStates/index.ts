import { type StatesApplication } from '../../types.ts'
import { MapPrivateListOptions } from './mappers/mapPrivateListOptions.ts'
import { type ParamsBuildDefaultStates } from './protocols.ts'
import { BuilderDefaultStates } from './builder.ts'
import { MapListOptions } from './mappers/mapListOptions.ts'

export const generateDefaultStates = (params: ParamsBuildDefaultStates = { manualList: {} }): StatesApplication => {
  const mapPrivateListOptions = new MapPrivateListOptions()
  const mapListOptions = new MapListOptions()

  const mappers = [mapPrivateListOptions, mapListOptions]

  const builderDefaultStates = new BuilderDefaultStates(mappers)

  return builderDefaultStates.handle(params)
}

export const statesDefault = generateDefaultStates({
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