import { type ProtocolMapperSearchParams } from '../../../../../../src/services/data/protocols/mapperSearchParams.ts'
import { BuilderBase } from '../base.ts'
import { generateProtocolMapperSearchParamsResult } from '../../generators/protocols/searchParams.ts'

export class BuilderProtocolMapperSearchParams
  extends BuilderBase<ProtocolMapperSearchParams, ProtocolMapperSearchParams.Result> {
  constructor () {
    super(
      { map: () => generateProtocolMapperSearchParamsResult() },
      'map'
    )
  }
}