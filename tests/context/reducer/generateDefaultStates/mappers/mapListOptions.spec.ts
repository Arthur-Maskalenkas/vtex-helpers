import { MapListOptions } from '../../../../../src/context/reducer/generateDefaultStates/mappers/mapListOptions.ts'
import {
  type ManualItem, type ParamsBuildDefaultStates
} from '../../../../../src/context/reducer/generateDefaultStates/protocols.ts'
import { type ListOptions } from '../../../../../src/context/reducer/types.ts'
import { ModelListOptions } from '../../../../../src/context/reducer/domain/models/modelListOptions.ts'

const makeSut = () => {
  const sut = new MapListOptions()
  return { sut }
}

type buildParamsWithChildrensOptions = {
  lengthChildrens?: number
  mainIndex?: number
}
const buildParamsWithChildrens = (options: buildParamsWithChildrensOptions = {}): ManualItem.Items => {
  const { lengthChildrens = 1, mainIndex = 1 } = options
  const result: any = {
    [`option.${mainIndex}`]: {
      title: `Opção ${mainIndex}`,
      items: {},
      component: null,
      parent: null
    }
  }

  for (let i = 1; i <= lengthChildrens; i++) {
    const key = `option.${mainIndex}.${i}`
    result[`option.${mainIndex}`].items[key] = {
      title: `Opção ${mainIndex}.${i}`,
      component: null,
      parent: null
    }
  }

  return result
}

describe(MapListOptions.name, () => {
  it('should return only options from first level', () => {
    const { sut } = makeSut()

    const params: Partial<ParamsBuildDefaultStates> = {
      manualList: {
        ...buildParamsWithChildrens({ lengthChildrens: 2, mainIndex: 1 }),
        ...buildParamsWithChildrens({ lengthChildrens: 2, mainIndex: 2 })

      }
    }

    const result = sut.map({ ...params as any })

    const expected: ListOptions.Items =
            [
              new ModelListOptions('Opção 1', 'option.1', null, null),
              new ModelListOptions('Opção 2', 'option.2', null, null)
            ]

    expect(result).toStrictEqual(expected)
  })
})