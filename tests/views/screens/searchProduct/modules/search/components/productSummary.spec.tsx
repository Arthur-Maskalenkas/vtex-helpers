import { beforeEach, describe, expect, it, vi } from "vitest";
import {
		ProductSummary
} from "../../../../../../../src/views/screens/searchProduct/modules/search/components/productSummary.tsx";
import { faker } from "@faker-js/faker";
import { render, userEvent } from "../../../../../../utils/test-utils.tsx";
import * as ModuleSearchProductContext from "../../../../../../../src/views/screens/searchProduct/context";
import { useSearchProductContext } from "../../../../../../../src/views/screens/searchProduct/context";



describe(`${ProductSummary.name} Tests Suite`, () => {
		let params, searchProductContextSpy

		beforeEach(() => {
				params = {
						product: {
								currentSku: {
										name: faker.commerce.productName(),
										id: faker.string.uuid(),
										quantity: faker.number.int(50)
								}
						}
				}

				searchProductContextSpy = vi.spyOn(ModuleSearchProductContext, 'useSearchProductContext').mockReturnValue({
						dispatch: vi.fn(),
						states: {} as any
				})

		})


		it('Should render all basic elements', () => {
				const { getByRole, getByText, container } = render(<ProductSummary {...params} />)

				const { name, quantity, id } = params.product.currentSku

				expect(container.firstChild).toHaveAttribute('data-product-available', 'true')

				expect(getByRole('img', { name: /imagem de produto/i })).toBeInTheDocument()

				expect(getByRole('button', { name: /ver mais informações/i })).toBeInTheDocument()

				expect(getByRole('button', { name: /ir para pagina do produto/i })).toBeInTheDocument()

				expect(getByText(name)).toBeInTheDocument()
				expect(getByText(`SKU ID ${id}`)).toBeInTheDocument()
				expect(getByText(`${quantity} unidades no estoque`)).toBeInTheDocument()

		})

		it('Should call dispatch ACTION_HANDLE_CHANGE_TO_MODULE_PRODUCT when click on button "Ver mais informações"', () => {
				const { getByRole } = render(<ProductSummary {...params} />)

				const button = getByRole('button', { name: /ver mais informações/i })

				userEvent.click(button)

				const contextSpy = useSearchProductContext()

				expect(contextSpy.dispatch).toHaveBeenCalledWith({
						type: 'ACTION_HANDLE_CHANGE_TO_MODULE_PRODUCT',
						payload: { data: params.product }
				})

		})

		it('Should render container unavailable if product is not available', () => {

				params.product.currentSku.isAvailable = false
				const { container } = render(<ProductSummary {...params} />)

				expect(container.firstChild).toHaveAttribute('data-product-available', 'false')


		})
})