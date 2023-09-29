import { describe, expect, it } from "vitest";
import { Switch } from "../../../src/views/common/switch.tsx";
import { render } from "../../utils/test-utils.tsx";
import { faker } from "@faker-js/faker";



const renderSut = (childrens: any) => {
		const { getByText } = render(<Switch.Container>{childrens}</Switch.Container>)

		return {
				getByText
		}
}

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
				it('Should return first case matched', () => {
				})
				it('Should return default case', () => {
				})
				it('Should return default case when cases	not match', () => {
				})
				it('Should return null when not have default	case and cases not match', () => {
				})
		})

})