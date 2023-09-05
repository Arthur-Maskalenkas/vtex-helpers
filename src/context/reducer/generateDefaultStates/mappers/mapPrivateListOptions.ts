import { type ProtocolMapperDefaultStates, type ParamsBuildDefaultStates } from '../protocols.ts'
import { type StateListOptions, type States } from '../../types.ts'

export class MapPrivateListOptions implements ProtocolMapperDefaultStates {
  field: keyof States = 'privateListOptions'

  public map (params: ParamsBuildDefaultStates): any {
    const { manualList } = params

    const map = new Map()

    if (!manualList) return map

    function convertItem (item: StateListOptions.Item) {
      if ('component' in item) {
        map.set(item.title, item.component)
        return
      }

      const itemWithItems = item as StateListOptions.WithItems
      const itemKeys = Object.keys(itemWithItems.options ?? {})
      const itemValues = itemKeys.map((key) => itemWithItems.options![key].title)

      map.set(itemWithItems.title, itemKeys.length > 0 ? itemValues : null)

      for (const key of itemKeys) {
        convertItem(itemWithItems.options![key])
      }
    }

    for (const key of Object.keys(manualList)) {
      convertItem(manualList[key])
    }

    return map
  }
}