/* eslint-disable @typescript-eslint/naming-convention */
import { expect, vi } from 'vitest'

type Item = ItemWithItems | ItemWithFn

type ItemWithItems = {
  title: string
  items?: Record<string, Item> | null
}

type ItemWithFn = {
  title: string
  fn?: () => any | null
}

export type buildStatesDefaultParams = Record<string, Item>

const buildStatesDefault = (states: buildStatesDefaultParams): Map<string, string[] | (() => any) | undefined> => {
  const map = new Map()

  function convertItem (item: Item) {
    if ('fn' in item) {
      map.set(item.title, item.fn)
      return
    }

    const itemWithItems = item as ItemWithItems
    const itemKeys = Object.keys(itemWithItems.items ?? {})
    const itemValues = itemKeys.map((key) => itemWithItems.items![key].title)

    map.set(itemWithItems.title, itemKeys.length > 0 ? itemValues : null)

    for (const key of itemKeys) {
      convertItem(itemWithItems.items![key])
    }
  }

  for (const key of Object.keys(states)) {
    convertItem(states[key])
  }

  return map
}
describe(buildStatesDefault.name, () => {
  it('should map value with fn if items is not array', () => {
    const fnSpy1 = vi.fn()
    const fnSpy2 = vi.fn()

    const item1 = {
      title: 'item_1_title',
      fn: fnSpy1
    }

    const item2 = {
      title: 'item_2_title',
      items: {
        item_2_1: {
          title: 'item_2_1_title',
          items: {
            item_2_1_1: {
              title: 'item_2_1_1_title',
              fn: fnSpy2
            }
          }
        }
      }
    }

    const params: buildStatesDefaultParams = {
      item1,
      item2
    }

    const result = buildStatesDefault(params)
    const expectedMap = new Map()

    expectedMap.set(
      'item_1_title', fnSpy1
    )

    expectedMap.set(
      'item_2_title', [
        'item_2_1_title'
      ]

    )

    expectedMap.set(
      'item_2_1_title', [
        'item_2_1_1_title'
      ]
    )

    expectedMap.set(
      'item_2_1_1_title', fnSpy2
    )

    expect(result.size).to.equal(4)

    expect(result).toMatchObject(expectedMap)
    expect(fnSpy1).not.toHaveBeenCalled()
    expect(fnSpy2).not.toHaveBeenCalled()
  })

  it('should map value with null if items is empty', () => {
    const item1 = {
      title: 'item_1_title'
    }

    const item2 = {
      title: 'item_2_title'
    }

    const params: buildStatesDefaultParams = {
      item1,
      item2
    }

    const result = buildStatesDefault(params)

    const expectedMap = new Map()

    expectedMap.set(
      'item_1_title', null
    )

    expectedMap.set(
      'item_2_title', null
    )

    expect(result.get('item_1_title')).toBeNull()
    expect(result.get('item_2_title')).toBeNull()

    expect(result).toHaveLength(2)
    expect(result).toEqual(expectedMap)
  })
  it('should return each child as an array indexed by its title', () => {
    const item1 = {
      title: 'item_1_title',
      items: {
        item_1_1: {
          title: 'item_1_1_title'
        }
      }
    }

    const params: buildStatesDefaultParams = {
      item1
    }

    const result = buildStatesDefault(params)
    const expectedMap = new Map()

    expectedMap.set(
      'item_1_title', [
        'item_1_1_title'
      ]
    )

    expectedMap.set(
      'item_1_1_title', null
    )

    expect(result.get('item_1_title')).toHaveLength(1)
    expect(result.get('item_1_1_title')).toBeNull()

    expect(result).toHaveLength(2)
  })
  it('should return each child as an array indexed by its title, following the same rules as the initial data', () => {
    const item1 = {
      title: 'item_1_title',
      items: {
        item_1_1: {
          title: 'item_1_1_title',
          items: {
            item_1_1_1: {
              title: 'item_1_1_1_title'
            }
          }
        }
      }
    }

    const params: buildStatesDefaultParams = {
      item1
    }

    const result = buildStatesDefault(params)
    const expectedMap = new Map()

    expectedMap.set(
      'item_1_title', [
        'item_1_1_title'
      ]
    )

    expectedMap.set(
      'item_1_1_title', [
        'item_1_1_1_title'
      ]
    )

    expectedMap.set(
      'item_1_1_1_title', null
    )

    expect(result.get('item_1_title')).toHaveLength(1)
    expect(result.get('item_1_1_title')).toHaveLength(1)
    expect(result.get('item_1_1_1_title')).toBeNull()

    expect(result).toHaveLength(3)
  })
  it('should return a flat Map of items, indexed by title', () => {
    const paramFn = vi.fn

    const item1 = {
      title: 'item_1_title',
      items: {
        item_1_1: {
          title: 'item_1_1_title',

          items: {
            item_1_1_1: {
              title: 'item_1_1_1_title',
              items: {
                item_1_1_1_1: {
                  title: 'item_1_1_1_1_title'
                },
                item_1_1_1_2: {
                  title: 'item_1_1_1_2_title',
                  fn: paramFn
                }
              }
            },

            item_1_1_2: {
              title: 'item_1_1_2_title'
            }
          }
        },

        item_1_2: {
          title: 'item_1_2_title'
        },

        item_1_3: {
          title: 'item_1_3_title'
        }
      }
    }
    const item2 = {
      title: 'item_2_title',
      items: {
        item_2_1: {
          title: 'item_2_1_title'
        }
      }
    }

    const params: buildStatesDefaultParams = {
      item1,
      item2
    }

    const result = buildStatesDefault(params)

    const expectedMap = new Map()

    expectedMap.set(
      'item_1_title', [
        'item_1_1_title',
        'item_1_2_title',
        'item_1_3_title'
      ])

    expectedMap.set(
      'item_1_1_title', [
        'item_1_1_1_title',
        'item_1_1_2_title'
      ])

    expectedMap.set(
      'item_1_1_2_title', null
    )

    expectedMap.set(
      'item_1_1_1_title', [
        'item_1_1_1_1_title',
        'item_1_1_1_2_title'
      ]
    )

    expectedMap.set(
      'item_1_1_1_1_title', null
    )

    expectedMap.set(
      'item_1_1_1_2_title', paramFn
    )

    expectedMap.set(
      'item_1_2_title', null
    )

    expectedMap.set(
      'item_1_3_title', null
    )

    expectedMap.set(
      'item_2_title', [
        'item_2_1_title'
      ]
    )

    expectedMap.set(
      'item_2_1_title', null
    )

    expect(result).toStrictEqual(expectedMap)
  })
})