import { StatesBuilder } from '../../../builders/contexts/statesBuilder.ts'
import { type ReducerParams, type States } from '../../../../src/context/reducer/types.ts'
import { actionHandleIsOpen } from '../../../../src/context/reducer/actions/actionHandleIsOpen.ts'
import { describe, it } from 'vitest'

const makeParams = (state: States): ReducerParams => {
  return {
    state,
    action: {
      type: 'ACTION_HANDLE_IS_OPEN'
    }
  }
}
describe(actionHandleIsOpen.name, () => {
  it('shoud return isOpened true if calling on isOpened is false', () => {
    const state = StatesBuilder.a().appendIsOpenedFalse().build()

    const params = makeParams(state)

    const result = actionHandleIsOpen(params)

    const expected: States = {
      ...state,
      isOpened: true
    }

    expect(result).toStrictEqual(expected)
  })

  it('shoud return isOpened false if calling on isOpened is true', () => {
    const state = StatesBuilder.a().appendIsOpenedTrue().build()

    const params = makeParams(state)

    const result = actionHandleIsOpen(params)

    const expected: States = {
      ...state,
      isOpened: false
    }

    expect(result).toStrictEqual(expected)
  })
})