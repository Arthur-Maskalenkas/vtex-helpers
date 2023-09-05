import {
  generateDefaultStates
} from '../../../../../src/context/reducers/reducerApplication/utils/generateDefaultStates'
import {
  type ParamsBuildDefaultStates
} from '../../../../../src/context/reducers/reducerApplication/utils/generateDefaultStates/protocols.ts'
import { type StatesApplication } from '../../../../../src/context/reducers/types.ts'

describe(generateDefaultStates.name, () => {
  it('should generate default states', () => {
    const paramFn = vi.fn
    const params: ParamsBuildDefaultStates = {
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
          fn: paramFn
        }
      }
    }

    const expected: Partial<StatesApplication> = {
      privateListOptions: new Map<any, any>([
        ['item_1_title', ['item_1_1_title']],
        ['item_1_1_title', null],
        ['item_2_title', null],
        ['item_3_title', paramFn]
      ]),
      listOptions: [
        { title: 'item_1_title' },
        { title: 'item_2_title' },
        { title: 'item_3_title' }
      ]
    }

    const result = generateDefaultStates(params)

    expect(result).toStrictEqual(expected)
  })

  it('should not throw error if lists is empty', () => {
    const params: ParamsBuildDefaultStates = {
      manualList: {}
    }

    const result = generateDefaultStates(params)

    const expected: Partial<StatesApplication> = {
      listOptions: [],
      privateListOptions: new Map()
    }

    expect(result).toStrictEqual(expected)
  })
})