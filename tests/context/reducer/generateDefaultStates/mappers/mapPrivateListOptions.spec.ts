import {
  MapPrivateListOptions
} from '../../../../../src/context/reducer/generateDefaultStates/mappers/mapPrivateListOptions.ts'

const makeSut = () => {
  const sut = new MapPrivateListOptions()
  return { sut }
}

type buildParamsWithChildrensOptions = {
  lengthChildrens?: number
  mainIndex?: number
}
const buildParamsWithChildrens = (options: buildParamsWithChildrensOptions = {}) => {
  const { lengthChildrens = 1, mainIndex = 1 } = options
  const result: any = {
    [`option.${mainIndex}`]: {
      title: `Opção ${mainIndex}`,
      items: {}
    }
  }

  for (let i = 1; i <= lengthChildrens; i++) {
    const key = `option.${mainIndex}.${i}`
    result[`option.${mainIndex}`].items[key] = {
      title: `Opção ${mainIndex}.${i}`
    }
  }

  return result
}

describe(MapPrivateListOptions.name, () => {
  it('should create each key on Map with key as path and value as function or options', () => {
    const { sut } = makeSut()
    const params = buildParamsWithChildrens({ lengthChildrens: 2 })

    const expected = new Map<string, any>(
      [
        ['option.1', { title: 'Opção 1' }],
        ['option.1/option.1.1', { title: 'Opção 1.1' }],
        ['option.1/option.1.2', { title: 'Opção 1.2' }]
      ]
    )

    const result = sut.map({ manualList: params })
    expect(result).toStrictEqual(expected)
  })

  it('should work with depth levels', () => {
    const { sut } = makeSut()

    const expected = new Map<string, any>(
      [
        ['option.2', { title: 'Opção 2' }],
        ['option.2/option.2.1', { title: 'Opção 2.1' }],
        ['option.2/option.2.1/option.2.1.1', { title: 'Opção 2.1.1' }],
        ['option.2/option.2.1/option.2.1.1/option.2.1.1.1', { title: 'Opção 2.1.1.1' }]
      ]
    )

    const params = {
      'option.2': {
        title: 'Opção 2',
        items: {
          'option.2.1': {
            title: 'Opção 2.1',
            items: {
              'option.2.1.1': {
                title: 'Opção 2.1.1',
                items: {
                  'option.2.1.1.1': {
                    title: 'Opção 2.1.1.1'
                  }
                }
              }
            }
          }
        }
      }

    }

    const result = sut.map({ manualList: params })

    expect(result).toStrictEqual(expected)
  })

  it('should work with multiple childrens', () => {
    const { sut } = makeSut()
    const params = {
      ...buildParamsWithChildrens({ lengthChildrens: 2, mainIndex: 1 }),
      ...buildParamsWithChildrens({ lengthChildrens: 2, mainIndex: 2 })
    }

    const expected = new Map<string, any>(
      [
        ['option.1', { title: 'Opção 1' }],
        ['option.1/option.1.1', { title: 'Opção 1.1' }],
        ['option.1/option.1.2', { title: 'Opção 1.2' }],

        ['option.2', { title: 'Opção 2' }],
        ['option.2/option.2.1', { title: 'Opção 2.1' }],
        ['option.2/option.2.2', { title: 'Opção 2.2' }]
      ]
    )

    const result = sut.map({ manualList: params })
    expect(result).toStrictEqual(expected)
  })

  it('should return new Map if not have childrens present', () => {
    const { sut } = makeSut()

    const result = sut.map()
    expect(result).toStrictEqual(new Map())
  })

  it('should return Components in Component attribute', () => {
    const { sut } = makeSut()
    const fn = function () {
      return 'any_value'
    }
    const params = {
      anyAttributeName: {
        title: 'Any Title',
        component: fn
      }
    }

    const expected = new Map<string, any>(
      [
        ['anyAttributeName', {
          title: 'Any Title',
          component: fn
        }]
      ]
    )

    const result = sut.map({ manualList: params })
    expect(result).toStrictEqual(expected)
  })

  it('super test', () => {
    const { sut } = makeSut()
    const fn = function () {
      return 'any_value'
    }
    const params = {
      ...buildParamsWithChildrens({ lengthChildrens: 2 }),
      anyAttributeName: {
        title: 'Any Title',
        component: fn
      }
    }

    const expected = new Map<string, any>(
      [
        ['option.1', { title: 'Opção 1' }],
        ['option.1/option.1.1', { title: 'Opção 1.1' }],
        ['option.1/option.1.2', { title: 'Opção 1.2' }],
        ['anyAttributeName', {
          title: 'Any Title',
          component: fn
        }]
      ]
    )

    const result = sut.map({ manualList: params })
    expect(result).toStrictEqual(expected)
  })
})