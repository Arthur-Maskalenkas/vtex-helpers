import {
  MapListOptions
} from '../../../../../../../src/views/context/reducers/reducerApplication/utils/generateDefaultStates/mappers/mapListOptions.ts'
import {
  type ParamsBuildDefaultStates
} from '../../../../../../../src/views/context/reducers/reducerApplication/utils/generateDefaultStates/protocols.ts'
import { type StateListOptions } from '../../../../../../../src/views/context/reducers/reducerApplication/types.ts'

const makeSut = () => {
  const sut = new MapListOptions()
  return { sut }
}

type PartialParamsBuildDefaultStates = Pick<ParamsBuildDefaultStates, 'privateListOptions' | 'manualList'>

const makeParams = (params: PartialParamsBuildDefaultStates): ParamsBuildDefaultStates => {
  return params as ParamsBuildDefaultStates
}

describe(MapListOptions.name, () => {
  it('should return only items from first level', () => {
    const { sut } = makeSut()

    const params = makeParams({
      manualList: {
        item1: {
          title: 'item_1_title',
          items: {
            item_1_1: {
              title: 'item_1_1_title'
            }
          }
        },

        item2: {
          title: 'item_2_title'
        },

        item3: {
          title: 'item_3_title',
          fn: () => {}
        }
      }
    })

    const result = sut.map(params)

    const expected: StateListOptions.State = [
      {
        title: 'item_1_title'
      },

      {
        title: 'item_2_title'
      },

      {
        title: 'item_3_title'
      }
    ]

    expect(result).toStrictEqual(expected)
  })
})