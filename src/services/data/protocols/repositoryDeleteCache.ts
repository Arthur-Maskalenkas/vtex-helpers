export interface ProtocolRepositoryDeleteCache {
  delete: (params: ProtocolRepositoryDeleteCache.Params) => ProtocolRepositoryDeleteCache.Result
}

export namespace ProtocolRepositoryDeleteCache {
  export type Params = {
    id: string
  }

  export type Result = Promise<void>
}