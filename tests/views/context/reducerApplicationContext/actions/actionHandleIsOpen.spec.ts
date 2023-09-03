import {
  actionHandleIsOpen
} from '../../../../../src/views/context/reducers/reducerApplication/actions/actionHandleIsOpen.ts'
import { StatesApplicationBuilder } from '../../../../builders/statesApplicationBuilder.ts'
import {
  type ReducerApplicationParams, type StatesApplication
} from '../../../../../src/views/context/reducers/reducerApplication/reducerApplication.ts'

const makeParams = (state: StatesApplication): ReducerApplicationParams => {
  return {
    state,
    action: {
      type: 'ACTION_HANDLE_IS_OPEN'
    }
  }
}
describe(actionHandleIsOpen.name, () => {
  it('shoud return isOpened true if calling on isOpened is false', () => {
    const state = StatesApplicationBuilder.aStatesApplication().appendIsOpenedFalse().build()

    const params = makeParams(state)

    const result = actionHandleIsOpen(params)

    const expected: StatesApplication = {
      ...state,
      isOpened: true
    }

    expect(result).toStrictEqual(expected)
  })

  it('shoud return isOpened false if calling on isOpened is true', () => {
    const state = StatesApplicationBuilder.aStatesApplication().appendIsOpenedTrue().build()

    const params = makeParams(state)

    const result = actionHandleIsOpen(params)

    const expected: StatesApplication = {
      ...state,
      isOpened: false
    }

    expect(result).toStrictEqual(expected)
  })
})