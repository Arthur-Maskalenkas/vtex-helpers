import {
  type ReducerApplicationParams,
  type StatesApplication
} from '../../../../../src/views/context/reducers/reducerApplication/types.ts'
import {
  ActionHandleGoToOption
} from '../../../../../src/views/context/reducers/reducerApplication/actions/actionHandleGoToOption.ts'
import { StatesBuilder } from '../../../../builders/statesBuilder.ts'
import {
  type ActionsApplication
} from '../../../../../src/views/context/reducers/reducerApplication/reducerApplication.ts'
import { vi } from 'vitest'

const makeDispatch = (target: string): ActionsApplication => {
  return {
    type: 'ACTION_HANDLE_GO_TO_OPTION',
    payload: {
      data: {
        target
      }
    }
  }
}

describe(ActionHandleGoToOption.name, () => {
  it('should return target selected and all childrens', () => {
    const state =
            StatesBuilder.a()
              .appendPrivateListOptionsWithItemsAttribute()
              .appendPrivateListOptionsWithItemsAttribute(({ lengthChildrens: 3 }))
              .build()

    const currentTarget = 'item_1_title'

    const dispatch = makeDispatch(currentTarget)
    const params: ReducerApplicationParams = {
      state,
      action: dispatch
    }
    const result = ActionHandleGoToOption(params)

    const expected: StatesApplication = {
      ...state,
      currentTarget,
      listOptions: [
        { title: 'item_1_0_title' },
        { title: 'item_1_1_title' },
        { title: 'item_1_2_title' }
      ]
    }

    expect(result).toStrictEqual(expected)
  })

  it('should return target selected with attribute fn', () => {
    const fnSpy = vi.fn()

    const state =
        StatesBuilder.a()
          .appendPrivateListOptionsWithFNAttribute(fnSpy)
          .build()

    const currentTarget = 'item_0_title'

    const dispatch = makeDispatch(currentTarget)
    const params: ReducerApplicationParams = {
      state,
      action: dispatch
    }
    const result = ActionHandleGoToOption(params)

    const expected: StatesApplication = {
      ...state,
      currentTarget: fnSpy as any,
      listOptions: [
        { title: 'item_0_title', fn: fnSpy }
      ]
    }

    expect(result).toStrictEqual(expected)
    expect(fnSpy).not.toHaveBeenCalled()
  })

  it.todo('should throw error if target not exists')
})