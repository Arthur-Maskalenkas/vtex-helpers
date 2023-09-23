import { describe, expect, it, vi } from "vitest";
import { ReducerParams, States } from "../../../../../../src/views/application/context/reducer/types.ts";
import { Actions } from "../../../../../../src/views/application/context/reducer/reducer.ts";
import {
		ModelInternalListOptions
} from "../../../../../../src/views/application/context/reducer/domain/models/modelInternalListOptions.ts";
import {
		ActionHandleGoToOption
} from "../../../../../../src/views/application/context/reducer/actions/actionHandleGoToOption.ts";
import {
		ModelListOptions
} from "../../../../../../src/views/application/context/reducer/domain/models/modelListOptions.ts";



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
								[ 'validItem1', new ModelInternalListOptions('valid item 1', null, target) ],
								[ 'invalidItem1', new ModelInternalListOptions('invalid item 1', null, 'parent.1') ],
								[ 'invalidItem2', new ModelInternalListOptions('invalid item 2', fn, 'parent.1') ],
								[ 'validItem2', new ModelInternalListOptions('valid item 2', null, target) ],
								[ 'validItem3', new ModelInternalListOptions('valid item 3', null, target) ]
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

				expect(result).toMatchObject(expected)
		})

		it('should return only component when have parent with children with component', () => {
				const target = 'parent.2'
				const dispatch = makeDispatch(target)
				const fnSpy = vi.fn() as any

				const state = {
						internalListOptions: new Map([
								[ 'validItem1', new ModelInternalListOptions('invalid item 1', null, target) ],
								[ 'invalidItem1', new ModelInternalListOptions('valid item', fnSpy, target) ],
								[ 'validItem2', new ModelInternalListOptions('invalid item 2', null, target) ],
								[ 'validItem3', new ModelInternalListOptions('invalid item 3', null, target) ]
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

				expect(result).toMatchObject(expected)
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

				expect(result).toMatchObject(expected)
		})

		it('should reset search states params', () => {
				const dispatch = makeDispatch('any target')

				const state: States = {
						searchableListOptions: [
								new ModelListOptions('item to search 1', 'item1', null, null),
								new ModelListOptions('item to search 3', 'item3', null, null),
								new ModelListOptions('item to search 5', 'item5', null, null)
						],
						query: 'item to search'
				} satisfies Partial<States> as any

				const params: ReducerParams = {
						state,
						action: dispatch
				}
				const result = ActionHandleGoToOption(params)

				expect(result.searchableListOptions).toHaveLength(0)
				expect(result.query).toBeNull()
		})
})