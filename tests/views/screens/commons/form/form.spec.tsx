import { Form } from '../../../../../src/views/screens/commons/form/form.tsx'
import { render, userEvent } from '../../../../utils/test-utils.tsx'
import { expect } from 'vitest'
import { ListOptions } from '../../../../../src/views/molecules/listOptions.tsx'
import { BuilderForm } from './builders.tsx'

describe(Form.name, () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should call clearSubmit with inputs', () => {
    const { fnSpy } = BuilderForm.a().appendInput('paramCollection', 'value.0').build()

    expect(fnSpy).toHaveBeenCalledWith('paramCollection=value.0')
  })

  it('should receive multiple inputs', () => {
    const { fnSpy } = BuilderForm
      .a()
      .appendInput('paramCollection', 'collection')
      .appendInput('paramCategory', 'category')
      .appendInput('paramSpecification', 'specificationId=specificationValue')
      .build()

    expect(fnSpy).toHaveBeenCalledWith('paramCollection=collection,paramCategory=category,paramSpecification=specificationId=specificationValue')
  })

  it('should join params by character "=" if input have "data-with-value" attribute', () => {
    const { fnSpy } = BuilderForm
      .a()
      .appendInput('paramSpecification', 'specificationId=specificationValue', 'data-with-value')
      .build()

    expect(fnSpy).toHaveBeenCalledWith('paramSpecification=specificationId=specificationValue')
  })

  it('should not call when not have inputs', () => {
    const { fnSpy } = BuilderForm
      .a()
      .build()

    expect(fnSpy).not.toHaveBeenCalled()
  })

  it('should not call fn if input have "data-with-value" attribute but not have value', () => {
    const { fnSpy } = BuilderForm
      .a()
      .appendInput('paramSpecification', '', 'data-with-value')
      .build()

    expect(fnSpy).not.toHaveBeenCalled()
  })
})