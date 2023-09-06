import { type ManualItem, type ParamsBuildDefaultStates, type ProtocolMapperDefaultStates } from '../protocols.ts'
import { type internalListOptions, type States } from '../../types.ts'
import { ModelInternalListOptions } from '../../domain/models/modelInternalListOptions.ts'

export class MapInternalListOptions implements ProtocolMapperDefaultStates {
  field: keyof States = 'internalListOptions'

  public map (params?: ParamsBuildDefaultStates): internalListOptions.Items | null {
    if (!params || !params.manualList) return null

    const { manualList } = params
    const map: internalListOptions.Items = new Map()

    function dfs (path: string, item?: ManualItem.Item) {
      if (!item) return

      const { title, component } = item

      if (item?.component) {
        const modelInternalListOptions = new ModelInternalListOptions(title,
          component,
          path.includes('/') ? path.slice(0, path.lastIndexOf('/')) : null)

        map.set(path, modelInternalListOptions)
        return
      }

      const itemKeys = Object.keys(item?.items ?? {})

      // Enquanto tiver filho vai chamar o dfs recursivamente
      for (const key of itemKeys) {
        const subItem = item?.items?.[key]
        const subPath = path ? `${path}/${key}` : key
        dfs(subPath, subItem)
      }

      const modelInternalListOptions = new ModelInternalListOptions(title,
        component,
        path.includes('/') ? path.slice(0, path.lastIndexOf('/')) : null)

      map.set(path, modelInternalListOptions)
    }

    for (const key of Object.keys(manualList)) {
      dfs(key, manualList[key])
    }

    return map
  }
}