import { type ProtocolMapperDefaultStates, type ParamsBuildDefaultStates } from '../protocols.ts'
import { type StateListOptions, type StatesApplication } from '../../../types.ts'

export class MapPrivateListOptions implements ProtocolMapperDefaultStates {
  field: keyof StatesApplication = 'privateListOptions'

  public map (params: ParamsBuildDefaultStates): any {
    const { manualList } = params

    const map = new Map()

    if (!manualList) return map

    function convertItem (item: StateListOptions.Item) {
      if ('fn' in item) {
        map.set(item.title, item.fn)
        return
      }

      const itemWithItems = item as StateListOptions.WithItems
      const itemKeys = Object.keys(itemWithItems.items ?? {})
      const itemValues = itemKeys.map((key) => itemWithItems.items![key].title)

      map.set(itemWithItems.title, itemKeys.length > 0 ? itemValues : null)

      for (const key of itemKeys) {
        convertItem(itemWithItems.items![key])
      }
    }

    for (const key of Object.keys(manualList)) {
      convertItem(manualList[key])
    }

    return map
  }
}