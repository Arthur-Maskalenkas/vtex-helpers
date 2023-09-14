export interface ProtocolMapperPageSearchParams {
  mapPageSearchParams: (params: ProtocolMapperPageSearchParams.Params) => ProtocolMapperPageSearchParams.Result
}

export namespace ProtocolMapperPageSearchParams {
  export type Result = string | null

  export type Params = string
}