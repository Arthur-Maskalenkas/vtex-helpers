import { type ProtocolLoadRunTimeRepository } from '../../data/protocols/loadRuntimeRepository.ts'
import { type ModelRuntime } from '../../domain/models/runtime.ts'

export class RepositoryRuntime implements ProtocolLoadRunTimeRepository {
  async searchRuntimeInHTML (): Promise<ModelRuntime> {
    return null as any
  }
}