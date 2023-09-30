import { beforeEach, describe, expect, it, SpyInstance, vi } from "vitest";
import { Header } from "../../../../../src/views/screens/searchProduct/components/header.tsx";
import { render } from "../../../../utils/test-utils.tsx";
import * as SearchProductContextModule from "../../../../../src/views/screens/searchProduct/context/index.tsx";



describe(`${Header.name} Tests Suite`, () => {
		let searchProductContextModule: SpyInstance<any, any>

		beforeEach(() => {
				searchProductContextModule = vi.spyOn(SearchProductContextModule, 'useSearchProductContext')
		})

		it('Should render correctly', () => {
				searchProductContextModule.mockImplementation(() => {
						return {
								states: {
										currentModule: 'product'
								} as any,
								dispatch: vi.fn()
						}
				})

				const { getByRole } = render(<Header/>)

				expect(getByRole('button', { name: 'Voltar' })).toBeInTheDocument()
				expect(getByRole('heading', { name: 'product' })).toBeInTheDocument()
		})

		it('Should call dispatch with correct value when click on button', () => {
				const dispatch = vi.fn()
				searchProductContextModule.mockImplementation(() => {
						return {
								states: {
										currentModule: 'product'
								} as any,
								dispatch: dispatch
						}
				})

				const { getByRole } = render(<Header/>)

				userEvent.click(getByRole('button', { name: 'Voltar' }))

				expect(dispatch).toHaveBeenCalledWith({ type: 'ACTION_HANDLE_BACK_MODULE' })
		})
		it('Should disable button when currentModule is equal to form', () => {
				searchProductContextModule.mockImplementation(() => {
						return {
								states: {
										currentModule: 'form'
								} as any,
								dispatch: vi.fn()
						}
				})

				const { getByRole } = render(<Header/>)

				expect(getByRole('button', { name: 'Voltar' })).toBeDisabled()
		})

})