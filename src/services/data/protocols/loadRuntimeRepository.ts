import { type ExternalModelRuntime } from '../../domain/models/external/runtime.ts'

export interface ProtocolLoadRunTimeRepository {
  searchRuntimeInHTML: () => Promise<ExternalModelRuntime>
}