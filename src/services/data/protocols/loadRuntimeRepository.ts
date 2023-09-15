import { type ExternalModelRuntime } from '../../domain/external/runtime.ts'

export interface ProtocolLoadRunTimeRepository {
  searchRuntimeInHTML: () => ProtocolLoadRunTimeRepository.Result
}

export namespace ProtocolLoadRunTimeRepository {
  export type Result = Promise<ExternalModelRuntime>
}