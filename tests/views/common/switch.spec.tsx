import { describe, expect, it } from "vitest";
import { Switch } from "../../../src/views/common/switch.tsx";
import { render } from "../../utils/test-utils.tsx";
import { faker } from "@faker-js/faker";



describe(`${Switch.name} Tests Suite`, () => {

		describe(`# ${Switch.name}`, () => {
				it('Should return case', () => {
						const caseContent = faker.lorem.word()

						const { getByText } = render(
								<Switch.Container>
										<Switch.Case condition={true}>{caseContent}</Switch.Case>
								</Switch.Container>)


						expect(getByText(caseContent)).toBeInTheDocument()
				})


		})

})