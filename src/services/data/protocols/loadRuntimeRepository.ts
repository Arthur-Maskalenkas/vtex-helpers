import { type ModelRuntime } from '../../domain/models/runtime.ts'

export interface ProtocolLoadRunTimeRepository {
  searchRuntimeInHTML: () => Promise<ModelRuntime>
}