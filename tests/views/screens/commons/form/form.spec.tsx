import { Form } from '../../../../../src/views/screens/commons/form/form.tsx'
import { beforeEach, describe, expect, it, vi } from "vitest";

import { BuilderReactFormEvent } from './builders.tsx'
import * as utilsModule from '../../../../../src/views/screens/commons/form/utils.ts'
import { useFormContext } from "../../../../../src/views/screens/commons/form/context";
import {
		actionHandleInputErrors
} from "../../../../../src/views/screens/commons/form/context/reducer/actions/handleInputErrors.ts";
import * as contextModule from '../../../../../src/views/screens/commons/form/context/index.tsx'
import {
		actionHandleParamsResult
} from "../../../../../src/views/screens/commons/form/context/reducer/actions/handleParamsResult.ts";
import { faker } from "@faker-js/faker";
import { render, userEvent } from "../../../../utils/test-utils.tsx";
import { Input } from "../../../../../src/views/screens/commons/input/input.tsx";
import { Button } from "../../../../../src/views/screens/commons/button/button.tsx";



const { errorMessages, mapParams } = utilsModule

const renderForm = (
		{
				expectedString = faker.lorem.word()
		} = {}
) => {
		const sut = render(
				<Form.Container>
						<Form/>
				</Form.Container>)

		const inputSpecification = sut.getByPlaceholderText('Buscar por Especificação')
		const buttonSubmit = sut.getByRole('button', { name: 'Gerar URL' })
		userEvent.type(inputSpecification, expectedString)
		userEvent.click(buttonSubmit)


		return sut
}


describe(`${Form.name} Tests Suits`, () => {
		describe(`#${mapParams.name}`, () => {
				it('should a return error on Map if input have "data-with-value" attribute but not have value', () => {
						const params: any = BuilderReactFormEvent.a()
								.appendInputWithAttributeDataWithValue('paramSpecification', 'specificationId')
								.build()

						const result = mapParams(params)

						expect(result)
								.toEqual(new Map([ [ 'paramSpecification', errorMessages.specification.requiredValue ] ]))
				})

				it('should map multiple inputs', () => {
						const params: any = BuilderReactFormEvent.a()
								.appendInput('paramCollection', 'collection')
								.appendInput('paramCategory', 'category')
								.appendInput('paramSpecification', 'specificationId=specificationValue')
								.build()
						const result = mapParams(params)

						expect(result)
								.toBe('paramCollection=collection,paramCategory=category,paramSpecification=specificationId=specificationValue')
				})

				it('should join params by character "=" if input have "data-with-value" attribute', () => {
						const params: any = BuilderReactFormEvent.a()
								.appendInput('paramSpecification', 'specificationId=specificationValue', 'data-with-value')
								.build()

						const result = mapParams(params)

						expect(result)
								.toBe('paramSpecification=specificationId=specificationValue')
				})
		})

		describe(`#${useFormContext.name}`, () => {
				const mockUseFormContext = { dispatch: vi.fn(), states: { urlGenerated: '' } as any };
				beforeEach(() => {
						vi.spyOn(contextModule, 'useFormContext').mockReturnValue(mockUseFormContext);
				});

				it("Should not call	any action when map params returns null", () => {
						vi.spyOn(utilsModule, 'mapParams').mockReturnValue(null);
						renderForm();
						const contextSpy = useFormContext();
						expect(contextSpy.dispatch).not.toHaveBeenCalled();
				});

				it(`Should call ${actionHandleInputErrors.name} when map params returns a map with errors`, () => {
						const expectedMap = new Map([ [ 'paramSpecification', errorMessages.specification.requiredValue ] ]);
						vi.spyOn(utilsModule, 'mapParams').mockReturnValue(expectedMap);
						renderForm();
						const contextSpy = useFormContext();
						expect(contextSpy.dispatch).toHaveBeenCalledWith({
								type: 'ACTION_HANDLE_INPUT_ERRORS',
								payload: { data: { inputs: expectedMap } }
						});
				});

				it(`Should call ${actionHandleParamsResult.name} when map params returns a string`, () => {
						const expectedString = faker.lorem.word();
						vi.spyOn(utilsModule, 'mapParams').mockReturnValue(expectedString);
						renderForm();
						const contextSpy = useFormContext();
						expect(contextSpy.dispatch).toHaveBeenCalledWith({
								type: 'ACTION_HANDLE_PARAMS_RESULT',
								payload: {
										data: { params: expectedString }
								}
						});
				});
		})


		describe(`#${Form.name}`, () => {
				describe(`#${Input.name}`, () => {
						it('Should render all inputs', () => {
								vi.spyOn(contextModule, 'useFormContext')
										.mockReturnValue({ dispatch: vi.fn(), states: { urlGenerated: '' } as any })


								const { getByPlaceholderText, getByText, } = renderForm()

								const inputSpecification = getByPlaceholderText('Buscar por Especificação')
								const inputCategory = getByPlaceholderText('Buscar por Categoria')
								const inputBrand = getByPlaceholderText('Buscar por Marca')
								const inputCollection = getByPlaceholderText('Buscar por Coleção')

								expect(inputSpecification).toBeInTheDocument()
								expect(inputCategory).toBeInTheDocument()
								expect(inputBrand).toBeInTheDocument()
								expect(inputCollection).toBeInTheDocument()


						})

						it('Should render all titles inputs', () => {

								vi.spyOn(contextModule, 'useFormContext')
										.mockReturnValue({ dispatch: vi.fn(), states: { urlGenerated: '' } as any })

								const { getByText } = renderForm()


								const labelSpecification = getByText('Especificação')
								const labelCategory = getByText('Categoria')
								const labelBrand = getByText('Marca')
								const labelCollection = getByText('Coleção')

								expect(labelSpecification).toBeInTheDocument()
								expect(labelCategory).toBeInTheDocument()
								expect(labelBrand).toBeInTheDocument()
								expect(labelCollection).toBeInTheDocument()
						})

						it('Should render all descriptions inputs', () => {
								vi.spyOn(contextModule, 'useFormContext')
										.mockReturnValue({ dispatch: vi.fn(), states: { urlGenerated: '' } as any })

								const { getByText } = renderForm()

								const descriptionSpecification = getByText('O id e o valor da especificação devem ser separados por "=" Exemplo: Cor=Azul')
								const descriptionCategory = getByText('O valor pode ser tanto o ID quanto o nome da categoria. Exemplo: Tênis | 100')
								const descriptionBrand = getByText('O valor pode ser tanto o ID quanto o nome da marca. Exemplo: Mizuno | 100')
								const descriptionCollection = getByText('O valor pode ser tanto o ID quanto o nome da coleção. Exemplo: Primavera | 100')

								expect(descriptionSpecification).toBeInTheDocument()
								expect(descriptionCategory).toBeInTheDocument()
								expect(descriptionBrand).toBeInTheDocument()
								expect(descriptionCollection).toBeInTheDocument()


								expect(descriptionSpecification).toHaveAttribute('id', 'descriptionSpecification')
								expect(descriptionCategory).toHaveAttribute('id', 'descriptionCategory')
								expect(descriptionBrand).toHaveAttribute('id', 'descriptionBrand')
								expect(descriptionCollection).toHaveAttribute('id', 'descriptionCollection')

						})
				})

				describe(`#${Button.name}`, () => {
						it('Should render all buttons', () => {
								vi.spyOn(contextModule, 'useFormContext')
										.mockReturnValue({ dispatch: vi.fn(), states: { urlGenerated: '' } as any })


								const { getByPlaceholderText, getByText, } = renderForm()

								const buttonOpenResultInAnotherPage = getByText('Abrir resultado em outra página')
								const buttonOpenResultInSamePage = getByText('Abrir resultado na mesma página')
								const buttonSubmit = getByText('Gerar URL')

								expect(buttonOpenResultInAnotherPage).toBeInTheDocument()
								expect(buttonOpenResultInSamePage).toBeInTheDocument()
								expect(buttonSubmit).toBeInTheDocument()
						})

						it('Should render button links disabled on init', () => {

								const { getByRole } = renderForm()

								const buttonOpenResultInAnotherPage = getByRole('button', { name: 'Abrir resultado em outra página' })
								const buttonOpenResultInSamePage = getByRole('button', { name: 'Abrir resultado na mesma página' })

								expect(buttonOpenResultInAnotherPage).toBeDisabled()
								expect(buttonOpenResultInSamePage).toBeDisabled()
						})

						it('Should render buttons links enabled	when urlGenerated is not empty', () => {
								vi.spyOn(contextModule, 'useFormContext')
										.mockReturnValue({ dispatch: vi.fn(), states: { urlGenerated: 'anyUrl' } as any })

								const { getByRole } = renderForm()

								const buttonOpenResultInAnotherPage = getByRole('button', { name: 'Abrir resultado em outra página' })
								const buttonOpenResultInSamePage = getByRole('button', { name: 'Abrir resultado na mesma página' })

								expect(buttonOpenResultInAnotherPage).not.toBeDisabled()
								expect(buttonOpenResultInSamePage).not.toBeDisabled()
						})
				})
		})
})