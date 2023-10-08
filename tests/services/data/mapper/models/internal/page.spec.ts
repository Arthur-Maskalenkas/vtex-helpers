import { MapperInternalModelPage } from "../../../../../../src/services/data/mapper/models/internal/page.ts";
import { faker } from "@faker-js/faker";
import { InternalModelPage } from "../../../../../../src/services/domain/internal/models/page.ts";
import { beforeEach, describe, expect, it } from "vitest";



const makeParams = () => ({
		[faker.word.words(1)]: {
				map: [ '' ],
				blockId: faker.string.alphanumeric(10),
				routeId: faker.string.alphanumeric(10),
				path: faker.string.alphanumeric(10),
				allowConditions: true,
				canonical: faker.string.alphanumeric(10),
				declarer: faker.string.alphanumeric(10),
				context: faker.string.alphanumeric(10)
		}
})

describe(`${MapperInternalModelPage.name} Tests Suite`, () => {
		let sut
		let mockExternalPages

		beforeEach(() => {
				sut = MapperInternalModelPage
				mockExternalPages = [ makeParams(), makeParams() ]
		})


		describe(`# ${MapperInternalModelPage.mapExternalModelRuntimePages.name}`, () => {
				it('Should return empty array when map not search any page to return', async () => {
						const result = await sut.mapExternalModelRuntimePages({})
						expect(result).toEqual([])
				})

				it('Should map correctly a page', async () => {
						const [ paramData ] = mockExternalPages

						const params = {
								paramData
						}

						const result = await sut.mapExternalModelRuntimePages(params)

						expect(result[0]).instanceOf(InternalModelPage)
				})


				it('Should map correctly a list of page', async () => {
						const [ paramData0, paramData1 ] = mockExternalPages

						const params = {
								paramData0,
								paramData1
						}

						const result = await sut.mapExternalModelRuntimePages(params)

						expect(result[0]).instanceOf(InternalModelPage)
						expect(result[1]).instanceOf(InternalModelPage)
				})
		})

})