import { type ProtocolMapperDefaultStates, type ParamsBuildDefaultStates } from '../protocols.ts'
import { type StateListOptions, type States } from '../../types.ts'

export class MapPrivateListOptions implements ProtocolMapperDefaultStates {
  field: keyof States = 'privateListOptions'

  public map (params?: ParamsBuildDefaultStates): Map<string, any> {
    const map = new Map<string, any>()

    if (!params || !params.manualList) return map
    const { manualList = {} } = params

    function dfs (path: string, item?: StateListOptions.Item) {
      const itemWithComponents = item as StateListOptions.WithComponents

      if (itemWithComponents?.component) {
        map.set(path, {
          title: itemWithComponents.title,
          component: itemWithComponents.component
        })
        return
      }

      if (!item) return
      const itemWithItems = item as StateListOptions.WithItems
      const itemKeys = Object.keys(itemWithItems.items ?? {})

      // Enquanto tiver filho vai chamar o dfs recursivamente
      for (const key of itemKeys) {
        const subItem = itemWithItems?.items?.[key]
        const subPath = path ? `${path}/${key}` : key
        dfs(subPath, subItem)
      }

      map.set(path, { title: itemWithItems.title })
    }

    for (const key of Object.keys(manualList)) {
      dfs(key, manualList[key])
    }

    return map
  }
}