import { faker } from "@faker-js/faker"
import { expect } from "chai"
import "mocha";
import { describe } from "mocha";
// @ts-ignore
import sinon, { SinonStatic } from 'sinon';
import { SizesResolver } from "../../../../react/services/container-pdp/infra/sizes-resolver"
import { ProductContextState } from "../../../typings/vtex.product-context/react/ProductContextProvider"
import { Item } from "../../../typings/vtex.product-context/react/ProductTypes"
import { buildProductContextMock } from "./mocks"


export type MakeSutResponse = {
	sut: SizesResolver
}
const makeSut = (productContext: Partial<ProductContextState | undefined> = buildProductContextMock()): MakeSutResponse => {
	const sut = new SizesResolver(productContext as any)

	return {
		sut
	}
}

const buildSku = ({variation}: { variation: string }): Item => {
	return {
		...buildProductContextMock()?.product?.items?.[0],
		variations: [
			{
				name: 'Tamanho',
				values: [ variation ]
			}
		],
		sellers: [
			{
				commertialOffer: {
					AvailableQuantity: faker.number.int({
						min: 0,
						max: 10
					})
				}
			}
		],
	} as any;
}

describe('main describe', () => {
	let sandbox = {} as SinonStatic

	beforeEach(() => {
		sandbox = sinon.createSandbox() as any
	})

	afterEach(() => {
		sandbox.restore()
	})


	describe(SizesResolver.prototype.handle.name, async () => {

		it('Should return in correctly order', async () => {


			const mockSkus = [ buildSku({variation: 'M'}), buildSku({variation: 'XP'}), buildSku({variation: 'P'}) ]

			const {sut} = makeSut({
				product: {
					...buildProductContextMock().product,
					items: mockSkus
				}
			})

			const response = await sut.handle()

			const expectedFirstPosition = 'XP'
			const expectedSecondPosition = "P"
			const expectedLastPosition = "M"

			expect(response[0]?.comp_label).to.equal(expectedFirstPosition)
			expect(response[1]?.comp_label).to.equal(expectedSecondPosition)
			expect(response[2]?.comp_label).to.equal(expectedLastPosition)

		})
	})
})