import { type StatesApplication } from '../../types.ts'
import { MapPrivateListOptions } from './mappers/mapPrivateListOptions.ts'
import { type ParamsBuildDefaultStates } from './protocols.ts'
import { BuilderDefaultStates } from './builder.ts'
import { MapListOptions } from './mappers/mapListOptions.ts'

export const generateDefaultStates = (params: ParamsBuildDefaultStates): StatesApplication => {
  const mapPrivateListOptions = new MapPrivateListOptions()
  const mapListOptions = new MapListOptions()

  const mappers = [mapPrivateListOptions, mapListOptions]

  const builderDefaultStates = new BuilderDefaultStates(mappers)

  return builderDefaultStates.handle(params)
}

export const statesDefault = generateDefaultStates({
  manualList: {
    others: {
      title: 'Outros'
    }
  }
})