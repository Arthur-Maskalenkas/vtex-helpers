export interface RuntimeRoute {
  domain: string
  id: string
  pageContext: {
    id: string
    type: string
  }
  params: any
  path: string
  pathId: string
  queryString: {
    map: string
  }
  breakpointStyles: Array<{
    path: string
    mediaQuery: string
    type: string
  }>
  fonts: string
  overrides: string[]
  rootName: string
  ssr: boolean
  styleMeta: {
    fontsHash: string
    overridesIds: Array<{ id: string }>
    themeId: string
  }
  blockId: string
  canonicalPath: string
  metaTags: any
  routeId: string
  title: any
  varyContentById: boolean
}
