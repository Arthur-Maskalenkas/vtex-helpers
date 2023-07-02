import { faker } from "@faker-js/faker"
import { expect } from "chai"
import "mocha";
import { describe } from "mocha";
// @ts-ignore
import sinon, { SinonStatic } from 'sinon';
import { HelperFetch } from "../../../../react/services/container-pdp/helpers/fetch"
import { ColorsResolver } from "../../../../react/services/container-pdp/infra/colors-resolver"
import { ProductContextState } from "../../../typings/vtex.product-context/react/ProductContextProvider"
import { buildProductApiRestVtexSearch, buildProductContextMock } from "./mocks"


export type MakeSutResponse = {
	sut: ColorsResolver
}
const makeSut = (productContext: Partial<ProductContextState | undefined> = buildProductContextMock()): MakeSutResponse => {
	const sut = new ColorsResolver(productContext as any)

	return {
		sut
	}
}


describe('main describe', () => {
	let sandbox = {} as SinonStatic

	beforeEach(() => {
		sandbox = sinon.createSandbox() as any
	})

	afterEach(() => {
		sandbox.restore()
	})


	describe(ColorsResolver.name, async () => {

		it('Should map and sort correctly', async () => {
			const currentProductId = faker.string.uuid()

			const mockProductContext = buildProductContextMock({
				product: {
					...buildProductContextMock().product,
					productId: currentProductId
				}
			})

			const mockFirstProduct = buildProductApiRestVtexSearch({productId: currentProductId})
			const mockSecondProduct = buildProductApiRestVtexSearch({
				skuSpecifications: [
					{
						field: {name: 'Cor'} as any,
						values: [ {name: 'a'} as any ]
					}
				]
			})
			const mockThirtheenProduct = buildProductApiRestVtexSearch({
				skuSpecifications: [
					{
						field: {name: 'Cor'} as any,
						values: [ {name: 'b'} as any ]
					}
				]
			})

			sandbox.stub(HelperFetch, 'getData').resolves([
				mockSecondProduct, mockFirstProduct, mockThirtheenProduct
			])

			const {sut} = makeSut(mockProductContext)

			const response = await sut.handle()

			expect(response[0]?.form_value).to.equal(mockFirstProduct?.productId)
			expect(response[1]?.form_value).to.equal(mockSecondProduct?.productId)
			expect(response[2]?.form_value).to.equal(mockThirtheenProduct?.productId)
		})

		it('Should return colors only with the same km value', async () => {

			const buildMockProductContext = (productId: string, valuePropertie: string) => ({
				...buildProductContextMock(),
				product: {
					...buildProductContextMock().product,
					properties: [
						{
							name: 'KM',
							values: [ valuePropertie ]
						}
					] as any,
					productId
				},
			})


			const mockProductFetched1 = buildProductApiRestVtexSearch({KM: [ '10KM' ]})
			const mockProductFetched2 = buildProductApiRestVtexSearch({KM: [ '10KM' ]})
			const mockProductFetched3 = buildProductApiRestVtexSearch({KM: [ '20KM' ]})
			const mockProductFetched4 = buildProductApiRestVtexSearch({KM: [ '20KM' ]})
			const mockProductFetched5 = buildProductApiRestVtexSearch({KM: [ '20KM' ]})

			sandbox.stub(HelperFetch, 'getData').resolves([
				mockProductFetched1,
				mockProductFetched2,
				mockProductFetched3,
				mockProductFetched4,
				mockProductFetched5
			])

			const idContextProduct = faker.string.uuid()
			const mockContextProduct = buildMockProductContext(idContextProduct, '10KM')

			const {sut} = makeSut(mockContextProduct)


			const expectedIdsExcluded = [ mockProductFetched3, mockProductFetched4, mockProductFetched5 ]?.map(item => item?.productId)

			const response = await sut.handle()
			const responseMapped = response?.map(item => item.form_value)

			expect(expectedIdsExcluded).to.not.contains(responseMapped)
			expect(response).to.have.lengthOf(2)


		})
	})
})