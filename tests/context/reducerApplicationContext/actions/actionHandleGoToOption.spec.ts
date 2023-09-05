import {
  type ReducerParams,
  type States
} from '../../../../src/context/reducers/types.ts'
import {
  ActionHandleGoToOption
} from '../../../../src/context/reducers/reducer/actions/actionHandleGoToOption.ts'
import { StatesBuilder } from '../../../builders/statesBuilder.ts'
import {
  type Actions
} from '../../../../src/context/reducers/reducer/reducer.ts'
import { vi } from 'vitest'

const makeDispatch = (target: string): Actions => {
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
    const params: ReducerParams = {
      state,
      action: dispatch
    }
    const result = ActionHandleGoToOption(params)

    const expected: States = {
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

  it('should return target selected with attribute component', () => {
    const fnSpy = vi.fn()

    const state =
            StatesBuilder.a()
              .appendPrivateListOptionsWithFNAttribute(fnSpy)
              .build()

    const currentTarget = 'item_0_title'

    const dispatch = makeDispatch(currentTarget)
    const params: ReducerParams = {
      state,
      action: dispatch
    }
    const result = ActionHandleGoToOption(params)

    const expected: States = {
      ...state,
      currentTarget: fnSpy as any,
      listOptions: [
        { title: 'item_0_title', component: fnSpy }
      ]
    }

    expect(result).toStrictEqual(expected)
    expect(fnSpy).not.toHaveBeenCalled()
  })

  //  function () {
  //     return null
  //   }
  it.todo('should return a component')

  it.todo('should throw error if target not exists')
})