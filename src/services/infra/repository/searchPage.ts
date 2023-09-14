import { type ProtocolMapperPageSearchParams } from '../../data/protocols/mapperPageSearchParams.ts'

export class RepositorySearchPage implements ProtocolMapperPageSearchParams {
  mapPageSearchParams (params: ProtocolMapperPageSearchParams.Params): ProtocolMapperPageSearchParams.Result {
    return params as any
  }
}