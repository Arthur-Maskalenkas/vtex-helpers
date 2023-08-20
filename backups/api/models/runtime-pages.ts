
export type RuntimePageModel = {
  path:string
  blockId: string
  routeId: string
  context: string
  declarer: string
  map: string[]
  allowConditions: boolean
  canonical: string
}

export type RuntimePagesModel = Record<string, RuntimePageModel>
