import { type ProtocolLoadRunTimeRepository } from '../../../../../../src/services/data/protocols/loadRuntimeRepository.ts'
import { BuilderBase } from '../base.ts'

export class BuilderProtocolLoadRunTimeRepository
  extends BuilderBase<ProtocolLoadRunTimeRepository, ProtocolLoadRunTimeRepository.Result> {
  constructor () {
    super(
      { searchRuntimeInHTML: async () => Promise.resolve({ _manifest: 'manifest' }) },
      'searchRuntimeInHTML'
    )
  }
}