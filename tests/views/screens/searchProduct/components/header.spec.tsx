import { describe, expect, it } from "vitest";
import { Header } from "../../../../../src/views/screens/searchProduct/components/header.tsx";
import { render } from "../../../../utils/test-utils.tsx";



describe(`${Header.name} Tests Suite`, () => {

		it('Should render the component', () => {
				const { getByRole } = render(<Header/>);

				expect(getByRole('button', { name: 'Voltar' })).toBeInTheDocument()
		})

})