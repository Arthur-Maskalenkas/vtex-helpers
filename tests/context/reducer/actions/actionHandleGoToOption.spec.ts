import { type Actions } from '../../../../src/context/reducer/reducer.ts'
import { ActionHandleGoToOption } from '../../../../src/context/reducer/actions/actionHandleGoToOption.ts'
import { type ReducerParams, type States } from '../../../../src/context/reducer/types.ts'
import { ModelInternalListOptions } from '../../../../src/context/reducer/domain/models/modelInternalListOptions.ts'
import { ModelListOptions } from '../../../../src/context/reducer/domain/models/modelListOptions.ts'
import { expect } from 'vitest'

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
  it('should return all items with same parent', () => {
    const target = 'parent.2'
    const fn = vi.fn() as any

    const state = {
      internalListOptions: new Map([
        ['validItem1', new ModelInternalListOptions('valid item 1', null, target)],
        ['invalidItem1', new ModelInternalListOptions('invalid item 1', null, 'parent.1')],
        ['invalidItem2', new ModelInternalListOptions('invalid item 2', fn, 'parent.1')],
        ['validItem2', new ModelInternalListOptions('valid item 2', null, target)],
        ['validItem3', new ModelInternalListOptions('valid item 3', null, target)]
      ])
    } satisfies Partial<States> as any

    const dispatch = makeDispatch(target)
    const params: ReducerParams = {
      state,
      action: dispatch
    }
    const result = ActionHandleGoToOption(params)

    const expected: States = {
      ...state,
      currentComponent: null,
      currentTarget: target,
      listOptions: [
        new ModelListOptions('valid item 1', 'validItem1', null, target),
        new ModelListOptions('valid item 2', 'validItem2', null, target),
        new ModelListOptions('valid item 3', 'validItem3', null, target)
      ]
    }

    expect(result.listOptions).toStrictEqual(expected.listOptions)
    expect(result).toStrictEqual(expected)
  })

  it('should return only component when have parent with children with component', () => {
    const target = 'parent.2'
    const dispatch = makeDispatch(target)
    const fnSpy = vi.fn() as any

    const state = {
      internalListOptions: new Map([
        ['validItem1', new ModelInternalListOptions('invalid item 1', null, target)],
        ['invalidItem1', new ModelInternalListOptions('valid item', fnSpy, target)],
        ['validItem2', new ModelInternalListOptions('invalid item 2', null, target)],
        ['validItem3', new ModelInternalListOptions('invalid item 3', null, target)]
      ])
    } satisfies Partial<States> as any

    const params: ReducerParams = {
      state,
      action: dispatch
    }
    const result = ActionHandleGoToOption(params)

    const expected: States = {
      ...state,
      currentTarget: target,
      listOptions: [],
      currentComponent: fnSpy
    }

    expect(result.listOptions).toStrictEqual(expected.listOptions)
    expect(result.currentComponent).toStrictEqual(expected.currentComponent)
    expect(result).toStrictEqual(expected)
    expect(fnSpy).not.toHaveBeenCalled()
  })

  it('should return a state if internalListOptions not exists', () => {
    const target = 'parent.2'
    const dispatch = makeDispatch(target)

    const state = {
      isOpened: false
    } satisfies Partial<States> as any

    const params: ReducerParams = {
      state,
      action: dispatch
    }
    const result = ActionHandleGoToOption(params)

    const expected: States = {
      ...state
    }

    expect(result).toStrictEqual(expected)
  })
})