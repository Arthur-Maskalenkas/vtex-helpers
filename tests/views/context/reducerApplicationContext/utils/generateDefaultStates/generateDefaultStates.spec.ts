import {
  generateDefaultStates
} from '../../../../../../src/views/context/reducers/reducerApplication/utils/generateDefaultStates'
import {
  type ParamsBuildDefaultStates
} from '../../../../../../src/views/context/reducers/reducerApplication/utils/generateDefaultStates/protocols.ts'
import { type StatesApplication } from '../../../../../../src/views/context/reducers/reducerApplication/types.ts'

describe(generateDefaultStates.name, () => {
  it('should generate default states', () => {
    const params: ParamsBuildDefaultStates = {
      manualList: {
        others: {
          title: 'Outros'
        }
      }
    }

    const expected: Partial<StatesApplication> = {
      privateListOptions: new Map([
        ['Outros', null]
      ])
    }

    const result = generateDefaultStates(params)

    expect(result).toStrictEqual(expected)
  })
})