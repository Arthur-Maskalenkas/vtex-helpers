import {
  MapPrivateListOptions
} from '../../../../../src/context/reducer/generateDefaultStates/mappers/mapPrivateListOptions.ts'
import { type ParamsBuildDefaultStates } from '../../../../../src/context/reducer/generateDefaultStates/protocols.ts'

const makeSut = () => {
  const sut = new MapPrivateListOptions()
  return { sut }
}

describe(MapPrivateListOptions.name, () => {
  it('should map value with component if options is not array', () => {
    const { sut } = makeSut()

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

    const params: ParamsBuildDefaultStates = {
      manualList: {
        item1,
        item2
      }
    }

    const result = sut.map(params)

    const expected = new Map<string, any>([
      ['item_1_title', fnSpy1],
      ['item_2_title', ['item_2_1_title']],
      ['item_2_1_title', ['item_2_1_1_title']],
      ['item_2_1_1_title', fnSpy2]
    ])

    expect(result).toStrictEqual(expected)
    expect(fnSpy1).not.toHaveBeenCalled()
    expect(fnSpy2).not.toHaveBeenCalled()
  })

  it('should map value with null if options is empty', () => {
    const { sut } = makeSut()

    const params: ParamsBuildDefaultStates = {
      manualList: {
        item1: {
          title: 'item_1_title'
        },
        item2: {
          title: 'item_2_title'
        }
      }
    }

    const result = sut.map(params)

    const expected = new Map(
      [
        ['item_1_title', null],
        ['item_2_title', null]
      ]
    )

    expect(result).toStrictEqual(expected)
  })

  it('should return each child as an array indexed by its title', () => {
    const { sut } = makeSut()

    const params: ParamsBuildDefaultStates = {
      manualList: {
        item1: {
          title: 'item_1_title',
          items: {
            item_1_1: {
              title: 'item_1_1_title'
            }
          }
        }
      }
    }

    const result = sut.map(params)
    const expected = new Map(
      [
        ['item_1_title', ['item_1_1_title']],
        ['item_1_1_title', null]
      ]
    )

    expect(result).toStrictEqual(expected)
  })
  it('should return each child as an array indexed by its title, following the same rules as the initial data', () => {
    const { sut } = makeSut()

    const params: ParamsBuildDefaultStates = {
      manualList: {
        item1: {
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
      }
    }

    const result = sut.map(params)
    const expected = new Map(
      [
        ['item_1_title', ['item_1_1_title']],
        ['item_1_1_title', ['item_1_1_1_title']],
        ['item_1_1_1_title', null]
      ]
    )

    expect(result).toStrictEqual(expected)
  })
  it('should return a flat Map of options, indexed by title', () => {
    const { sut } = makeSut()

    const paramFn = vi.fn

    const params: ParamsBuildDefaultStates = {
      manualList: {
        item1: {
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
                      component: paramFn as any
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
        },
        item2: {
          title: 'item_2_title',
          items: {
            item_2_1: {
              title: 'item_2_1_title'
            }
          }
        }

      }
    }

    const result = sut.map(params)
    const expected = new Map<string, any>(
      [
        ['item_1_title', ['item_1_1_title', 'item_1_2_title', 'item_1_3_title']],
        ['item_1_1_title', ['item_1_1_1_title', 'item_1_1_2_title']],
        ['item_1_1_2_title', null],
        ['item_1_1_1_title', ['item_1_1_1_1_title', 'item_1_1_1_2_title']],
        ['item_1_1_1_1_title', null],
        ['item_1_1_1_2_title', paramFn],
        ['item_1_2_title', null],
        ['item_1_3_title', null],
        ['item_2_title', ['item_2_1_title']],
        ['item_2_1_title', null]
      ]
    )

    expect(result).toStrictEqual(expected)
  })

  it.todo('should delete all options that are null')

  it.todo('should create each key on Map with key as path and value as function or options')
})