import { type ProtocolLoadRunTimeRepository } from '../../data/protocols/loadRuntimeRepository.ts'
import { type ExternalModelRuntime } from '../../domain/models/external/runtime.ts'

export class RepositoryRuntime implements ProtocolLoadRunTimeRepository {
  async searchRuntimeInHTML (): Promise<ExternalModelRuntime> {
    return null as any
  }
}