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

})