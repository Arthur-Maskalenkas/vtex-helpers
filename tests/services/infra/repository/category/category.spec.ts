import { beforeEach, describe, expect, it, vi } from "vitest";
import { RepositoryCategory } from '../../../../../src/services/infra/repository/category.ts'
import { fetchHelper } from '../../../../utils/test-utils.tsx'
import { type ExternalModelCategory } from '../../../../../src/services/domain/external/models/category.ts'
import { type ProtocolMapModelCategory } from '../../../../../src/services/data/protocols/mapModelCategory.ts'



const makeExternalModelCategory = (index = 0): ExternalModelCategory => ({
		hasChildren: false,
		children: [],
		name: `name.${index}`,
		url: `url.${index}`,
		Title: `title.${index}`,
		id: index,
		MetaTagDescription: `metaTagDescription.${index}`
})

class BuilderParamsProtocolMapModelCategory {
		private params: ProtocolMapModelCategory.Params = []

		private constructor() {
		}

		public static aProtocol() {
				return new BuilderParamsProtocolMapModelCategory()
		}

		withChildren() {
				this.params = [ makeExternalModelCategory(0) ]

				return this
		}

		withDepthChildrens() {
				const category = {
						...makeExternalModelCategory(0),
						hasChildren: true,
						children: [
								{
										...makeExternalModelCategory(1),
										hasChildren: true,
										children: [
												makeExternalModelCategory(2)
										]
								}
						]
				}

				this.params = [ category ]

				return this
		}

		withChildrens() {
				const children0 = makeExternalModelCategory(0)
				const children1 = makeExternalModelCategory(1)

				const category = [
						children0,
						children1
				]

				this.params = category

				return this
		}

		public build(): ProtocolMapModelCategory.Params {
				return this.params
		}
}

const makeSut = () => {
		const sut = new RepositoryCategory()
		return {
				sut
		}
}

describe(RepositoryCategory.name, () => {
		// before each, create a new instance of sut
		let sut: RepositoryCategory

		beforeEach(() => {
				const newSut = makeSut()

				vi.resetAllMocks()

				sut = newSut.sut
		})

		describe(RepositoryCategory.prototype.loadAll.name, () => {
				it('should call fetch with correct url', async () => {
						const fetchSpy = fetchHelper()

						fetchSpy.mockResolvedValue(
								{ json: async () => Promise.resolve({}) }
						)

						await sut.loadAll()

						expect(fetch).toHaveBeenCalledWith('/api/catalog_system/pub/category/tree/3')
						expect(fetch).toHaveBeenCalledTimes(1)
				})

				it('should return empty array if api returns null', async () => {
						const fetchSpy = fetchHelper()

						fetchSpy.mockResolvedValue(
								{ json: async () => Promise.resolve(null) }
						)

						const result = await sut.loadAll()

						expect(result).toStrictEqual([])
				})

				it('should return all data returned from api', async () => {
						const fetchSpy = fetchHelper()

						fetchSpy.mockResolvedValue(
								{
										json: async () => Promise.resolve({
												anyData: 'anyData'
										})
								}
						)

						const result = await sut.loadAll()

						expect(result).toStrictEqual({ anyData: 'anyData' })
				})
		})

		describe('mapper', () => {
				it('should map model', async () => {
						const params: ProtocolMapModelCategory.Params = [
								{ id: 'category.0', hasChildren: false, children: [] } as any
						]

						const { sut } = makeSut()

						const result = await sut.map(params)

						expect(result).toHaveLength(1)
						expect(result).toMatchInlineSnapshot(`
        [
          {
            "children": [],
            "id": "category.0",
            "name": undefined,
            "url": undefined,
          },
        ]
      `)
				})

				it('should map depth models', async () => {
						const params: ProtocolMapModelCategory.ParamListModel = [ {
								id: 0,
								hasChildren: true,
								name: 'name.0',
								url: 'url.0',
								Title: 'title.0',
								MetaTagDescription: 'metaTagDescription.0',
								children: [ {
										id: 1,
										hasChildren: true,
										name: 'name.0.0',
										MetaTagDescription: 'metaTagDescription.0.0',
										url: 'url.0.0',
										Title: 'title.0.0',
										children: [ {
												name: 'name.0.0.0',
												url: 'url.0.0.0',
												Title: 'title.0.0.0',
												MetaTagDescription: 'metaTagDescription.0.0.0',
												id: 2,
												hasChildren: false,
												children: []
										} ]
								} ]
						} ]

						const { sut } = makeSut()

						const expected: ProtocolMapModelCategory.ResultListModel = [
								{
										id: 0,
										name: 'name.0',
										url: 'url.0',
										children: [
												{
														id: 1,
														name: 'name.0.0',
														url: 'url.0.0',
														children: [
																{
																		id: 2,
																		name: 'name.0.0.0',
																		url: 'url.0.0.0',
																		children: []
																}
														]
												}
										]
								}
						]

						const result = await sut.map(params)

						expect(result).toStrictEqual(expected)
				})
		})
})