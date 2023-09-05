import { type StatesApplication } from '../../types.ts'
import { MapPrivateListOptions } from './mappers/mapPrivateListOptions.ts'
import { type ParamsBuildDefaultStates } from './protocols.ts'
import { BuilderDefaultStates } from './builder.ts'

export const generateDefaultStates = (params: ParamsBuildDefaultStates): StatesApplication => {
  const mapPrivateListOptions = new MapPrivateListOptions()

  const mappers = [mapPrivateListOptions]

  const builderDefaultStates = new BuilderDefaultStates(mappers)

  return builderDefaultStates.handle(params)
}