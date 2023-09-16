export interface ProtocolMapSearchparams {
  map: (params: ProtocolMapSearchparams.Params) => ProtocolMapSearchparams.Result
}

export namespace ProtocolMapSearchparams {
  export type Result = string | null

  export type Params = string
}