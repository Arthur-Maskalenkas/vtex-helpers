import { describe, expect, it } from "vitest";
import { render } from "../../utils/test-utils.tsx";
import { faker } from "@faker-js/faker";
import { Debug } from "../../../src/views/common/debug.tsx";



describe(`${Debug.name} Tests Suite`, () => {

		it('Should render object', () => {
				const param = {
						name: faker.lorem.word()
				}

				const { getByText } = render(
						<Debug data={param}/>
				)

				expect(getByText(param.name)).toBeInTheDocument()
		})

		it('Should render object with nested object', () => {
				const param = {
						name: faker.lorem.word(),
						nested1: {
								name1: faker.lorem.word(),
								nested2: {
										name2: faker.lorem.word(),
										nested3: {
												name3: faker.lorem.word()
										}
								}
						}
				}

				const { getByText } = render(
						<Debug data={param}/>
				)

				expect(getByText('nested1')).toBeInTheDocument()
				expect(getByText('nested2')).toBeInTheDocument()
				expect(getByText('nested3')).toBeInTheDocument()

				expect(getByText('name1')).toBeInTheDocument()
				expect(getByText('name2')).toBeInTheDocument()
				expect(getByText('name3')).toBeInTheDocument()

				expect(getByText(param.name)).toBeInTheDocument()
				expect(getByText(param.nested1.name1)).toBeInTheDocument()
				expect(getByText(param.nested1.nested2.name2)).toBeInTheDocument()
				expect(getByText(param.nested1.nested2.nested3.name3)).toBeInTheDocument()
		})

		it("Should render object with nested array", () => {
				const params = {
						nested: [
								{
										nested: [
												{
														name: 'nested element level 2, index 0'
												},
												{
														nested: [
																{
																		name: 'nested element level 3, index 0'
																},

																{
																		name: 'nested element level 3, index 1'
																}
														]
												}
										]
								}
						]
				}

				const { getByText } = render(
						<Debug data={params}/>
				)

				expect(getByText('nested element level 2, index 0')).toBeInTheDocument()
				expect(getByText('nested element level 3, index 0')).toBeInTheDocument()
				expect(getByText('nested element level 3, index 1')).toBeInTheDocument()
		})

		it('SHould render objects,nested	objects and nested arrays', () => {
				const params = {
						nameNormalObject: faker.lorem.word(),
						nestedObject: {
								nameNestedObj: faker.lorem.word(),
						},
						nestedArray: [
								{
										nameNestedArray: faker.lorem.word(),
								}
						]
				}
				const { getByText } = render(
						<Debug data={params}/>
				)

				expect(getByText(params.nameNormalObject)).toBeInTheDocument()
				expect(getByText(params.nestedObject.nameNestedObj)).toBeInTheDocument()
				expect(getByText(params.nestedArray[0].nameNestedArray)).toBeInTheDocument()


				expect(getByText('nameNormalObject')).toBeInTheDocument()
				expect(getByText('nestedObject')).toBeInTheDocument()
				expect(getByText('nestedArray')).toBeInTheDocument()

				expect(getByText(('0'))).toBeInTheDocument()

		})
})