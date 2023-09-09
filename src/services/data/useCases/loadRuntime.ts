import { type IUseCaseLoadRunTime } from '../../domain/useCases/loadRuntime.ts'
import { type ModelRuntime } from '../../domain/models/runtime.ts'
import { type ProtocolLoadRunTimeRepository } from '../protocols/loadRuntimeRepository.ts'

export class UseCaseLoadRuntime implements IUseCaseLoadRunTime {
  constructor (
    private readonly protocolLoadRuntimeRepository: ProtocolLoadRunTimeRepository
  ) { }

  async load (): Promise<ModelRuntime> {
    return await this.protocolLoadRuntimeRepository.searchRuntimeInHTML()
  }
}