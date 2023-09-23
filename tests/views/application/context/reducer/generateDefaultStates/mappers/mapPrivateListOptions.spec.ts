import {
		MapInternalListOptions
} from '../../../../../../../src/views/application/context/reducer/generateDefaultStates/mappers/mapInternalListOptions.ts'
import { type internalListOptions } from '../../../../../../../src/views/application/context/reducer/types.ts'
import {
		type ManualItem
} from '../../../../../../../src/views/application/context/reducer/generateDefaultStates/protocols.ts'
import {
		ModelInternalListOptions
} from '../../../../../../../src/views/application/context/reducer/domain/models/modelInternalListOptions.ts'
import { describe, expect, it } from "vitest";



const makeSut = () => {
		const sut = new MapInternalListOptions()
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
						items: {}
				}
		}

		for (let i = 1; i <= lengthChildrens; i++) {
				const key = `option.${mainIndex}.${i}`
				result[`option.${mainIndex}`].items[key] = {
						title: `Opção ${mainIndex}.${i}`
				}
		}

		return result
}

describe(MapInternalListOptions.name, () => {
		it('should create each key on Map with key as path and value as function or options', () => {
				const { sut } = makeSut()
				const params: ManualItem.Items = buildParamsWithChildrens({ lengthChildrens: 2 })

				const expected: internalListOptions.Items = new Map(
						[
								[ 'option.1', new ModelInternalListOptions('Opção 1', null, null) ],
								[ 'option.1/option.1.1', new ModelInternalListOptions('Opção 1.1', null, 'option.1') ],
								[ 'option.1/option.1.2', new ModelInternalListOptions('Opção 1.2', null, 'option.1') ]
						]
				)

				const result = sut.map({ manualList: params })
				expect(result).toStrictEqual(expected)
		})

		it('should work with depth levels', () => {
				const { sut } = makeSut()

				const expected: internalListOptions.Items = new Map(
						[
								[ 'option.2', new ModelInternalListOptions('Opção 2', null, null) ],
								[ 'option.2/option.2.1', new ModelInternalListOptions('Opção 2.1', null, 'option.2') ],
								[ 'option.2/option.2.1/option.2.1.1', {
										title: 'Opção 2.1.1',
										parent: 'option.2/option.2.1',
										component: null
								} ],
								[ 'option.2/option.2.1/option.2.1.1/option.2.1.1.1', {
										title: 'Opção 2.1.1.1',
										parent: 'option.2/option.2.1/option.2.1.1',
										component: null
								} ]
						]
				)

				const params: ManualItem.Items = {
						'option.2': {
								title: 'Opção 2',
								component: null,
								items: {
										'option.2.1': {
												title: 'Opção 2.1',
												component: null,
												items: {
														'option.2.1.1': {
																title: 'Opção 2.1.1',
																component: null,
																items: {
																		'option.2.1.1.1': {
																				title: 'Opção 2.1.1.1',
																				items: null,
																				component: null
																		}
																}
														}
												}
										}
								}
						}

				}

				const result = sut.map({ manualList: params })

				expect(result).toStrictEqual(expected)
		})

		it('should work with multiple childrens', () => {
				const { sut } = makeSut()
				const params: ManualItem.Items = {
						...buildParamsWithChildrens({ lengthChildrens: 2, mainIndex: 1 }),
						...buildParamsWithChildrens({ lengthChildrens: 2, mainIndex: 2 })
				}

				const expected: internalListOptions.Items = new Map(
						[
								[ 'option.1', new ModelInternalListOptions('Opção 1', null, null) ],
								[ 'option.1/option.1.1', new ModelInternalListOptions('Opção 1.1', null, 'option.1') ],
								[ 'option.1/option.1.2', new ModelInternalListOptions('Opção 1.2', null, 'option.1') ],

								[ 'option.2', new ModelInternalListOptions('Opção 2', null, null) ],
								[ 'option.2/option.2.1', new ModelInternalListOptions('Opção 2.1', null, 'option.2') ],
								[ 'option.2/option.2.2', new ModelInternalListOptions('Opção 2.2', null, 'option.2') ]
						]
				)

				const result = sut.map({ manualList: params })
				expect(result).toStrictEqual(expected)
		})

		it('should return null if not have items or component present', () => {
				const { sut } = makeSut()

				const result = sut.map()
				expect(result).toBeNull()
		})

		it('should return Components in Component attribute', () => {
				const { sut } = makeSut()
				const fn = function () {
						return 'any_value'
				}
				const params: ManualItem.Items = {
						anyAttributeName: {
								title: 'Any Title',
								component: fn as any,
								items: null
						}
				}

				const expected: internalListOptions.Items = new Map(
						[
								[ 'anyAttributeName', {
										title: 'Any Title',
										parent: null,
										component: fn as any
								} ]
						]
				)

				const result = sut.map({ manualList: params })
				expect(result).toStrictEqual(expected)
		})

		it('super test', () => {
				const { sut } = makeSut()
				const fn = function () {
						return 'any_value'
				}
				const params: ManualItem.Items = {
						...buildParamsWithChildrens({ lengthChildrens: 2 }),
						anyAttributeName: {
								title: 'Any Title',
								component: fn as any,
								items: null
						}
				}

				const expected: internalListOptions.Items = new Map(
						[
								[ 'option.1', new ModelInternalListOptions('Opção 1', null, null) ],
								[ 'option.1/option.1.1', new ModelInternalListOptions('Opção 1.1', null, 'option.1') ],
								[ 'option.1/option.1.2', new ModelInternalListOptions('Opção 1.2', null, 'option.1') ],
								[ 'anyAttributeName', {
										title: 'Any Title',
										parent: null,
										component: fn as any
								} ]
						]
				)

				const result = sut.map({ manualList: params })
				expect(result).toStrictEqual(expected)
		})
})