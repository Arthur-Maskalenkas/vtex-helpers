import { ActionHandleSearchOption } from '../../../../src/context/reducer/actions/actionHandleSearchOption.ts'
import { ModelInternalListOptions } from '../../../../src/context/reducer/domain/models/modelInternalListOptions.ts'
import { ModelListOptions } from '../../../../src/context/reducer/domain/models/modelListOptions.ts'
import { expect } from 'vitest'
import { type States } from '../../../../src/context/reducer/types.ts'

const useSut = (state: States, target: string) => {
  return ActionHandleSearchOption({
    action: {
      type: 'ACTION_HANDLE_SEARCH_OPTION',
      payload: {
        data: {
          target,
          typeSearch: 'all'
        }
      }
    },
    state
  })
}

describe(ActionHandleSearchOption.name, () => {
  it('should return all items with contains target on title', () => {
    const target = 'item to search'
    const fn = vi.fn() as any

    const state = {
      internalListOptions: new Map([
        ['item1', new ModelInternalListOptions('item to search 1')],
        ['item2', new ModelInternalListOptions('item to search 2', fn)],
        ['item3', new ModelInternalListOptions('item to search 3')],
        ['item4', new ModelInternalListOptions('item to NOT search 4')],
        ['item5', new ModelInternalListOptions('item to search 5')]
      ])
    } satisfies Partial<States> as any

    const expected: States = {
      ...state,
      searchableListOptions: [
        new ModelListOptions('item to search 1', 'item1', null, null),
        new ModelListOptions('item to search 2', 'item2', fn, null),
        new ModelListOptions('item to search 3', 'item3', null, null),
        new ModelListOptions('item to search 5', 'item5', null, null)
      ],
      query: target
    }

    const result = useSut(state, target)

    expect(result.query).toStrictEqual(target)
    expect(result.searchableListOptions).toStrictEqual(expected.searchableListOptions)
    expect(result).toStrictEqual(expected)
  })

  it('should return items sorted by title', () => {
    const target = 'item to search'

    const state = {
      internalListOptions: new Map([
        ['item1', new ModelInternalListOptions('item to search 3')],
        ['item2', new ModelInternalListOptions('item to search 1')],
        ['item3', new ModelInternalListOptions('item to search 2')]
      ])
    } satisfies Partial<States> as any

    const result = useSut(state, target)

    // verify if item 1 is item to search 1
    expect(result?.searchableListOptions?.[0]?.title).toStrictEqual('item to search 1')
  })

  it('should return empty list and remove query when not found any item', () => {
    const state: States = {
      searchableListOptions: [
        new ModelListOptions('item to search 1', 'item1', null, null),
        new ModelListOptions('item to search 3', 'item3', null, null),
        new ModelListOptions('item to search 5', 'item5', null, null)
      ],
      query: 'item to search'
    } satisfies Partial<States> as any

    const target = 'invalid search'

    const result = useSut(state, target)

    expect(result.searchableListOptions).toHaveLength(0)
    expect(result.query).toBeNull()
  })
})