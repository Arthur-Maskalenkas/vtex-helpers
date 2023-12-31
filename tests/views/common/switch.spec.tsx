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

				it('Should return first case only', () => {
						const caseContent1 = 'case content 1'
						const caseContent2 = 'case content 2'
						const caseContent3 = 'case content 3'

						const { getByText, queryByText } = render(
								<Switch.Container>
										<Switch.Case condition={false}>{caseContent1}</Switch.Case>
										<Switch.Case condition={true}>{caseContent2}</Switch.Case>
										<Switch.Case condition={true}>{caseContent3}</Switch.Case>
								</Switch.Container>)

						expect(queryByText(caseContent1)).not.toBeInTheDocument()
						expect(getByText(caseContent2)).toBeInTheDocument()
						expect(queryByText(caseContent3)).not.toBeInTheDocument()
				})
				it('Should return default case when cases	not match', () => {
						const caseContent1 = 'case content 1'
						const caseContent2 = 'case content 2'
						const caseContent3 = 'case content 3'
						const caseContent4 = 'case content 4'

						const { getByText, queryByText } = render(
								<Switch.Container>
										<Switch.Case condition={false}>{caseContent1}</Switch.Case>
										<Switch.Case condition={false}>{caseContent2}</Switch.Case>
										<Switch.Case condition={false}>{caseContent3}</Switch.Case>
										<Switch.DefaultCase>{caseContent4}</Switch.DefaultCase>
								</Switch.Container>)

						expect(queryByText(caseContent1)).not.toBeInTheDocument()
						expect(queryByText(caseContent2)).not.toBeInTheDocument()
						expect(queryByText(caseContent3)).not.toBeInTheDocument()

						expect(getByText(caseContent4)).toBeInTheDocument()
				})
		})

})